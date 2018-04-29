<?php

use Illuminate\Database\Seeder;

class DegreeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $degree = new \App\Models\Degree();
        $degree->id = 1;
        $degree->name = 'Pierwszego stopnia';
        $degree->prefix = 'I';
        $degree->alias = 'Inżynierskie/Licencjackie';
        $degree->number = 1;
        $degree->save();

        $degree = new \App\Models\Degree();
        $degree->id = 2;
        $degree->name = 'Drugiego stopnia';
        $degree->prefix = 'II';
        $degree->alias = 'Magisterskie';
        $degree->number = 2;
        $degree->save();

        $degree = new \App\Models\Degree();
        $degree->id = 3;
        $degree->name = 'Trzeciego stopnia';
        $degree->prefix = 'II';
        $degree->alias = 'Doktoranckie';
        $degree->number = 2;
        $degree->save();
    }
}
