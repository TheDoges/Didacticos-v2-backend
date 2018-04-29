<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    //
    protected $fillable = ['name', 'type'];

    public function degree() {
        return $this->belongsTo(Degree::class)->first();
    }
}
