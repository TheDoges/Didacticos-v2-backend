<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
    //
    protected $fillable = ['name', 'prefix', 'alias', 'number'];

    public function fields() {
        return $this->hasMany(Field::class);
    }
}
