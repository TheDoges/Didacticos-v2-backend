<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    //
    protected $fillable = ['name', 'surname', 'title_id'];

    const STORE_RULES = [
        'name' => 'required',
        'surname' => 'required',
        'title_id' => 'required'
    ];

    const UPDATE_RULES = [
        'id' => 'required'
    ];

    const DELETE_RULES = [
        'id' => 'required'
    ];

    public function title() {
        return $this->belongsTo(Title::class);
    }

    public function subjects() {
        return $this->belongsToMany(Subject::class)->using(LecturerSubject::class);
    }
}
