$(function () {
    // hide button action for highcharts series container
    // Fields
    var chartf = $('#nemo_field_usage').highcharts(),
        $buttonf = $('#button_field');
    $buttonf.click(function () {
        var seriesf = chartf.series[0];
        if (seriesf.visible) {
            $(chartf.series).each(function () {
                this.setVisible(false, false);
            });
            chartf.redraw();
            $buttonf.html('Show all fields');
        } else {
            $(chartf.series).each(function () {
                this.setVisible(true, false);
            });
            chartf.redraw();
            $buttonf.html('Hide all fields');
        }
    });
    // Site
    var charts = $('#nemo_site_usage').highcharts(),
        $buttons = $('#button_site');
    $buttons.click(function () {
        var seriess = charts.series[0];
        if (seriess.visible) {
            $(charts.series).each(function () {
                this.setVisible(false, false);
            });
            charts.redraw();
            $buttons.html('Show all sites');
        } else {
            $(charts.series).each(function () {
                this.setVisible(true, false);
            });
            charts.redraw();
            $buttons.html('Hide all sites');
        }
    });
    // Type
    var chartt = $('#nemo_type_usage').highcharts(),
        $buttont = $('#button_type');
    $buttont.click(function () {
        var seriest = chartt.series[0];
        if (seriest.visible) {
            $(chartt.series).each(function () {
                this.setVisible(false, false);
            });
            chartt.redraw();
            $buttont.html('Show all types');
        } else {
            $(chartt.series).each(function () {
                this.setVisible(true, false);
            });
            chartt.redraw();
            $buttont.html('Hide all types');
        }
    });
    // RV
    var chartt = $('#nemo_rv_usage').highcharts(),
        $buttont = $('#button_rv');
    $buttont.click(function () {
        var seriest = chartt.series[0];
        if (seriest.visible) {
            $(chartt.series).each(function () {
                this.setVisible(false, false);
            });
            chartt.redraw();
            $buttont.html('Show all projects');
        } else {
            $(chartt.series).each(function () {
                this.setVisible(true, false);
            });
            chartt.redraw();
            $buttont.html('Hide all projects');
        }
    });
});