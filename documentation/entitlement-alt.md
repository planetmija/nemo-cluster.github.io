---
layout: page
title: bwHPC Entitlements
---

# Application for bwUniCluster and bwForCluster Entitlement

**This form is only applicable for members of the University of Freiburg (employees and students).**

To use the bwClusters, you'll need an entitlement, which will be connected to your university account.

The bwForCluster entitlement you'll need for registering to the bwForClusters in Freiburg, Heidelberg/Mannheim, Tübingen and Ulm. The bwUniCluster entitlement is necessary for registering at the bwUniCluster in Karlsruhe.

This is a required legal procedure. You should get the entitlements within 2 working days. If not, please <a href="mailto:{{ site.email | encode_email }}?subject=Entitlements" title="contact">contact</a> us.

Please fill out the following form.


<form>

    <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Given Name and Surname" required>
            <span class="icon is-small is-left">
                <i class="fas fa-address-card"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <label class="label">University of Freiburg User ID</label>
        <div class="control has-icons-left">
            <input class="input" type="text" placeholder="User ID" required>
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
        </div>
        <p class="help">Username you got from the Rechenzentrum of the University of Freiburg</p>
    </div>

    <div class="field">
        <label class="label">Email Address</label>
        <div class="control has-icons-left">
            <input class="input" type="email" placeholder="Email Address" required>
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <label class="label">Entitlements</label>
        <div class="control">
            <p class="help is-success">You will automatically apply for both Entitlements!</p>
            <label class="checkbox">
                <input type="checkbox" checked disabled>
                bwUniCluster
            </label>
            <label class="checkbox">
                <input type="checkbox" checked disabled>
                bwForCluster
            </label>
        </div>
    </div>

    <div class="field">
        <label class="label">Agreement</label>
        <div class="control">
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
                        By selecting this option I confirm that I have read the above documents (VBO, NBO, NO) and agree with the terms of use stated therein.
                    </strong>
            </label>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>

</form>