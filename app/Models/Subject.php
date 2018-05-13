<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    const ID = 'id';
    const SEMESTER_ID = 'semester_id';
    
    //
    protected $fillable = ['name', 'type', 'hours', 'field_id', 'semester_id', 'degree_id', 'semester_number'];

    const STORE_RULES = [
        'name' => 'required',
        'type' => 'required',
        'hours' => 'required',
        'field_id' => 'required',
        'semester_id' => 'required',
        'semester_number' => 'required',
        'degree_id' => 'required'
    ];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
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
