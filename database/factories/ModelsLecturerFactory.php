<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Lecturer::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'surname' => $faker->name,
        'title_id' => function() {
            return \App\Models\Title::all()->random();
        }

    ];
});
