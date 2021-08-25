$(document).ready(function () {
  $('#queue li').on('click', function () {
    var tab = $(this).data('tab');

    $('#queue li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-contentq p').removeClass('is-active');
    $('p[data-contentq="' + tab + '"]').addClass('is-active');
  });

  $('#usage li').on('click', function () {
    var tab = $(this).data('tab');

    $('#usage li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-contentu p').removeClass('is-active');
    $('p[data-contentu="' + tab + '"]').addClass('is-active');

    // target the chart and redraw
    $('p[data-contentu="' + tab + '"]').highcharts().redraw();
  });

  $('#project li').on('click', function () {
    var tab = $(this).data('tab');

    $('#project li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-contentp p').removeClass('is-active');
    $('p[data-contentp="' + tab + '"]').addClass('is-active');

    // target the chart and redraw
    $('p[data-contentp="' + tab + '"]').highcharts().redraw();
  });

});
