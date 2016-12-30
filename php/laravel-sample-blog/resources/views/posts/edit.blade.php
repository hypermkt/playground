@extends('layouts.default')

@section('title', 'Blog Edit')

@section('content')
<a href="{{ url('/') }}" class="pull-right fs12">Back</a>
<h1>Edit</h1>

<form method="post" action="{{ url('/posts', $post->id) }}">
  {{ csrf_field() }}
  {{ method_field('patch') }}
  @if ($errors->has('title'))
    <span class="error">{{ $errors->first('title') }}</span>
  @endif

  @if ($errors->has('body'))
    <span class="error">{{ $errors->first('body') }}</span>
  @endif

  <p><input type="text" name="title" placeholder="title" value="{{ old('title', $post->title) }}"></p>
  <p><textarea name="body" placeholder="body">{{ old('body', $post->body) }}</textarea></p>
  <p><input type="submit" value="Edit"></p>
</form>
@endsection
