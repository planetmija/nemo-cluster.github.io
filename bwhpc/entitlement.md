---
layout: page
title: bwHPC Entitlements
---

# bwUniCluster and bwForCluster Entitlement

<article class="message is-warning">
  <div class="message-header">
    <p>This form is only applicable for ...</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    ... members of the University of Freiburg (employees and students).
    Users from other universities please check the <a href="https://wiki.bwhpc.de/e/BwForCluster_Entitlement" target="_blank">wiki</a>.
  </div>
</article>

## Application for bwUniCluster and bwForCluster Entitlement

To use the bwUniCluster or bwForCluster you'll need an entitlement, which will be connected to your university account.

- The **bwForCluster** entitlement you'll need for registering to the bwForClusters in Freiburg, Heidelberg/Mannheim, Tübingen and Ulm.
- The **bwUniCluster** entitlement is necessary for registering at the bwUniCluster in Karlsruhe.

This is a required legal procedure. You should get the entitlements within two working days.
If not, please [contact](/privacy-policy/) us.

Please fill out the following form.

{% include mailto.html %}

<form id="form" name="form" method="get" action="/bwhpc/mail/" onsubmit="sendMail();">
<div class="field is-horizontal">
    <div class="field-label is-normal">
        <label class="label">Name</label>
    </div>
    <div class="field-body">
        <div class="field">
            <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="name" id="name" placeholder="Given Name and Surname" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-address-card"></i>
                </span>
            </p>
        </div>
    </div>
</div>
<div class="field is-horizontal">
    <div class="field-label is-normal">
        <label class="label">UserID/Username</label>
    </div>
    <div class="field-body">
        <div class="field">
            <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="uid" id="uid" placeholder="UserID/Username" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </p>
            <p class="help">Your University ID that you use to login to <a href="https://myaccount.uni-freiburg.de/" target="_blank">myAccount</a>.
            </p>
        </div>
    </div>
</div>
<div class="field is-horizontal">
    <div class="field-label is-normal">
        <label class="label">Entitlements</label>
    </div>
    <div class="field-body">
        <div class="field">
            <p class="control">
                <label class="checkbox">
                    <input type="checkbox" checked disabled>
                    bwUniCluster
                </label>
                <label class="checkbox">
                    <input type="checkbox" checked disabled>
                    bwForCluster
                </label>
                <p class="help is-success">You will automatically apply for both Entitlements!</p>
            </p>
        </div>
    </div>
</div>
<div class="field is-horizontal">
    <div class="field-label is-normal">
        <label class="label">Agreement</label>
    </div>
    <div class="field-body">
        <div class="field">
            <p class="control">
                <ul>
                    <li>
                        Verwaltungs- und Benutzungsordnung
                            <a href="https://www.rz.uni-freiburg.de/inhalt/dokumente/pdfs/ordnungen/vbo.pdf/at_download/file" target='_blank'>(VBO)</a>
                    </li>
                    <li>
                        Benutzungsordnung für die vom Rechenzentrum der Albert-Ludwigs-Universität angebotenen Netzdienste
                            <a href="https://www.rz.uni-freiburg.de/inhalt/dokumente/pdfs/ordnungen/nbo.pdf/at_download/file" target='_blank'>(NBO)</a>
                    </li>
                    <li>
                        Netzordnung für das Freiburger Universitäts Netz
                            <a href="https://www.rz.uni-freiburg.de/inhalt/dokumente/pdfs/ordnungen/no.pdf/at_download/file" target='_blank'>(NO)</a>
                    </li>
                </ul>
                <label class="checkbox">
                    <input type="checkbox" required>
                        <strong>
                            I confirm that I have read the documents and agree with the terms and conditions.
                        </strong>
                </label>
            </p>
        </div>
    </div>
</div>
<div class="field is-horizontal">
    <div class="field-label">
        <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" type="submit">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light" type="reset">Reset</button>
            </div>
        </div>
    </div>
</div>
</form>