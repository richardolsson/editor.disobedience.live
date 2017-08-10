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
    $('.asset .title').html(data.title.split('\n').join('<br>'));
    $('.asset .info').html(data.info.split('\n').join('<br>'));
    $('.asset .gradient')
        .css('left', -(data.gradient * 900) + '%');

    $('.preview').each(function() {
        var preview = $(this);
        var asset = preview.find('.asset');
        var classes = asset.attr('class').split(/\s+/);
        var medium = classes[1];
        var format = classes[2];

        var path = location.pathname;
        if (path.slice(-1) != '/') {
            path += '/';
        }

        var url = path + 'asset'
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaW5mbzogJycsXG4gICAgZ3JhZGllbnQ6IDAuMCxcbn07XG5cbmZ1bmN0aW9uIGhvb2tFbnRyeShpbnB1dCwgZmllbGQpIHtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgZGF0YVtmaWVsZF0gPSBpbnB1dC52YWwoKTtcbiAgICAgICAgcmVkcmF3KCk7XG4gICAgfVxuXG4gICAgaW5wdXQua2V5dXAob25DaGFuZ2UpO1xuICAgIGlucHV0LmNoYW5nZShvbkNoYW5nZSk7XG4gICAgaW5wdXQub24oJ2lucHV0Jywgb25DaGFuZ2UpO1xufVxuXG5mdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgJCgnLmFzc2V0IC50aXRsZScpLmh0bWwoZGF0YS50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyPicpKTtcbiAgICAkKCcuYXNzZXQgLmluZm8nKS5odG1sKGRhdGEuaW5mby5zcGxpdCgnXFxuJykuam9pbignPGJyPicpKTtcbiAgICAkKCcuYXNzZXQgLmdyYWRpZW50JylcbiAgICAgICAgLmNzcygnbGVmdCcsIC0oZGF0YS5ncmFkaWVudCAqIDkwMCkgKyAnJScpO1xuXG4gICAgJCgnLnByZXZpZXcnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJldmlldyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBhc3NldCA9IHByZXZpZXcuZmluZCgnLmFzc2V0Jyk7XG4gICAgICAgIHZhciBjbGFzc2VzID0gYXNzZXQuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICB2YXIgbWVkaXVtID0gY2xhc3Nlc1sxXTtcbiAgICAgICAgdmFyIGZvcm1hdCA9IGNsYXNzZXNbMl07XG5cbiAgICAgICAgdmFyIHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKHBhdGguc2xpY2UoLTEpICE9ICcvJykge1xuICAgICAgICAgICAgcGF0aCArPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gcGF0aCArICdhc3NldCdcbiAgICAgICAgICAgICsgJz9tPScgKyBtZWRpdW1cbiAgICAgICAgICAgICsgJyZmPScgKyBmb3JtYXRcbiAgICAgICAgICAgICsgJyZnPScgKyBkYXRhLmdyYWRpZW50XG4gICAgICAgICAgICArICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGl0bGUpXG4gICAgICAgICAgICArICcmaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEuaW5mbyk7XG5cbiAgICAgICAgcHJldmlldy5maW5kKCdhJykuYXR0cignaHJlZicsIHVybCk7XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGRhdGEudGl0bGUgPSAkKCcjdGl0bGVJbnB1dCcpLnZhbCgpO1xuICAgIGRhdGEuaW5mbyA9ICQoJyNpbmZvSW5wdXQnKS52YWwoKTtcbiAgICBkYXRhLmdyYWRpZW50ID0gJCgnI2dyYWRJbnB1dCcpLnZhbCgpO1xuICAgIHJlZHJhdygpO1xuXG4gICAgaG9va0VudHJ5KCQoJyN0aXRsZUlucHV0JyksICd0aXRsZScpO1xuICAgIGhvb2tFbnRyeSgkKCcjaW5mb0lucHV0JyksICdpbmZvJyk7XG4gICAgaG9va0VudHJ5KCQoJyNncmFkSW5wdXQnKSwgJ2dyYWRpZW50Jyk7XG59KTtcbiJdfQ==
