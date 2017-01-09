<!DOCMENT html>
<html lang="ja">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/styles.css">
    <script type="text/javascript" src="{{ elixir('js/all.js') }}"></script>
</head>
<body>
<div class="container">
    <div class="row col-md-4 col-md-offset-4">
        @yield('content')
    </div>
</div>
</body>
</html>
