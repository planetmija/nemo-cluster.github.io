---
title: Conda
---

Install and use Conda
=====================

[Conda](https://conda.io/docs/index.html) can be used to easily install
missing Python packages on your own into different Python environments
with different versions in your own work spaces.

There are two possibilities of using Conda. One to install Conda itself,
the other is to load a central installation if possible.

(A) Installing Conda into a Workspace
-------------------------------------

We suggest using workspaces for Conda installation. Otherwise

    $HOME/.conda

will be used as default Conda path.

Create workspace for your conda environments:

    ws_allocate conda &lt;days&gt;   # e.g. 100, for 100 days
    cd $( ws_find conda )

Download script and install conda:

    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh
    bash miniconda.sh -b -p $( ws_find conda )/conda

Source variables for conda:

    source $( ws_find conda )/conda/etc/profile.d/conda.sh

### Optional Steps

Optional: Add source path in your local

    ~/.bashrc

(edit file):

    source $( ws_find conda )/conda/etc/profile.d/conda.sh

Optional: Update conda (usually base enviroment):

    conda update -n base conda

Optional: Removing installation script:

    rm miniconda.sh

(B) Use a centrally installed Conda Module
------------------------------------------

If a Conda Module is provided you can just load it and create
environments a workspace.

Load conda module:

    module avail tools/conda   # list Conda modules
    module load tools/conda    # load module

Create workspace:

    ws_allocate conda &lt;days&gt;   # e.g. 100

The last step defines the newly created workspace as the download and
installation path for your environments:

    conda config --prepend envs_dirs $( ws_find conda )/conda/envs
    conda config --prepend pkgs_dirs $( ws_find conda )/conda/pkgs
    conda config --show envs_dirs
    conda config --show pkgs_dirs

If you don't specify a new

    envs_dir

Conda will use

    ~/.conda/envs

in your home directory as the default installation path (same applies to

    pkgs_dirs

).

Install Packages into Environments
----------------------------------

You can create python environments and install packages into these
environments or create them during install:

    conda create -n scipy
    conda activate scipy
    (scipy) $ conda install scipy

Install packages and create a new environment:

    conda create -n scipy scipy
    conda activate scipy

Search a special verson:

    conda search scipy==1.1.0

Create a Python 2.7 environment:

    conda create -n scipy_py27 scipy python=2.7
    conda activate scipy_py27

Activating Environments
-----------------------

In order to use the software in an environment you'll need to activate
it first:

    conda activate scipy

Deactivate to use different Python or software version:

    conda deactivate

Older versions of conda (&lt;4.6) have to use `source activate` and
`source deactivate` instead.

List packages and Environments
------------------------------

List packages of current environment:

    conda list

List packages in given environment:

    conda list -n scipy

List environments:

    conda env list

Use Channels
------------

Add channels to get more software. We suggest to try the following
channels:

    conda-forge
    intel
    bioconda

Search in default and extra channel:

    conda search -c intel scipy

You can add channel to your channels, but than you'll search and install
automatically from this channel:

    conda config --add channels intel
    conda config --show channels
    conda config --remove channels intel   # remove again

Use Intel Conda Packages
------------------------

You can find the full list of Intel Python packages on the [Intel web
site](https://software.intel.com/en-us/articles/complete-list-of-packages-for-the-intel-distribution-for-python).

You can install the core Intel Python stack:

    conda install -c intel -n intelpython3 intelpython3_core

... with a special Python version:

    conda install -c intel -n intelpython-3.6.5 intelpython3_core python=3.6.5

... with a Intel update version:

    conda create -c intel -n intelpython-2018.0.3 intelpython3_core==2018.0.3

... or the full Intel Python stack:

    conda create -c intel -n intelpython-2018.0.3 intelpython3_full==2018.0.3

... or just some Intel MKL optimized scientific software for the newest
Intel 2019 version:

    # installs scipy-1.1.0-np115py36_6
    conda create -c intel -n scipy-1.1.0-np115py36_6 intelpython3_core=2019

Create Reproducible Conda Environments
--------------------------------------

For a more detailed environments documentation refer to the [conda
documentation](https://conda.io/docs/user-guide/tasks/manage-environments.html).

Create an environment file for re-creation:

    conda env export -n scipy-1.1.0-np115py36_6 -f scipy-1.1.0-np115py36_6.yml

Re-create saved environment:

    conda env create -f scipy-1.1.0-np115py36_6.yml

Create a file with full URL for re-installation of packages:

    conda list --explicit -n scipy-1.1.0-np115py36_6 &gt;scipy-1.1.0-np115py36_6.txt

Install requirements file into environment:

    conda create --name scipy-1.1.0 --file scipy-1.1.0-np115py36_6.txt

The first backup option is from the

    conda-env

command and tries to reproduce the environment by name and version. The
second option comes from the

    conda

command itself and specifies the location of the file, as well. You can
install the identical packages into a newly created environment. Please
verify the architecture first.

To clone an existing environment:

    conda create --name scipy-1.1.0 --clone scipy-1.1.0-np115py36_6

### Local channels and backup Conda packages

Usually packages are cached in your Conda directory inside

    pkgs/

unless you run

    conda clean

. Otherwise the environment will be reproduced from the channels'
packages. If you want to be independent of other channels you can create
your own local channel and backup every file you have used for creating
your environments.

Install package

    conda-build

:

    conda install conda-build

Create local channel directory for

    linux-64

:

    mkdir -p $( ws_find conda )/conda/channel/linux-64

Create dependency file list and copy files to channel:

    conda list --explicit -n scipy-1.1.0-np115py36_6 >scipy-1.1.0-np115py36_6.txt
    for f in $( grep -E '^http|^file' scipy-1.1.0-np115py36_6.txt ); do
        cp $( ws_find conda )/conda/pkgs/$( basename $f ) $( ws_find conda )/conda/channel/linux-64/;
    done

Optional: If packages are missing in the cache download them:

    for f in $( grep -E '^http|^file' scipy-1.1.0-np115py36_6.txt ); do
        wget $f -O $( ws_find conda )/conda/channel/linux-64/$( basename $f );
    done

Initialize channel:

    conda index $( ws_find conda )/conda/channel/

Add channel to the channels list:

    conda config --add channels file://$( ws_find conda )/conda/channel/

Alternative use

    -c file://$( ws_find conda )/conda/channel/

when installing.

### Backup whole Environments

Alternatively you can create a package of your environment and unpack it
again when needed.

Install

    conda-pack

:

    conda install -c conda-forge conda-pack

Pack activated environment:

    conda activate scipy-1.1.0-np115py36_6
    (scipy-1.1.0-np115py36_6) $ conda pack
    (scipy-1.1.0-np115py36_6) $ conda deactivate

Pack environment located at an explicit path:

    conda pack -p $( ws_find conda )/conda/envs/scipy-1.1.0-np115py36_6

The easiest way is to unpack the package into an existing Conda
installation.

Just create a directory and unpack the package:

    mkdir -p external_conda_path/envs/scipy-1.1.0-np115py36_6
    tar -xf scipy-1.1.0-np115py36_6.tar.gz -C external_conda_path/envs/scipy-1.1.0-np115py36_6
    conda activate scipy-1.1.0-np115py36_6
    # Cleanup prefixes from in the active environment
    (scipy-1.1.0-np115py36_6) $ conda-unpack
    (scipy-1.1.0-np115py36_6) $ conda deactivate

Using Singularity container
---------------------------

Using [Singularity Containers](Singularity_Containers "wikilink") can
create more robust software environments.

Build the container on your local machine!

This is Singularity recipe example for a CentOS image with a Conda
environment:

    cat << EOF >scipy-1.1.0-np115py36_6.def
    BootStrap: yum
    OSVersion: 7
    MirrorURL: http://mirror.centos.org/centos-%{OSVERSION}/%{OSVERSION}/os/x86_64/
    Include: yum

    # If you want the updates (available at the bootstrap date) to be installed
    # inside the container during the bootstrap instead of the General Availability
    # point release (7.x) then uncomment the following line
    UpdateURL: http://mirror.centos.org/centos-%{OSVERSION}/%{OSVERSION}/updates/$basearch/

    %runscript
        echo "This is what happens when you run the container..."
        source /conda/etc/profile.d/conda.sh
        conda activate scipy-1.1.0-np115py36_6
        python --version

    %startscript
        echo "This is what happens when you start the container..."
        source /conda/etc/profile.d/conda.sh
        conda activate scipy-1.1.0-np115py36_6
        python --version

    %post
        echo "Hello from inside the container"
        yum -y install vim wget
        wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh
        bash miniconda.sh -b -p conda
        source /conda/etc/profile.d/conda.sh
        conda update -y -n base conda
        conda create -y -c intel -n scipy-1.1.0-np115py36_6 intelpython3_core=2019
        rm miniconda.sh -f

    %test
        source /conda/etc/profile.d/conda.sh
        conda activate scipy-1.1.0-np115py36_6
        python --version
    EOF

Build container (on local machine):

    singularity build np115py36_6.simg np115py36_6.def

Copy the container on the cluster and start it:

    singularity run np115py36_6.simg

See [Singularity](https://sylabs.io) documentation for more information
on containers.

Versioning
----------

Please keep in mind that modifying, updating and installing new packages
into existing environments can modify the outcome of your results. We
strongly encourage researchers to creating new environments (or cloning)
before installing or updating packages. Consider using meaningful names
for your environments using version numbers and dependencies.

| Constraint    | Specification   |
|---------------|-----------------|
| exact version | scipy==1.1.0    |
| fuzzy version | scipy=1.1       |
| greater equal | "scipy&gt;=1.1" |

For more information see cheat sheet below.

Example:

    conda create -c intel -n scipy-1.1.0 scipy==1.1.0=np115py36_6

### Pinning

Pin versions if you don't want them to be updated accidentally ([see
documentation](https://conda.io/docs/user-guide/tasks/manage-pkgs.html#preventing-packages-from-updating-pinning)).

Example:

    echo 'scipy==1.1.0=np115py36_6' &gt;&gt; $( ws_find conda )/conda/envs/scipy-1.1.0-np115py36_6/conda-meta/pinned

You can easily pin your whole environment:

    conda list -n scipy-1.1.0-np115py36_6 --export &gt;$( ws_find conda )/conda/envs/scipy-1.1.0-np115py36_6/conda-meta/pinned

### Deleting environments

Example:

    conda env remove -n scipy-1.1.0-np115py36_6 --all

Cheat Sheet
-----------

[Conda official cheat
sheet](https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)

PDF Document
------------

[<https://www.overleaf.com/read/sswxjzgpwgfn>](https://www.overleaf.com/read/sswxjzgpwgfn)
