<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    //
    const NAME = 'name';
    
    protected $fillable = [
        'name',
        'short_name',
        'full_name',
        'lab_permission',
        'lec_permission',
        'exe_permission',
        'sem_permission',
        'pro_permission',
        'min_hours',
        'max_hours',
        'warning_percent'
        ];

    const STORE_RULES = [
        'name' => 'required',
        'short_name' => 'required',
        'lab_permission' => 'required',
        'lec_permission' => 'required',
        'exe_permission' => 'required',
        'sem_permission' => 'required',
        'pro_permission' => 'required',
        'min_hours' => 'required',
        'max_hours' => 'required',
        'warning_percent' => 'required',
    ];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
    ];
}
