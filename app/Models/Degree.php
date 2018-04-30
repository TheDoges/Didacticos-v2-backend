<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
    //
    protected $fillable = ['name', 'prefix', 'alias', 'number'];

    const STORE_RULES = [
        'name' => 'required',
        'prefix' => 'required',
        'alias' => 'required',
        'number' => 'required'
    ];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
    ];

    public function fields() {
        return $this->hasMany(Field::class);
    }
}
