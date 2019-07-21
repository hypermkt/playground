<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

//use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Author::class, function (Faker $faker) {
    $faker->locale('ja_JP');
    return [
        'name' => $faker->name
    ];
});
