---
title: bwForCluster NEMO
toc: true
---

# bwForCluster NEMO

The bwForCluster NEMO is a high-performance compute resource with high speed interconnect.
It is intended for compute activities related to research in for researchers from the fields
**N**euroscience, **E**lementary Particle Physics, **M**icrosystems Engineering and **M**aterial Sciences (**NEMO**). 

For a detailed NEMO documentation refer to the
[NEMO Wiki](https://wiki.bwhpc.de/e/Category:BwForCluster_NEMO){:target="_blank"}.

![NEMO Logo](/img/nemo-logo-mod.png "NEMO Logo"){:width="400px" .center-image}
![NEMO Cluster](/img/nemo-cluster.png "NEMO Cluster"){:width="800px" .center-image}


## Software and Operating System

- Operating System: [CentOS 7](https://en.wikipedia.org/wiki/CentOS){:target="_blank"} (similar to RHEL 7)
- Queuing System: [MOAB/Torque](http://docs.adaptivecomputing.com/9-1-3/suite/help.htm){:target="_blank"} (see
[Batch Jobs](https://wiki.bwhpc.de/e/Batch_Jobs){:target="_blank"})
- (Scientific) Libraries and Software: [Environment Modules](https://wiki.bwhpc.de/e/Environment_Modules){:target="_blank"}


## Compute Nodes


For researchers from the scientific fields
**N**euroscience, **E**lementary Particle Physics, **M**icrosystems Engineering and **M**aterial Sciences
the bwForCluster **NEMO** offers 900
[compute nodes](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#Compute_and_Special_Purpose_Nodes){:target="_blank"}
plus several special purpose nodes for login, interactive jobs, etc.


### Special Purpose Nodes

Besides the classical compute node several
[nodes](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#Compute_and_Special_Purpose_Nodes){:target="_blank"}
serve as login and preprocessing nodes, nodes for interactive jobs, visualization nodes
and nodes for creating virtual environments providing a virtual service environment.


## Storage Architecture

The bwForCluster NEMO consists of two separate
[storage systems](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#Storage_Architecture){:target="_blank"},
one for the user’s
[home directory](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#.24HOME){:target="_blank"}
`$HOME` and one serving
[workspaces](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#Workspaces){:target="_blank"}.
The home directory is limited in space and parallel access but offers
snapshots of your files and Backup. The workspace is a parallel file
system which offers fast and parallel file access and a bigger capacity
than the home directory. This storage is based on
[BeeGFS](http://www.beegfs.com){:target="_blank"}
and can be accessed parallel from many nodes. Additionally, each compute
node provides high-speed temporary storage on the node-local
[solid state disk](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#Local_Disk_Space){:target="_blank"}
(SSD) via the `$TMPDIR` environment variable.


## High Performance Network

The compute nodes all are interconnected through the
[high performance network](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Hardware_and_Architecture#High_Performance_Network){:target="_blank"}
Omni-Path which offers a very small latency and
100 Gbit/s throughput. The parallel storage for the workspaces is
attached via Omni-Path to all cluster nodes. For non-blocking
communication 20 islands with 44 nodes and 880 cores each are available.
The islands are connected with a blocking factor of 1:11 (or 400 Gbit/s
for 44 nodes).


## News and Newsletters

We publish news and other important information around NEMO and Freiburg-specific HPC topics on our
[newsletters](/newsletters/) and [news](/news/) pages.
To subscribe to our the news mailing list, please send an e-mail to to
[hpc-news-subscribe@hpc.uni-freiburg.de](mailto:hpc-news-subscribe@hpc.uni-freiburg.de).
