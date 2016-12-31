<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'PostsController@index');
Route::get('/posts/create', 'PostsController@create');
Route::post('/posts/store', 'PostsController@store');
Route::delete('/posts/{id}', 'PostsController@destroy');

Route::post('/comments/{id}/store', 'CommentsController@store');
Route::delete('/comments/{id}', 'CommentsController@destroy');

