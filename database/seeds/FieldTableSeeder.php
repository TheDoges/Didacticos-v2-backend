<?php

use Illuminate\Database\Seeder;

class FieldTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $field = new \App\Models\Field();
        $field->id = 1;
        $field->name = "Informatyka";
        $field->type = "STACJONARNE";
        $field->degree_id = 1;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 2;
        $field->name = "Informatyka";
        $field->type = "NIESTACJONARNE";
        $field->degree_id = 1;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 3;
        $field->name = "Informatyka";
        $field->type = "STACJONARNE";
        $field->degree_id = 2;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 4;
        $field->name = "Informatyka";
        $field->type = "NIESTACJONARNE";
        $field->degree_id = 2;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 5;
        $field->name = "Automatyka";
        $field->type = "STACJONARNE";
        $field->degree_id = 1;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 6;
        $field->name = "Automatyka";
        $field->type = "NIESTACJONARNE";
        $field->degree_id = 1;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 7;
        $field->name = "Automatyka";
        $field->type = "STACJONARNE";
        $field->degree_id = 2;
        $field->save();

        $field = new \App\Models\Field();
        $field->id = 8;
        $field->name = "Automatyka";
        $field->type = "NIESTACJONARNE";
        $field->degree_id = 2;
        $field->save();

    }
}
