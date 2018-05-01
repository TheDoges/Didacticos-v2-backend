<?php

use Illuminate\Database\Seeder;

class SubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $subject = new \App\Models\Subject();
        $subject->id = 1;
        $subject->name = 'Zaawansowane bazy danych';
        $subject->type = 'lec';
        $subject->hours = 25;
        $subject->field_id = 3;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 1;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 2;
        $subject->name = 'Zaawansowane bazy danych';
        $subject->type = 'lab';
        $subject->hours = 15;
        $subject->field_id = 3;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 1;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 3;
        $subject->name = 'Zaawansowane bazy danych';
        $subject->type = 'lec';
        $subject->hours = 25;
        $subject->field_id = 4;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 2;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 4;
        $subject->name = 'Zaawansowane bazy danych';
        $subject->type = 'lab';
        $subject->hours = 15;
        $subject->field_id = 4;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 2;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 5;
        $subject->name = 'Programowanie współbieżne i rozproszone';
        $subject->type = 'lec';
        $subject->hours = 25;
        $subject->field_id = 3;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 1;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 6;
        $subject->name = 'Programowanie współbieżne i rozproszone';
        $subject->type = 'lab';
        $subject->hours = 15;
        $subject->field_id = 3;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 1;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 7;
        $subject->name = 'Programowanie współbieżne i rozproszone';
        $subject->type = 'lec';
        $subject->hours = 25;
        $subject->field_id = 4;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 2;
        $subject->save();

        $subject = new \App\Models\Subject();
        $subject->id = 8;
        $subject->name = 'Programowanie współbieżne i rozproszone';
        $subject->type = 'lab';
        $subject->hours = 15;
        $subject->field_id = 4;
        $subject->semester_id = 1;
        $subject->semester_number = 1;
        $subject->degree_id = 2;
        $subject->save();
    }
}
