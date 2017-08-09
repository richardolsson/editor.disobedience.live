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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaW5mbzogJycsXG4gICAgZ3JhZGllbnQ6IDAuMCxcbn07XG5cbmZ1bmN0aW9uIGhvb2tFbnRyeShpbnB1dCwgZmllbGQpIHtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgZGF0YVtmaWVsZF0gPSBpbnB1dC52YWwoKTtcbiAgICAgICAgcmVkcmF3KCk7XG4gICAgfVxuXG4gICAgaW5wdXQua2V5dXAob25DaGFuZ2UpO1xuICAgIGlucHV0LmNoYW5nZShvbkNoYW5nZSk7XG4gICAgaW5wdXQub24oJ2lucHV0Jywgb25DaGFuZ2UpO1xufVxuXG5mdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgJCgnLmFzc2V0IC50aXRsZScpLnRleHQoZGF0YS50aXRsZSk7XG4gICAgJCgnLmFzc2V0IC5pbmZvJykudGV4dChkYXRhLmluZm8pO1xuICAgICQoJy5hc3NldCAuZ3JhZGllbnQnKVxuICAgICAgICAuY3NzKCdsZWZ0JywgLShkYXRhLmdyYWRpZW50ICogOTAwKSArICclJyk7XG5cbiAgICAkKCcucHJldmlldycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2aWV3ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGFzc2V0ID0gcHJldmlldy5maW5kKCcuYXNzZXQnKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBhc3NldC5hdHRyKCdjbGFzcycpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIHZhciBtZWRpdW0gPSBjbGFzc2VzWzFdO1xuICAgICAgICB2YXIgZm9ybWF0ID0gY2xhc3Nlc1syXTtcblxuICAgICAgICB2YXIgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAocGF0aC5zbGljZSgtMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBwYXRoICsgJ2Fzc2V0J1xuICAgICAgICAgICAgKyAnP209JyArIG1lZGl1bVxuICAgICAgICAgICAgKyAnJmY9JyArIGZvcm1hdFxuICAgICAgICAgICAgKyAnJmc9JyArIGRhdGEuZ3JhZGllbnRcbiAgICAgICAgICAgICsgJyZ0PScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YS50aXRsZSlcbiAgICAgICAgICAgICsgJyZpPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YS5pbmZvKTtcblxuICAgICAgICBwcmV2aWV3LmZpbmQoJ2EnKS5hdHRyKCdocmVmJywgdXJsKTtcbiAgICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgZGF0YS50aXRsZSA9ICQoJyN0aXRsZUlucHV0JykudmFsKCk7XG4gICAgZGF0YS5pbmZvID0gJCgnI2luZm9JbnB1dCcpLnZhbCgpO1xuICAgIGRhdGEuZ3JhZGllbnQgPSAkKCcjZ3JhZElucHV0JykudmFsKCk7XG4gICAgcmVkcmF3KCk7XG5cbiAgICBob29rRW50cnkoJCgnI3RpdGxlSW5wdXQnKSwgJ3RpdGxlJyk7XG4gICAgaG9va0VudHJ5KCQoJyNpbmZvSW5wdXQnKSwgJ2luZm8nKTtcbiAgICBob29rRW50cnkoJCgnI2dyYWRJbnB1dCcpLCAnZ3JhZGllbnQnKTtcbn0pO1xuIl19
