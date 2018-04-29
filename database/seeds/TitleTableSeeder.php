<?php

use Illuminate\Database\Seeder;

class TitleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $title = new \App\Models\Title();
        $title->name = 'PROFESOR';
        $title->short_name = 'PROF.';
        $title->lab_permission = true;
        $title->lec_permission = true;
        $title->exe_permission = true;
        $title->sem_permission = true;
        $title->pro_permission = true;
        $title->min_hours = 100;
        $title->max_hours = 400;
        $title->warning_percent = 10;
        $title->save();

        $title = new \App\Models\Title();
        $title->name = 'DOKTOR HABILITOWANY';
        $title->short_name = 'DR HAB.';
        $title->lab_permission = true;
        $title->lec_permission = true;
        $title->exe_permission = true;
        $title->sem_permission = true;
        $title->pro_permission = true;
        $title->min_hours = 100;
        $title->max_hours = 380;
        $title->warning_percent = 10;
        $title->save();

        $title = new \App\Models\Title();
        $title->name = 'DOKTOR';
        $title->short_name = 'DR';
        $title->lab_permission = true;
        $title->lec_permission = true;
        $title->exe_permission = true;
        $title->sem_permission = true;
        $title->pro_permission = true;
        $title->min_hours = 100;
        $title->max_hours = 350;
        $title->warning_percent = 10;
        $title->save();

        $title = new \App\Models\Title();
        $title->name = 'MAGISTER';
        $title->short_name = 'MGR';
        $title->lab_permission = true;
        $title->lec_permission = false;
        $title->exe_permission = true;
        $title->sem_permission = false;
        $title->pro_permission = false;
        $title->min_hours = 100;
        $title->max_hours = 330;
        $title->warning_percent = 10;
        $title->save();
    }
}
