<?php

use Illuminate\Database\Seeder;
use App\Models\Lecturer;

class LecturerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $lecturer = new Lecturer();
        $lecturer->name = 'Krzysztof';
        $lecturer->surname = 'Zatwarnicki';
        $lecturer->title_id = 1;
        $lecturer->save();

        $lecturer = new Lecturer();
        $lecturer->name = 'Anna';
        $lecturer->surname = 'Zatwarnicka';
        $lecturer->title_id = 3;
        $lecturer->save();

        $lecturer = new Lecturer();
        $lecturer->name = 'Anna';
        $lecturer->surname = 'Bryniarska';
        $lecturer->title_id = 3;
        $lecturer->save();

        $lecturer = new Lecturer();
        $lecturer->name = 'Artur';
        $lecturer->surname = 'Smolczyk';
        $lecturer->title_id = 3;
        $lecturer->save();

        $lecturer = new Lecturer();
        $lecturer->name = 'Jan';
        $lecturer->surname = 'Sadecki';
        $lecturer->title_id = 1;
        $lecturer->save();

        $lecturer = new Lecturer();
        $lecturer->name = 'Mariusz';
        $lecturer->surname = 'Pelc';
        $lecturer->title_id = 2;
        $lecturer->save();

    }
}
