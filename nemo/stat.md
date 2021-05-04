---
layout: page
title: NEMO Usage Statistics
---

{% include highcharts.html %}

# NEMO Status and Queue

{% if site.data.nemo_status.status and site.data.nemo_status.title and site.data.nemo_status.text %}
  <article class="message is-{{site.data.nemo_status.status }}">
    <div class="message-header">
      <p>{{ site.data.nemo_status.title }}</p>
      <!-- <button class="delete" aria-label="delete"></button> -->
    </div>
    <div class="message-body">
      {{ site.data.nemo_status.text }}
    </div>
  </article>
{% endif %}

<p>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      NEMO Queue Information
    </p>
  </header>
  <div class="card-image">
    <figure class="image is-16by9">
      <iframe class="has-ratio" width="100%" frameborder="0" seamless src="https://cloud.bwfor.uni-freiburg.de/anon/usage/chart/nemo_queue/"></iframe>
    </figure>
  </div>
</div>
</p>

<p>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      NEMO Walltime Information of running jobs
    </p>
  </header>
  <div class="card-image">
    <figure class="image is-16by9">
      <iframe class="has-ratio" style="width: 100%" frameborder="0" src="https://cloud.bwfor.uni-freiburg.de/anon/vis/chart/66/no-layout"></iframe>
    </figure>
  </div>
</div>
</p>

## NEMO Usage Statistics

<div class="box" id="nemo_today_usage" style="height: 600px"></div>
<div class="box" id="nemo_day_usage" style="height: 600px"></div>

<div class="box" id="nemo_site_usage" style="height: 600px"></div>
<button id="button_site" style="position:relative;top:-20px">Hide all sites</button>

<div class="box" id="nemo_field_usage" style="height: 600px"></div>
<button id="button_field" style="position:relative;top:-20px">Hide all fields</button>

<div class="box" id="nemo_type_usage" style="height: 600px"></div>
<button id="button_type" style="position:relative;top:-20px">Hide all types</button>

<div class="box" id="nemo_rv_usage" style="height: 1000px"></div>
<button id="button_rv" style="position:relative;top:-20px">Hide all projects</button>

<div class="box" id="nemo_rv_lastyear" style="height: 800px"></div>
<div class="box" id="nemo_rv_top10" style="height: 800px"></div>