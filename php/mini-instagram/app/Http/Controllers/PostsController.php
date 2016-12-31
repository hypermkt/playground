<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::latest('created_at')->get();

        return view('posts.index')
            ->with('posts', $posts);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        // ref: https://manablog.org/laravel-image-manipulation/
        if ($request->hasFile('fileName')) {
            // 画像をファイル保存
            $path = $request->fileName->store('images', 'public');

            // ファイルパスをDBに保存
            $post = new Post();
            $post->image_path = $path;
            $post->save();
        }

        return redirect('/');
    }
}
