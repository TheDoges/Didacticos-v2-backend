<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //
    protected $fillable = [];

    public function field() {
        return $this->belongsTo(Field::class)->first();
    }

    public function semester() {
        return $this->belongsTo(Semester::class)->first();
    }
}
