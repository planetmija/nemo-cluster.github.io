---
title: NEMO Status and Usage Statistics
toc: true
---

{% include highcharts.html %}

# NEMO Status and Usage

<p id="statinfo"></p>

{% if site.data.nemo_status.status
  and site.data.nemo_status.date
  and site.data.nemo_status.author
  and site.data.nemo_status.title
  and site.data.nemo_status.text %}
  <article class="message is-{{site.data.nemo_status.status }}">
    <div class="message-header">
      <p>{{ site.data.nemo_status.title }}</p>
    </div>
    <div class="message-body has-text-centered">
      <strong>
        Published: {{ site.data.nemo_status.date | date: "%-d %b %Y" }}
        by
        {{ site.data.nemo_status.author }}
      </strong>
      <br /><br />
      {{ site.data.nemo_status.text }}
    </div>
  </article>
{% endif %}

## NEMO Queue

<p id="nemo-queue-text">
The following graphs show the current status of the NEMO queue.
These graphs just give some rudimentary estimation of the current queue state.
The start of individual jobs depends on the current cluster usage,
the ressource requirements of the job and historical usage (Fairshare).
</p>

<div class="tabs is-fullwidth" id="queue">
  <ul>
    <li class="is-active" data-tab="nemo_cores_queued">
      <a>Queued and Free Cores</a>
    </li>
    <li data-tab="nemo_cores_free">
      <a>Available Cores within the next Hours</a>
    </li>
    <li data-tab="nemo_queue_cores">
      <a>Queued Cores</a>
    </li>
    <li data-tab="nemo_queue_jobs">
      <a>Queued Jobs</a>
    </li>
  </ul>
</div>

<div id="tab-contentq">
  <p class="is-active" data-contentq="nemo_cores_queued">
    The outer line of this graph shows the available cores for jobs in %.
    All nodes including GPU nodes and nodes for interactive jobs are used for this calculation.
    The inner line shows all idle jobs and their corresponding cores, which are waiting to be executed.
    Fairshare, job priorities and special job requirements are not displayed in this image.
  </p>
  <p class="is-active" data-contentq="nemo_cores_queued" id="nemo_cores_queued"></p>

  <p data-contentq="nemo_cores_free">
    This graph shows the current cluster reservation status and when the reservation ends.
    Jobs reserve resources for an amount of time which is predefined at job submit.
    The remaining reservation time is calculated and displayed in this graph.
    It shows how many cores based on the current core usage is freed in the next 6h, 2h, 24h and 48h.
    Usually jobs end earlier than the reserved walltime.
  </p>
  <p data-contentq="nemo_cores_free" id="nemo_cores_free"></p>

  <p data-contentq="nemo_queue_cores">
    These are the current core numbers in the NEMO queue.
    Jobs are usually only temporary blocked,
    because some dependencies are not met or a user exceeds a usage limit.
    Please run `showq -b -v` on the cluster for the block reason.
  </p>
  <p data-contentq="nemo_queue_cores" id="nemo_queue_cores"></p>

  <p data-contentq="nemo_queue_jobs">
    These are the current job numbers in the NEMO queue.
    Jobs are usually only temporary blocked,
    because some dependencies are not met or a user exceeds a usage limit.
    Please run `showq -b -v` on the cluster for the block reason.
  </p>
  <p data-contentq="nemo_queue_jobs" id="nemo_queue_jobs"></p>
</div>


## NEMO Usage Statistics

<div class="tabs is-fullwidth" id="usage">
  <ul>
    <li class="is-active" data-tab="nemo_today_usage">
      <a>Usage Today</a>
    </li>
    <li data-tab="nemo_day_usage">
      <a>Daily Usage</a>
    </li>
    <li data-tab="nemo_site_usage">
      <a>Usage from Sites</a>
    </li>
    <li data-tab="nemo_field_usage">
      <a>Usage from Fields</a>
    </li>
    <li data-tab="nemo_type_usage">
      <a>Usage from VREs (VM)</a>
    </li>
  </ul>
</div>

<div id="tab-contentu">
  <p class="is-active" data-contentu="nemo_today_usage" id="nemo_today_usage" style="height: 500px"></p>

  <p data-contentu="nemo_day_usage" id="nemo_day_usage" style="height: 600px"></p>

  <p data-contentu="nemo_site_usage" id="nemo_site_usage" style="height: 800px"></p>
  <p data-contentu="nemo_site_usage">
    <button id="button_site" style="position:relative;top:-20px">Hide all sites</button>
  </p>

  <p data-contentu="nemo_field_usage" id="nemo_field_usage" style="height: 800px"></p>
  <p data-contentu="nemo_field_usage">
    <button id="button_field" style="position:relative;top:-20px">Hide all fields</button>
  </p>

  <p data-contentu="nemo_type_usage" id="nemo_type_usage" style="height: 800px"></p>
</div>


## NEMO Project Usage

<div class="tabs is-fullwidth" id="project">
  <ul>
    <li class="is-active" data-tab="nemo_rv_lastyear">
      <a>Usage Last Year</a>
    </li>
    <li data-tab="nemo_rv_top10">
      <a>Top 10 Projects</a>
    </li>
    <li data-tab="nemo_rv_usage">
      <a>Projects over the Years</a>
    </li>
  </ul>
</div>

<div id="tab-contentp">
  <p class="is-active" data-contentp="nemo_rv_lastyear" id="nemo_rv_lastyear" style="height: 800px"></p>

  <p data-contentp="nemo_rv_top10" id="nemo_rv_top10" style="height: 800px"></p>

  <p data-contentp="nemo_rv_usage" id="nemo_rv_usage" style="height: 1000px"></p>
  <p data-contentp="nemo_rv_usage">
    <button id="button_rv" style="position:relative;top:-20px">Hide all projects</button>
  </p>
</div>
