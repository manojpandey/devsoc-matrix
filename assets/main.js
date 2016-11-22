$(function() {
    'use strict';

    // https://css-tricks.com/snippets/javascript/shuffle-array/

    $.getJSON('data.json', function(data) {
        var peeps = $('#peeps');
        var keys = Object.keys(data);
        keys.sort(function(a, b) {
            return Math.random() - 0.5;
        });
        for (var id in keys) {
            var name = data[keys[id]][0];
            var url = data[keys[id]][1];
            var a = $('<a/>')
                .prop('href', "http://facebook.com/" + keys[id])
                .append($('<img>').prop('src', url).prop('alt', name).prop('title', name))
                .appendTo(peeps);
        }
    });
});
