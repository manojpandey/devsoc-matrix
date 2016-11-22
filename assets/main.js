$(function() {
    'use strict';

    // https://css-tricks.com/snippets/javascript/shuffle-array/
    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    $.getJSON('data.json', function(data) {
        var peeps = $('#peeps');
        shuffle(data);
        for (var id in data) {
            var name = data[id][0];
            var url = data[id][1];
            var a = $('<a/>')
                .prop('href', "http://facebook.com/" + id)
                .append($('<img>').prop('src', url))
                .appendTo(peeps);
        }
    });
});
