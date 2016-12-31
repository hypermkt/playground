@extends('layouts.default')

@section('content')
<h2>index</h2>

<a href="{{ url('/posts/create') }}">Upload Photo</a>

@forelse ($posts as $post)

<div>
    {{ $post->created_at->diffForHumans() }}
    <img src="{{ Storage::url($post->image_path) }}">

    <form method="post" action="{{ action('PostsController@destroy', $post->id) }}">
        {{ csrf_field() }}
        {{ method_field('delete') }}
        <input type="submit" value="[Delete]">
    </form>
</div>

@empty
<p>empty</p>
@endforelse


@endsection