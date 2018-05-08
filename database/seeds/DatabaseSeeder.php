<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DegreeTableSeeder::class);
        $this->call(SemesterTableSeeder::class);
        $this->call(TitleTableSeeder::class);
        $this->call(LecturerTableSeeder::class);
        $this->call(FieldTableSeeder::class);
        $this->call(SubjectTableSeeder::class);
        $this->call(LecturerSubjectTableSeeder::class);
        $this->call(UserTableSeeder::class);


    }
}
