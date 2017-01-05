<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Like;
use App\Post;

class LikesController extends Controller
{
    public function store(Request $request, $postId)
    {
        $like = new Like(['post_id' => $postId]);

        $post = Post::findOrFail($postId);
        $post->likes()->save($like);

        return redirect('/');
    }
}
