@extends('layouts.default')

@section('content')
<h1>Mini Instagram</h1>

<a href="{{ url('/posts/create') }}" class="btn btn-default btn-upload">アップロード</a><br />

@foreach ($posts as $post)
<div class="thumbnail">
    <div align="right">{{ $post->created_at->diffForHumans() }}</div>

    <img src="{{ Storage::url($post->image_path) }}">

    <p>いいね！ {{ $post->likeCount($post->id) }}件</p>

    <form method="post" action="{{ action('LikesController@store', $post->id) }}">
        {{ csrf_field() }}
        <input type="submit" class="btn btn-info" value="いいね">
    </form>

    <form method="post" action="{{ action('PostsController@destroy', $post->id) }}">
        {{ csrf_field() }}
        {{ method_field('delete') }}
        <input type="submit" class="btn btn-warning" value="画像削除">
    </form>

    @foreach ($post->comments as $comment)
        <p>{{ $comment->body }}
            <form method="post" action="{{ action('CommentsController@destroy', $comment->id) }}">
            {{ csrf_field() }}
            {{ method_field('delete') }}
            <input type="submit" class="btn btn-warning" value="コメント削除">
            </form>
        </p>
    @endforeach

    <form method="post" action="{{ action('CommentsController@store', $post->id) }}">
        {{ csrf_field() }}
        <input type="text" name="body" value="{{ old('body') }}">
        <input type="submit" class="btn btn-info" value="投稿">
    </form>
</div>
@endforeach


@endsection