@extends('layouts.default')

@section('title', 'Blog Detail')

@section('content')
<a href="{{ url('/') }}" class="pull-right fs12">Back</a>
<h1>{{ $post->title }}</h1>
<p>{!! nl2br(e($post->body)) !!}</p>


<h2>Comments</h2>



@forelse ($post->comments as $comment)
<li>{{ $comment->body }}</li>
@empty
<li>no comments</li>


<form method="post" action="{{ action('CommentsController@store', $post->id) }}">
  {{ csrf_field() }}

  @if ($errors->has('body'))
  <span class="error">{{ $errors->first('body') }}</span>
  @endif

  <p><input type="text" name="body" placeholder="body" value="{{ old('body') }}"></p>
  <p><input type="submit" value="Add Comment"></p>
</form>


@endforelse

@endsection
