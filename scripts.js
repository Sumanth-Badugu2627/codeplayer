$('.button').hover(function() {
    $(this).addClass('highlight');
}, function() {
    $(this).removeClass('highlight');
});

$('.button').click(function() {
    $('.button').removeClass('active');
    $(this).addClass('active');

    $('.panel').addClass('hidden');
    var panelId = $(this).attr('id') + 'panel';
    $('#' + panelId).removeClass('hidden');

    var activePanels = 4 - $('.hidden').length;
    $('.panel').css('width', (100 / activePanels) + '%');
});

$('.panel').height($(window).height() - $('#header').height() - 20);
$('.panel').css('width', '49%');

function updateOutput() {
    var htmlCode = $('#htmlpanel').val();
    var cssCode = $('#csspanel').val();
    var jsCode = $('#javascriptpanel').val();

    var iframe = document.getElementById('outputpanel');
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write('<html><head><style>' + cssCode + '</style></head><body>' + htmlCode + '</body></html>');
    doc.close();

    try {
        iframe.contentWindow.eval(jsCode);
    } catch (e) {
        console.error(e);
    }
}

$('textarea').on('input', updateOutput);
updateOutput();
