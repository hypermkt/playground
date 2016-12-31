@extends('layouts.default')

@section('content')
<h2>index</h2>

@forelse ($posts as $post)

@empty
<p>empty</p>
@endforelse


@endsection