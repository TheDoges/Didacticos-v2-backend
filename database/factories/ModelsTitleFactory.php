<?php

use Faker\Generator as Faker;


$factory->define(App\Models\Title::class, function (Faker $faker) {
    return [
        //
        'name' => function() {
            $titles = ['DOKTOR', 'PROFESOR', 'MAGISTER', 'DOKTOR HABILITOWANY'];
            return $titles[rand(0,4)];
        },
        'short_name' => function() {
            $titles = ['DR', 'PROF.', 'MGR', 'DR HAB.'];
            return $titles[rand(0,4)];

        },
        'lab_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'lab_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'lec_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'exe_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'sem_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'pro_permission' => function() {
            return rand(1,3) === 2 ? true : false;
        },
        'min_hours' => rand(50, 150),
        'max_hours' => rand(200, 300),
        'warning_percent' => 10
    ];
});
