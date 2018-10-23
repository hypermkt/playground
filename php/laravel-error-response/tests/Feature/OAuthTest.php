<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OAuthTest extends TestCase
{
    use DatabaseTransactions;

    protected $user;
    protected $client;

    public function setUp()
    {
        parent::setUp();
        $this->artisan('passport:client', ['--password' => null, '--no-interaction' => true]);
        $this->client = \DB::table('oauth_clients')->where('password_client', 1)->first();
        $this->user = factory(User::class)->create();
    }

    public function testPasswordGrant_WillResponseAccessTokenAndRefreshToken_WhenRequestWithValidInfo()
    {
        $response = $this->requestPasswordGrantOAuthToken($this->user->email, 'secret');
        $response->assertStatus(200);
    }

    public function testPasswordGrant_WillResponseAccessTokenAndRefreshToken_WhenRequestWithWrongPassword()
    {
        $response = $this->requestPasswordGrantOAuthToken($this->user->email, 'wrong_password');
        $response->assertStatus(401);
    }

    protected function requestPasswordGrantOAuthToken(string $username, string $password) : TestResponse
    {
        return $this->postJson('/oauth/token', [
            'grant_type' => 'password',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => $username,
            'password' => $password,
        ]);
    }
}