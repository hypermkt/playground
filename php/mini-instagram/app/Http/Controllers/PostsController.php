<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Post;
use App\Comment;

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
            $image = Image::make($request->fileName->path());

            // 画像をファイル保存
            $filePath = 'images/' . uniqid();

            // ref: http://image.intervention.io/api/resize
            $image->resize(600, null, function($constraint) {
                $constraint->aspectRatio();
            })->save(storage_path('app/public/' . $filePath));

            // ファイルパスをDBに保存
            $post = new Post();
            $post->image_path = $filePath;
            $post->save();
        }

        return redirect('/');
    }

    public function like(Request $request, $postId)
    {
        $post = Post::find($postId);
        $post->increment('like_count');

        return response()->json([
            'like_count' => $post->like_count
        ]);
    }

    public function destroy($id)
    {
        // DBから削除
        $post = Post::findOrFail($id);

        // Stroageから削除
        $disk = Storage::disk('public');
        $disk->delete($post->image_path);

        $post->delete();

        return redirect('/');
    }
}
