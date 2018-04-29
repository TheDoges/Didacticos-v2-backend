<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    //
    protected $fillable = [];

    public function title() {
        return $this->belongsTo(Title::class)->first();
    }
}
