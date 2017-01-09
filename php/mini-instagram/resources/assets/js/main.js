'use strict';

$(function(){
    $('.like-btn').on('click', function() {
        var postId = $(this).data('post-id');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var url = '/likes/' + postId + '/store';
        $.post({
            url: url,
            dataType: 'json'
        }).done(function(response) {
            $('.like_count' + postId).html(response.like_count);
        });
    });
});

