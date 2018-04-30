<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //
    protected $fillable = ['name', 'type', 'hours', 'field_id', 'semester_id', 'semester_number'];

    const STORE_RULES = [
        'name' => 'required',
        'type' => 'required',
        'hours' => 'required',
        'field_id' => 'required',
        'semester_id' => 'required',
        'semester_number' => 'required',
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
}
