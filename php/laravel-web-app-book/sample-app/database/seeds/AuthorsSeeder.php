<?php

use Illuminate\Database\Seeder;

class AuthorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $faker = Faker\Factory::create('ja_JP');
//
//        for ($i = 0; $i < 10; $i++) {
//            DB::table('authors')->insert([
//                'name' => $faker->name
//            ]);
//        }

        factory(\App\Author::class, 50)->create();
    }
}
