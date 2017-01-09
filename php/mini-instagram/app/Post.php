<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Post extends Model
{
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
