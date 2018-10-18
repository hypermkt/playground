<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;

class BookTest extends TestCase
{
    use DatabaseTransactions;
    private $user;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory(\App\User::class)->create();
    }

    public function testIndex()
    {
        $book = factory(\App\Book::class)->create();
        $response = $this->getJson('/api/books?width=200&height=100');
        $response->assertStatus(200);
        $response->assertJson([
                [
                    'id' => $book->id,
                    'title' => $book->title,
                    'width' => 200,
                    'height' => 100,
                ]
        ]);
    }

    public function testIndex_Response400_WhenRequestWithInvalidQueryParameters()
    {
        $response = $this->getJson('/api/books?width=200');
        $response->assertStatus(400);
    }

    public function testResponse404NotFound_WhenRequestNotExistingRouting()
    {
        $response = $this->getJson('/api/not_found_routing');
        $response->assertStatus(404);
        $response->assertJson([
            'type' => '',
            'title' => '',
            'code' => 'not_found',
        ]);
    }

    public function testResponse201Created_WhenGivenValidParams()
    {
        $response = $this->postJson('/api/books', ['title' => 'hoge']);
        $response->assertStatus(201);
    }

    public function testUpdate_Response200OK_WhenGivenValidParams()
    {
        Passport::actingAs($this->user);
        $book = factory(\App\Book::class)->create();
        $response = $this->putJson('/api/books/' . $book->id, ['title' => 'hoge']);
        $response->assertStatus(200);
    }

    public function testUpdate_Response401_WhenRequestWithNoAccessToken()
    {
        $book = factory(\App\Book::class)->create();
        $response = $this->putJson('/api/books/' . $book->id, ['title' => 'hoge']);
        $response->assertStatus(401);
        $response->assertJson([
            'type' => '',
            'title' => 'Unauthenticated.',
            'code' => 'unauthorized',
        ]);
    }

    public function testResponse422_WhenValidationError()
    {
        $response = $this->postJson('/api/books', ['title' => '']);
        $response->assertStatus(422);
        $response->assertJson([
            'type' => '',
            'title' => 'The given data was invalid.',
            'code' => 'validation_error',
            'invalid-params' => [
                [
                    'name' => 'title',
                    'reason' => [
                        'The title field is required.'
                    ]
                ]
            ],
        ]);
    }
}
