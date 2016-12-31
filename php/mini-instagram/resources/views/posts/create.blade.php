@extends('layouts.default')

@section('content')
<h2>Upload Photo</h2>

<form method="post" action="{{ action('PostsController@store') }}" enctype="multipart/form-data">
    {{ csrf_field() }}
    <input type="file" name="fileName">
    <input type="submit" value="upload">
</form>

@endsection