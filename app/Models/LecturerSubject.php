<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use App\Utils\HTTP\HTTPMethods;

class LecturerSubject extends Pivot
{
    const ID = 'id';
    const LECTURER_ID = 'lecturer_id';
    const SUBJECT_ID = 'subject_id';
    const HOURS = 'hours';
    //

    protected $fillable = [LecturerSubject::LECTURER_ID, LecturerSubject::SUBJECT_ID, LecturerSubject::HOURS];
    
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

    const RULES = [
        HTTPMethods::POST => LecturerSubject::STORE_RULES,
        HTTPMethods::PUT => LecturerSubject::UPDATE_RULES,
        HTTPMethods::DELETE => LecturerSubject::DELETE_RULES
    ];
}
