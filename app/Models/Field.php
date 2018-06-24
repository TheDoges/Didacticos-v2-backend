<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    //
    const TYPE = 'type';
    const NAME = 'name';
    protected $fillable = ['name', 'type'/*, 'degree_id'*/];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
    ];

    const STORE_RULES = [
        'name' => 'required',
        'type' => 'required'
        //'degree_id' => 'required'
    ];

//    public function degree() {
//        return $this->belongsTo(Degree::class);
//    }

    public function subjects() {
        return $this->hasMany(Subject::class);
    }
}
