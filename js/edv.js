function EnableEDV() {
    document.support.raum1.disabled = "";
    document.support.raum2.disabled = "disabled";
    document.support.subject1.disabled = "";
    document.support.subject2.disabled = "disabled";
    document.support.subject2.value = "";
    document.support.subject3.disabled = "disabled";
    document.support.subject3.value = "";
}
function EnableTeacher() {
    document.support.raum2.disabled = "";
    document.support.raum1.disabled = "disabled";
    document.support.subject2.disabled = "";
    document.support.subject1.disabled = "disabled";
    document.support.subject1.value = "";
    document.support.subject3.disabled = "disabled";
    document.support.subject3.value = "";
}
function EnableOther() {
    document.support.raum2.disabled = "disabled";
    document.support.raum1.disabled = "disabled";
    document.support.subject2.disabled = "disabled";
    document.support.subject2.value = "";
    document.support.subject1.disabled = "disabled";
    document.support.subject1.value = "";
    document.support.subject3.disabled = "";
}
function checkEmail_js(addr) {
    var rx = /^([^\s@,:"<>]+)@([^\s@,:"<>]+\.[^\s@,:"<>.\d]{2,}|(\d{1,3}\.){3}\d{1,3})$/;
    var part = addr.value.match(rx);
    if (part) {
        return true;
    }
    else {
        return false;
    }
}
function CheckInput() {
    if (!checkEmail_js(document.support.email)) {
        alert("Bitte eine korrekte E-Mail Adresse eingeben");
        return false;
    }
    if (document.support.subject1.value == "" && document.support.subject2.value == "" && document.support.subject3.value == "") {
        alert("Bitte eine Kurzbeschreibung eingeben");
        return false;
    }
    if (document.support.comment.value == "") {
        alert("Bitte eine Beschreibung eingeben");
        return false;
    }
    return true;
}