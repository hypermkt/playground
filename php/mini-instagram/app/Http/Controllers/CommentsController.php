<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Comment;

class CommentsController extends Controller
{
    public function store(Request $request, $postId)
    {
        $comment = new Comment(['post_id' => $request->post_id, 'body' => $request->body]);

        $post = Post::findOrFail($postId);
        $post->comments()->save($comment);

        return redirect('/');
    }
}
