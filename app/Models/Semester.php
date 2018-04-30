<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    //
    protected $fillable = ['name', 'year'];

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

    public function subjects() {
        return $this->hasMany(Subject::class);
    }
}
