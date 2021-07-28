$.ajax({
    url: "https://cloud.nemo.uni-freiburg.de/anon/usage/chart/nemo_site_usage/",
    dataType: "jsonp",
    statusCode: {
        200: function (response) {
            $('#statinfo').remove();
            $.getScript("/assets/js/highcharts/nemo_today_usage.js");
            $.getScript("/assets/js/highcharts/nemo_day_usage.js");
            $.getScript("/assets/js/highcharts/nemo_site_usage.js");
            $.getScript("/assets/js/highcharts/nemo_field_usage.js");
            $.getScript("/assets/js/highcharts/nemo_type_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_lastyear.js");
            $.getScript("/assets/js/highcharts/nemo_rv_top10.js");
            $.getScript("/assets/js/highcharts/nemo_options.js");
            $.getScript("/assets/js/nemo_hide_chart_button.js");
        },
        404: function (response) {
            console.log('Status data unavailable');
            $('#statinfo').append('Queues and statistics are currently only visible when using IP addresses from a university from Baden-Württemberg. \
                External access (e.g. from home) is only possible when using a VPN or tunneling your IP traffic through your university.');
            $('.contents').remove();
            $('.box').remove();
            $('.card').remove();
            $('#nemo-queue').remove();
            $('#nemo-job-walltimes').remove();
            $('#nemo-usage-statistics').remove();
            $('#nemo-usage-from-sites').remove();
            $('#nemo-usage-from-fields').remove();
            $('#nemo-usage-from-virtual-research-environments-vm').remove();
            $('#nemo-usage-from-projects').remove();
            $('#button_site').remove();
            $('#button_field').remove();
            $('#button_type').remove();
            $('#button_rv').remove();
        },
    },
});
