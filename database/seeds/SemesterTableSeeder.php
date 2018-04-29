<?php

use Illuminate\Database\Seeder;

class SemesterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $semester = new \App\Models\Semester();
        $semester->id = 1;
        $semester->type = 'ZIMOWY';
        $semester->year = '2018/2019';
        $semester->save();

        $semester = new \App\Models\Semester();
        $semester->id = 2;
        $semester->type = 'LETNI';
        $semester->year = '2018/2019';
        $semester->save();

    }
}
