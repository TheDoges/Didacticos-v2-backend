<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    const ID = 'id';
    const SEMESTER_ID = 'semester_id';
    const TYPE = 'type';
    const NAME ='name';
    const DEGREE_ID = 'degree_id';
    const FIELD_ID = 'field_Id';
    const HOURS = 'hours';
    const SEMESTER_NUMBER = 'semester_number';

    const TYPE_ALIASES = [
        'lec' => 'Wykłady',
        'lab' => 'Labolatoria',
        'exe' => 'Ćwiczenia',
        'pro' => 'Projekty',
        'sem' => 'Seminaria'
    ];
    
    //
    protected $fillable = [Subject::NAME, Subject::TYPE, Subject::HOURS, Subject::FIELD_ID, Subject::SEMESTER_ID, Subject::DEGREE_ID, Subject::SEMESTER_NUMBER];

    const STORE_RULES = [
        Subject::NAME => 'required',
        Subject::TYPE => 'required',
        Subject::HOURS => 'required',
        Subject::FIELD_ID => 'required',
        Subject::SEMESTER_ID => 'required',
        Subject::DEGREE_ID => 'required',
        Subject::SEMESTER_NUMBER => 'required'
    ];

    const UPDATE_RULES = [
        Subject::ID => 'required'
    ];

    const DELETE_RULES = [
        Subject::ID => 'required'
    ];

    public function field() {
        return $this->belongsTo(Field::class);
    }

    public function semester() {
        return $this->belongsTo(Semester::class);
    }

    public function degree() {
        return $this->belongsTo(Degree::class);
    }

    public function lecturers() {
        return $this->belongsToMany(Lecturer::class, LecturerSubject::TABLE_NAME);
    }

    public function replicateToSemester($semesterId) {
        $new =  $this->replicate();
        $new[Subject::SEMESTER_ID] = $semesterId;
        $new->save();
        return $new;

    }
}
