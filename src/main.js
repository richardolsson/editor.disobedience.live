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
