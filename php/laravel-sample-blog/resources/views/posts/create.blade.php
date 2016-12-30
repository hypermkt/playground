@extends('layouts.default')

@section('title', 'Blog Create')

@section('content')
<a href="{{ url('/') }}" class="pull-right fs12">Back</a>
<h1>Add New</h1>

<form method="post" action="{{ url('/posts') }}">
  {{ csrf_field() }}
  @if ($errors->has('title'))
    <span class="error">{{ $errors->first('title') }}</span>
  @endif

  @if ($errors->has('body'))
    <span class="error">{{ $errors->first('body') }}</span>
  @endif

  <p><input type="text" name="title" placeholder="title" value="{{ old('title') }}"></p>
  <p><textarea name="body" placeholder="body">{{ old('body') }}</textarea></p>
  <p><input type="submit" value="Add New"></p>
</form>
@endsection
