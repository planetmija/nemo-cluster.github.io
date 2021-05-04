---
title: Login to NEMO
---

# Login to NEMO

After registration (registration procedure at
[NEMO Access](/nemo/access/)),
the bwForCluster NEMO can be accessed via a Secure Shell like `ssh` on Linux and Mac or
[MobaXterm](https://mobaxterm.mobatek.net){:target="_blank"}
on Windows systems.

From linux machines, you can log in using
```shell
ssh <UserID>@login1.nemo.uni-freiburg.de
ssh <UserID>@login2.nemo.uni-freiburg.de
```

To run graphical applications, you can use the -X or -Y flag to openssh:
```shell
ssh -Y -l <UserID>login1.nemo.uni-freiburg.de
ssh -Y -l <UserID>login2.nemo.uni-freiburg.de
```

For better performance on slow connections you should use e.g.
[VNC](https://wiki.bwhpc.de/e/VNC){:target="_blank"}.

## About UserID / Username

`<UserID>` of the ssh command is a placeholder for your username at your
home organization and a prefix denoting your organization. Prefixes and
resulting user names are as follows:

| Site       | Prefix | Username     |
| ---------- | ------ | ------------ |
| Freiburg   | fr     | fr\_username |
| Heidelberg | hd     | hd\_username |
| Hohenheim  | ho     | ho\_username |
| Karlsruhe  | ka     | ka\_username |
| Konstanz   | kn     | kn\_username |
| Mannheim   | ma     | ma\_username |
| Stuttgart  | st     | st\_username |
| Tübingen   | tu     | tu\_username |
| Ulm        | ul     | ul\_username |

## Allowed activities on login nodes

The login nodes are the access point to the compute system and its $HOME
directory. The login nodes are shared with all the users of the cluster.
Therefore, your activities on the login nodes are limited to primarily
set up your batch jobs. Your activities may also be:

- compilation of your program code and
- short pre- and postprocessing of your batch jobs.

To guarantee usability for all the users of the bwForCluster you must
not run your compute jobs on the login nodes. Compute jobs must be
submitted as
[Batch Jobs](https://wiki.bwhpc.de/e/Batch_Jobs){:target="_blank"}.
Any compute job running on the login nodes will be terminated without any notice.

# Password Reset

If you forgot your password for the bwForCluster NEMO you can set a new one on the
[NEMO service page](https://bwservices.uni-freiburg.de){:target="_blank"}.
Just use the link in the **bwForCluster NEMO** service box.

If you have trouble resetting your password, please try to delete your
password first (use button) and then reset it again. If this does not
help de-register and re-register the NEMO service. Otherwise please contact the
[NEMO Support](/privacy-policy/).

# Further reading

- Wiki for the [bwForCluster NEMO](https://wiki.bwhpc.de/e/Category:BwForCluster_NEMO){:target="_blank"}
- Scientific software is made accessible using the [Environment Modules](https://wiki.bwhpc.de/e/Environment_Modules){:target="_blank"} system
- Compute jobs must be submitted as [Batch Jobs](https://wiki.bwhpc.de/e/Batch_Jobs){:target="_blank"}
