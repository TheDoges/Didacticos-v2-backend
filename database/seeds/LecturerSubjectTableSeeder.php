<?php

use Illuminate\Database\Seeder;
use App\Models\LecturerSubject;

class LecturerSubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 1;
        $lecturerSubject->subject_id = 1;
        $lecturerSubject->hours = 15;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 1;
        $lecturerSubject->subject_id = 5;
        $lecturerSubject->hours = 15;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 1;
        $lecturerSubject->subject_id = 3;
        $lecturerSubject->hours = 20;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 2;
        $lecturerSubject->subject_id = 2;
        $lecturerSubject->hours = 15;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 2;
        $lecturerSubject->subject_id = 4;
        $lecturerSubject->hours = 20;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 3;
        $lecturerSubject->subject_id = 5;
        $lecturerSubject->hours = 30;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 3;
        $lecturerSubject->subject_id = 7;
        $lecturerSubject->hours = 30;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 4;
        $lecturerSubject->subject_id = 6;
        $lecturerSubject->hours = 15;
        $lecturerSubject->save();

        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->lecturer_id = 4;
        $lecturerSubject->subject_id = 8;
        $lecturerSubject->hours = 10;
        $lecturerSubject->save();
    }
}
