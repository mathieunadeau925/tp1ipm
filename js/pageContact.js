document.getElementById("btnEnvoyer").addEventListener("click", function () {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var texte = document.getElementById("sujet")
    alert(prenom + " " + nom + " " + tel + " " + email + " Jobbeux");
});