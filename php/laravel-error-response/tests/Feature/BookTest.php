<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookTest extends TestCase
{
    use DatabaseTransactions;

    public function testIndex()
    {
        $response = $this->getJson('/api/books');
        $response->assertStatus(200);
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
}
