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

The following graphs show the current status of the NEMO queue.
These graphs just give some rudimentary estimation of the current queue state.
The start of individual jobs depends on the current cluster usage,
the ressource requirements of the job and historical usage.

### Queued and Free Cores

<p id="queued-and-free-cores">
This graph shows the available cores for jobs in %.
All nodes including GPU nodes and nodes for interactive jobs are used for this calculation.
The other line shows all idle jobs and their corresponding cores, which are waiting to be executed.
Fairshare, job priorities and special job requirements are not displayed in this image.
</p>

<div class="box" id="nemo_cores_queued" style="height: 900px"></div>

### Available Cores within the next Hours

<p id="queued-and-free-cores">
This graph shows the current cluster reservation status and when the reservation ends.
Jobs reserve resources for an amount of time which is predefined at job submit.
The remaining reservation time is calculated and displayed in this graph.
It shows how many cores based on the current core usage is freed in the next 6h, 2h, 24h and 48h.
Usually jobs end earlier then the reserved walltime.
</p>

<div class="box" id="nemo_cores_free" style="height: 900px"></div>

### Queued Jobs and Cores

These are the current job and core numbers in the NEMO queue.
Jobs are usually only temporary blocked,
because some dependencies are not met or a user exceeds a usage limit.
Please run <code>showq -b -v</code> on the cluster for the block reason.

<div class="box" id="nemo_queue_cores" style="height: 900px"></div>
<div class="box" id="nemo_queue_jobs" style="height: 900px"></div>

## NEMO Usage Statistics

<div class="box" id="nemo_today_usage" style="height: 600px"></div>
<div class="box" id="nemo_day_usage" style="height: 600px"></div>

### NEMO Usage from Sites

<div class="box" id="nemo_site_usage" style="height: 600px"></div>
<button id="button_site" style="position:relative;top:-20px">Hide all sites</button>

### NEMO Usage from Fields

<div class="box" id="nemo_field_usage" style="height: 600px"></div>
<button id="button_field" style="position:relative;top:-20px">Hide all fields</button>

### NEMO Usage from Virtual Research Environments (VM)

<div class="box" id="nemo_type_usage" style="height: 600px"></div>
<button id="button_type" style="position:relative;top:-20px">Hide all types</button>

### NEMO Usage from Projects

<div class="box" id="nemo_rv_usage" style="height: 1000px"></div>
<button id="button_rv" style="position:relative;top:-20px">Hide all projects</button>

<div class="box" id="nemo_rv_lastyear" style="height: 800px"></div>
<div class="box" id="nemo_rv_top10" style="height: 800px"></div>
