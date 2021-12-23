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
The following diagrams show the current status of the NEMO queue.
These diagrams give only a rudimentary estimate of the current status of the queue.
The start of each job depends on the current cluster utilization,
the resource requirements of the job and the historical usage (fairshare).
</p>

<div class="tabs is-fullwidth" id="queue">
  <ul>
    <li class="is-active" data-tab="nemo_cores_queued">
      <a>Queued/Avail Cores</a>
    </li>
    <li data-tab="nemo_cores_free">
      <a>Future Avail Cores</a>
    </li>
    <li data-tab="nemo_queue_cores">
      <a>NEMO Job Cores</a>
    </li>
    <li data-tab="nemo_queue_jobs">
      <a>NEMO Jobs</a>
    </li>
    <li data-tab="nemo_queue">
      <a>NEMO Queue</a>
    </li>
  </ul>
</div>

<div id="tab-contentq">
  <p class="is-active" data-contentq="nemo_cores_queued">
    The outer line of this graph shows the available cores for jobs in %.
    All nodes, including GPU nodes and nodes for interactive jobs, are used for this calculation.
    The inner line shows all idle jobs and the cores they require as a percentage (see Nemo Job Cores for absolute numbers).
    Fairshare, job priorities and special job requirements are not considered in this image.
  </p>
  <p class="is-active" data-contentq="nemo_cores_queued" id="nemo_cores_queued"></p>

  <p data-contentq="nemo_cores_free">
    This diagram shows the current cluster utilization and how many resources will be free in the next 6h, 12h, 24h and 48h.
    Jobs reserve resources for a certain time, which is specified when the job is placed.
    The remaining runtime of jobs is calculated and displayed in this diagram.
    Normally, jobs end earlier than the reserved time, so only the worst case is shown here.
  </p>
  <p data-contentq="nemo_cores_free" id="nemo_cores_free"></p>

  <p data-contentq="nemo_queue_cores">
    These are the current job core numbers in the NEMO queue.
    Jobs are usually temporarily blocked because some dependencies are not met or a user exceeds a usage limit and are automatically moved to the idle job queue once the running jobs are finished.
    Please run <code>showq -b -v</code> or <code>checkjob -v JobID</code> on the cluster to determine the reason for the block.
  </p>
  <p data-contentq="nemo_queue_cores" id="nemo_queue_cores"></p>

  <p data-contentq="nemo_queue_jobs">
    These are the current job numbers in the NEMO queue.
    Jobs are usually temporarily blocked because some dependencies are not met or a user exceeds a usage limit and are automatically moved to the idle job queue once the running jobs are finished.
    Please run <code>showq -b -v</code> or <code>checkjob -v JobID</code> on the cluster to determine the reason for the block.
  </p>
  <p data-contentq="nemo_queue_jobs" id="nemo_queue_jobs"></p>

  <p data-contentq="nemo_queue">
    This is the NEMO job queue.
    (*) EST in the queue shows the expected start time for the job with the highest priority.
    Jobs are usually temporarily blocked because some dependencies are not met or a user exceeds a usage limit and are automatically moved to the idle job queue once the running jobs are finished.
    Please run <code>showq -b -v</code> or <code>checkjob -v JobID</code> on the cluster to determine the reason for the block.
  </p>
  <p data-contentq="nemo_queue">
    <iframe class="has-ratio" width="100%" height="600" frameborder="0" seamless src="https://cloud.bwfor.uni-freiburg.de/anon/usage/chart/nemo_queue/"></iframe>
  </p>
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
