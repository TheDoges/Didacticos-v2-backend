<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    //
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
}
