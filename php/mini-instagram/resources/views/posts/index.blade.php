@extends('layouts.default')

@section('content')
<h2>index</h2>

<a href="{{ url('/posts/create') }}">Upload Photo</a>

@forelse ($posts as $post)

<div>
    <img src="{{ Storage::url($post->image_path) }}">
</div>

@empty
<p>empty</p>
@endforelse


@endsection