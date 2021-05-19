---
title: NEMO Support
---
# NEMO Support

<article class="message is-warning">
  <div class="message-header">
    <p>This support information is for ...</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    ... all the researchers in the state of Baden-Württemberg who (want to) use the bwForCluster NEMO.
  </div>
</article>

## What to do first

Please search the relevant information on the web pages first:

- See general [support](/support/) information.
- Check this section and corresponding links.
- Is there a FAQ which already addresses your question. **NOT IMPLEMENTED YET!**

## When contacting the NEMO support

Besides the [general](/support/) information please try to describe you problem/question as detailled as possible.
The following steps should be considered first.

- If you start using NEMO, please consider testing your job interactively fist `msub -I [...]`.
- You can always use the express queue to test if your job is running (15 min max) `msub -q express [...]`.
  - The job will be killed automatically after 15 min, if it runs longer. But that way you'll see if everything works as expected so far.
- Please debug your jobs with `checkjob -v -v` first. If you don't understand the output, please attach it to the e-mail addressed to out ticket system.
- You can access the nodes where your jobs are running through `ssh`. That way you can monitor them while they are running. The nodes can be found in the output of e.g. `checkjob`
  (see [Wiki](https://wiki.bwhpc.de/e/BwForCluster_NEMO_Specific_Batch_Features#Monitor_Running_Jobs){:target="_blank"}).

After you have gathered all the information, please write an e-mail to our ticket system:
[nemo-support@hpc.uni-freiburg.de](mailto:nemo-support@hpc.uni-freiburg.de)
