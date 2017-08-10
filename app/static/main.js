(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data = {
    title: '',
    info: '',
    color: 'white',
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

    $('.asset').removeClass('white black');
    $('.asset').addClass(data.color);
    $('.asset.screen .logo').each(function() {
        var src = $(this).attr('src');
        $(this).attr('src', src.replace(/logo-.*\.svg/, 'logo-' + data.color + '.svg'));
    });

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
            + '&c=' + data.color
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

    $('#whiteInput, #blackInput').change(function() {
        data.color = $('#whiteInput').prop('checked')? 'white' : 'black';
        redraw();
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGRhdGEgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGluZm86ICcnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGdyYWRpZW50OiAwLjAsXG59O1xuXG5mdW5jdGlvbiBob29rRW50cnkoaW5wdXQsIGZpZWxkKSB7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICAgIGRhdGFbZmllbGRdID0gaW5wdXQudmFsKCk7XG4gICAgICAgIHJlZHJhdygpO1xuICAgIH1cblxuICAgIGlucHV0LmtleXVwKG9uQ2hhbmdlKTtcbiAgICBpbnB1dC5jaGFuZ2Uob25DaGFuZ2UpO1xuICAgIGlucHV0Lm9uKCdpbnB1dCcsIG9uQ2hhbmdlKTtcbn1cblxuZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICQoJy5hc3NldCAudGl0bGUnKS5odG1sKGRhdGEudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKSk7XG4gICAgJCgnLmFzc2V0IC5pbmZvJykuaHRtbChkYXRhLmluZm8uc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKSk7XG4gICAgJCgnLmFzc2V0IC5ncmFkaWVudCcpXG4gICAgICAgIC5jc3MoJ2xlZnQnLCAtKGRhdGEuZ3JhZGllbnQgKiA5MDApICsgJyUnKTtcblxuICAgICQoJy5hc3NldCcpLnJlbW92ZUNsYXNzKCd3aGl0ZSBibGFjaycpO1xuICAgICQoJy5hc3NldCcpLmFkZENsYXNzKGRhdGEuY29sb3IpO1xuICAgICQoJy5hc3NldC5zY3JlZW4gLmxvZ28nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBzcmMucmVwbGFjZSgvbG9nby0uKlxcLnN2Zy8sICdsb2dvLScgKyBkYXRhLmNvbG9yICsgJy5zdmcnKSk7XG4gICAgfSk7XG5cbiAgICAkKCcucHJldmlldycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2aWV3ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGFzc2V0ID0gcHJldmlldy5maW5kKCcuYXNzZXQnKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBhc3NldC5hdHRyKCdjbGFzcycpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIHZhciBtZWRpdW0gPSBjbGFzc2VzWzFdO1xuICAgICAgICB2YXIgZm9ybWF0ID0gY2xhc3Nlc1syXTtcblxuICAgICAgICB2YXIgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAocGF0aC5zbGljZSgtMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBwYXRoICsgJ2Fzc2V0J1xuICAgICAgICAgICAgKyAnP209JyArIG1lZGl1bVxuICAgICAgICAgICAgKyAnJmY9JyArIGZvcm1hdFxuICAgICAgICAgICAgKyAnJmM9JyArIGRhdGEuY29sb3JcbiAgICAgICAgICAgICsgJyZnPScgKyBkYXRhLmdyYWRpZW50XG4gICAgICAgICAgICArICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGl0bGUpXG4gICAgICAgICAgICArICcmaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEuaW5mbyk7XG5cbiAgICAgICAgcHJldmlldy5maW5kKCdhJykuYXR0cignaHJlZicsIHVybCk7XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGRhdGEudGl0bGUgPSAkKCcjdGl0bGVJbnB1dCcpLnZhbCgpO1xuICAgIGRhdGEuaW5mbyA9ICQoJyNpbmZvSW5wdXQnKS52YWwoKTtcbiAgICBkYXRhLmdyYWRpZW50ID0gJCgnI2dyYWRJbnB1dCcpLnZhbCgpO1xuICAgIHJlZHJhdygpO1xuXG4gICAgaG9va0VudHJ5KCQoJyN0aXRsZUlucHV0JyksICd0aXRsZScpO1xuICAgIGhvb2tFbnRyeSgkKCcjaW5mb0lucHV0JyksICdpbmZvJyk7XG4gICAgaG9va0VudHJ5KCQoJyNncmFkSW5wdXQnKSwgJ2dyYWRpZW50Jyk7XG5cbiAgICAkKCcjd2hpdGVJbnB1dCwgI2JsYWNrSW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRhdGEuY29sb3IgPSAkKCcjd2hpdGVJbnB1dCcpLnByb3AoJ2NoZWNrZWQnKT8gJ3doaXRlJyA6ICdibGFjayc7XG4gICAgICAgIHJlZHJhdygpO1xuICAgIH0pO1xufSk7XG4iXX0=
