<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    //
    const NAME = 'name';
    const SURNAME = 'surname';
    const TITLE_ID = 'title_id';

    protected $fillable = [Lecturer::NAME, Lecturer::SURNAME, Lecturer::TITLE_ID];

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
        return $this->belongsToMany(Subject::class, LecturerSubject::TABLE_NAME);
    }
}
