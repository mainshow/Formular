var elem = document.getElementById('buttonSubmit');
elem.addEventListener('click', chkForm)

function chkForm() {
    var vorname = document.myform.eingabeVorname.value;
//    var stringVorname = new Array[20];
//    for (var i = 0; i < vorname.length(); i++){
//        stringVorname[i] = vorname.charAt(i);
//    }
    for (var i = 0; i < vorname.length(); i++)
    {
        if(vorname.charAt[i+1] == "+" | vorname.charAt[i+1] == "/" | vorname.charAt[i+1] == "\\" | vorname.charAt[i+1] == "1" | vorname.charAt[i+1] == "2")
        {
            alert("Das Sonderzeichen \"" + vorname.charAt[i+1] + "\" ist im Vornamen nicht erlaubt!");
            return false;
        }
        else
        {
            alert("Was ist hier los?");
        }
    }
         
    
 //   if (vorname == "") {
 //       alert("Bitte einen Vornamen eintragen!")
 //       return false;
 //   }
 //   var nachname = document.forms["myform"]["eingabeNachname"].value;
 //   if (nachname == "") {
 //       alert("Bitte einen Nachnamen eintragen!")
 //       return false;
 //   }
}