function sendMail() {
    var name = $('#form #name').val();
    var uid = $('#form #uid').val();
    var message = 'Dear User Support,\n\n'
        + 'my name is '
        + name
        + ' and I hereby request the entitlements\n\n'
        + '* bwUniCluster\n'
        + '* bwForCluster\n\n'
        + 'to be given to my userid/username\n\n'
        + uid
        + '\n\nI confirm that I have read the following documents and agree '
        + 'with the terms and conditions:\n\n'
        + '* Verwaltungs - und Benutzungsordnung (VBO)\n'
        + '* Benutzungsordnung für die vom Rechenzentrum der '
        + 'Albert-Ludwigs-Universität angebotenen Netzdienste (NBO)\n'
        + '* Netzordnung für das Freiburger Universitäts Netz (NO)\n\n'
        + 'With best regards,\n'
        + name
        + '\n\nPS: This mail was generated automatically.';
    message = encodeURIComponent(message);
    window.location.href = 'mailto:nutzerservice@rz.uni-freiburg.de?subject=Request for bwUniCluster/bwForCluster Entitlements&body=' + message;
};