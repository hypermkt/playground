@extends('layouts.default')

@section('title', 'Blog Posts')

@section('content')
<h1>Posts</h1>

<a href="{{ url('/posts/create') }}" class="pull-right fs12">Add New</a>

<ul>
  @forelse ($posts as $post)
  <li>
    <a href="{{ action('PostsController@show', $post->id) }}">{{ $post->title }}</a>
    <a href="{{ action('PostsController@edit', $post->id) }}">[Edit]</a>
    <form id="form_{{ $post->id }}"  method="post" action="{{ action('PostsController@destroy', $post->id) }}">
      {{ csrf_field() }}
      {{ method_field('delete') }}
    <a href="#" data-id="{{ $post->id }}" onClick="deletePost(this)" >[Delete]</a>
    </form>
  </li>
  @empty
  <li>no posts</li>
  @endforelse

  <script>
    function deletePost(e) {
      'use strict';

      if (confirm('are you sure?')) {
        document.getElementById('form_' + e.dataset.id).submit();
      }
    }
  </script>
</ul>

@endsection
