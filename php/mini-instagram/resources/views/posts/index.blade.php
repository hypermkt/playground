@extends('layouts.default')

@section('content')
<h2>index</h2>

<a href="{{ url('/posts/create') }}">Upload Photo</a>

@forelse ($posts as $post)

<div>
    {{ $post->created_at->diffForHumans() }}
    <p><img src="{{ Storage::url($post->image_path) }}"></p>

    @forelse ($post->comments as $comment)
        <p>{{ $comment->body }}</p>
    @empty
        no comment
    @endforelse

    <form method="post" action="{{ action('PostsController@destroy', $post->id) }}">
        {{ csrf_field() }}
        {{ method_field('delete') }}
        <input type="submit" value="[Delete]">
    </form>

    <form method="post" action="{{ action('CommentsController@store', $post->id) }}">
        {{ csrf_field() }}
        <input type="text" name="body" value="{{ old('body') }}">
        <input type="submit" value="[Submit]">
    </form>
</div>

@empty
<p>empty</p>
@endforelse


@endsection