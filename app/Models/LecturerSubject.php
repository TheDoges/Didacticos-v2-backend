<?php

namespace App\Models;

use App\Utils\HTTP\HTTPMethods;
use Illuminate\Database\Eloquent\Model;

class LecturerSubject extends Model
{
    const TABLE_NAME = 'lecturer_subjects';
    const ID = 'id';
    const LECTURER_ID = 'lecturer_id';
    const SUBJECT_ID = 'subject_id';
    const HOURS = 'hours';
    //

    protected $table = LecturerSubject::TABLE_NAME;
    protected $fillable = [LecturerSubject::SUBJECT_ID, LecturerSubject::HOURS, LecturerSubject::LECTURER_ID];
    
    const STORE_RULES = [
        LecturerSubject::LECTURER_ID => 'required',
        LecturerSubject::SUBJECT_ID => 'required',
        LecturerSubject::HOURS => 'required'
    ];

    const UPDATE_RULES = [
        //
        LecturerSubject::ID => 'required'
    ];

    const DELETE_RULES = [
        LecturerSubject::ID => 'required'
    ];

    const GET_ALL_BY_SEMESTER_RULES = [
        Subject::SEMESTER_ID => 'required'
    ];

    const REQUEST_RULES = [
        HTTPMethods::POST => LecturerSubject::STORE_RULES,
        HTTPMethods::PUT => LecturerSubject::UPDATE_RULES,
        HTTPMethods::DELETE => LecturerSubject::DELETE_RULES
    ];

    public static function getLecturerSubjectBySemesterId($semesterId) {
        $associativeArrayOfSubjectsById = LecturerSubject::getAssociativeArrayOfModelById(Subject::class);
        $allLecturerSubject = LecturerSubject::all();
        $associativeArrayOfLecturerSubjectBySemesterId = LecturerSubject::getAssociativeArrayOfLecturerSubjectBySemesterId($allLecturerSubject, $associativeArrayOfSubjectsById);
        if(!isset($associativeArrayOfLecturerSubjectBySemesterId[$semesterId])) {
            return [];
        }
        return $associativeArrayOfLecturerSubjectBySemesterId[$semesterId];
    }

    public static function getAssociativeArrayOfModelById($modelClass) {
        $array = [];
        $allModels = $modelClass::all();
        foreach($allModels as $model) {
            $array[$model[$modelClass::ID]] = $model;
        }
        return $array; 
    }

    public static function getAssociativeArrayOfLecturerSubjectBySemesterId($lecturerSubject, $subjectsArray) {
        $array = [];
        foreach($lecturerSubject as $ls) {
            $semesterId = $subjectsArray[$ls[LecturerSubject::SUBJECT_ID]][Subject::SEMESTER_ID];
            $array[$semesterId] = isset($array[$semesterId]) ? $array[$semesterId] : [];
            array_push($array[$semesterId], $ls);
        }
        return $array;
    }

    public function replicateLecturerSubjectWithNewSubjectId($subjectId) {
        $new = $this->replicate();
        $new[LecturerSubject::SUBJECT_ID] = $subjectId;
        $new->save();
        return $new;
    }

}
