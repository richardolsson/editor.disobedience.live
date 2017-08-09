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
