---
title: Testing Two-factor Authentication on NEMO
author: NEMO Team
category: news
tags: [NEMO, 2FA]
date: 2023-08-08
motd: true
summary: >
    We are currently testing two-factor authentication for NEMO logins.
    Currently, this security feature can be tested on our vis1/2 visualization nodes.
---

**UPDATE: 09.08.2023:** OTP is now enabled for password and SSH key logins.

We are currently testing two-factor authentication for NEMO logins.
Currently, this security feature can be tested on our vis1/2 visualization nodes for password logins.

Please visit https://login.bwidm.de/user/twofa.xhtml to generate a new token if you do not already have one.
If you have already generated a second factor on https://login.bwidm.de for bwUniCluster or JUSTUS2, you are good to go.
See https://wiki.bwhpc.de/e/Registration/2FA for more information.

In the coming weeks and months, we will extend this to NEMO login nodes.
We hope to be able to secure SSH keys with OTPs as well, but currently the SSH server version is too old to support some of the needed functionality.
