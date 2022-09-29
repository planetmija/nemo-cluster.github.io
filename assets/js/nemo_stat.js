$.ajax({
    dataType: "jsonp",
    statusCode: {
        200: function (response) {
            $('#statinfo').remove();
            $.getScript("/assets/js/tabs.js");
            $.getScript("/assets/js/highcharts/nemo_options.js");
            $.getScript("/assets/js/highcharts/nemo_today_usage.js");
            $.getScript("/assets/js/highcharts/nemo_day_usage.js");
            $.getScript("/assets/js/highcharts/nemo_site_usage.js");
            $.getScript("/assets/js/highcharts/nemo_field_usage.js");
            $.getScript("/assets/js/highcharts/nemo_type_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_lastyear.js");
            $.getScript("/assets/js/highcharts/nemo_rv_kwh_lastyear.js");
            $.getScript("/assets/js/highcharts/nemo_rv_top10.js");
            $.getScript("/assets/js/highcharts/nemo_cores_queued.js");
            $.getScript("/assets/js/highcharts/nemo_cores_free.js");
            $.getScript("/assets/js/highcharts/nemo_queue_cores.js");
            $.getScript("/assets/js/highcharts/nemo_queue_jobs.js");
            $.getScript("/assets/js/nemo_hide_chart_button.js");
        },
        404: function (response) {
            console.log('Status data unavailable');
            $('#statinfo').append('Queues and statistics are currently only visible when using IP addresses from a university from Baden-Württemberg. \
                External access (e.g. from home) is only possible when using a VPN or tunneling your IP traffic through your university.');
            $('.tabs').remove();
            $('#nemo-queue').remove();
            $('#nemo-queue-text').remove();
            $('#nemo-usage-statistics').remove();
            $('#nemo-project-usage').remove();
            $('#tab-contentq').remove();
        },
    },
});
