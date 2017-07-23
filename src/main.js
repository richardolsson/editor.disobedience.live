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
