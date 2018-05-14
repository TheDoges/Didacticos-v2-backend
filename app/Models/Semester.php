<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    //
    const ID = 'id';
    const NAME = 'name';
    const YEAR = 'year';

    protected $fillable = [Semester::ID, Semester::NAME, Semester::YEAR];

    const STORE_RULES = [
        'name' => 'required',
        'year' => 'required'
    ];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
    ];

    const COPY_SEMESTER_RULES = Semester::STORE_RULES + [
        'template_id' => 'required'
    ];

    public function subjects() {
        return $this->hasMany(Subject::class);
    }
}
