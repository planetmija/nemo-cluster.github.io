---
layout: page
title: bwForCluster NEMO
subtitle: Research Cluster for N_euroscience, E_lementary Particle Physics, M_icrosystems Engineering and M_aterials Science (NEMO)
callouts: home_callouts
hide_hero: false
hero_image: /img/nemo.jpg
hero_height: is-large
show_sidebar: true
nemo_status: true
---

{% if site.data.nemo_status.status and site.data.nemo_status.title and site.data.nemo_status.text %}
  <article class="message is-{{site.data.nemo_status.status }}">
    <div class="message-header">
      <p>{{ site.data.nemo_status.title }}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{ site.data.nemo_status.text }}
    </div>
  </article>
{% endif %}

<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      NEMO Queue Information
    </p>
  </header>
  <div class="card-image">
    <figure class="image is-16by9">
      <embed class="has-ratio" width="100%" frameborder="0" seamless src="https://cloud.bwfor.uni-freiburg.de/anon/usage/chart/nemo_queue/"/>
    </figure>
  </div>
</div>