<?php

use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('t_account')->insert([
            'login_id' => 'hoge',
            'pass' => 'fuga',
        ]);
    }
}
