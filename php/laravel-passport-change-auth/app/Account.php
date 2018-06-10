<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Account extends Authenticatable
{
    use HasApiTokens;

    protected $table = 't_account';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'login_id', 'pass',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'pass'
    ];

    public function findForPassport($username)
    {
        return $this->where('login_id', $username)->first();
    }

    public function validateForPassportPasswordGrant($password)
    {
        return $this->password == $password;
    }
}
