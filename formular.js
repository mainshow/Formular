function validateForm() {
    var vorname = document.forms["myform"]["eingabeVorname"].value;
    var stringVorname = new Array[20];
    for (var i = 0; i < vorname.length(); i++){
        stringVorname[i] = vorname.charAt(i+1);
    }
         
    
    if (vorname == "") {
        alert("Bitte einen Vornamen eintragen!")
        return false;
    }
    var nachname = document.forms["myform"]["eingabeNachname"].value;
    if (nachname == "") {
        alert("Bitte einen Nachnamen eintragen!")
        return false;
    }
}