(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data = {
    title: '',
    info: '',
    gradient: 0.0,
};

function hookEntry(input, field) {
    function onChange() {
        data[field] = input.val();
        redraw();
    }

    input.keyup(onChange);
    input.change(onChange);
    input.on('input', onChange);
}

function redraw() {
    $('.asset .title').text(data.title);
    $('.asset .info').text(data.info);
    $('.asset .gradient')
        .css('left', -(data.gradient * 900) + '%');

    $('.preview').each(function() {
        var preview = $(this);
        var asset = preview.find('.asset');
        var classes = asset.attr('class').split(/\s+/);
        var medium = classes[1];
        var format = classes[2];

        var url = '/asset'
            + '?m=' + medium
            + '&f=' + format
            + '&g=' + data.gradient
            + '&t=' + encodeURIComponent(data.title)
            + '&i=' + encodeURIComponent(data.info);

        preview.find('a').attr('href', url);
    });
}

$(document).ready(function() {
    data.title = $('#titleInput').val();
    data.info = $('#infoInput').val();
    data.gradient = $('#gradInput').val();
    redraw();

    hookEntry($('#titleInput'), 'title');
    hookEntry($('#infoInput'), 'info');
    hookEntry($('#gradInput'), 'gradient');
});

},{}]},{},[1]);
