var compteur = 1;
var totalPrix = 0;
var aoe3 = {
  nom: "Age of Empires III",
  desc:
    "Age of Empires III est un jeu vidéo de stratégie en temps réel développé par Ensemble Studios et publié par Microsoft Game Studios le 18 octobre 2005 en Amérique du Nord et le 4 novembre 2005 en Europe. Il est le troisième volet de la série Age of Empires qui fait suite à Age of Empires II: The Age of Kings publié en 1999. Le jeu se déroule pendant l'époque coloniale, entre 1492 et 1850, dans le nouveau monde.",
  prix: 29.99,
  imgSrc: document.getElementById("imgAoe3").src
};

var assCreed3 = {
  nom: "Assassin's Creed III",
  desc:
    "Le jeu est une fiction historique qui se déroule avant, pendant et après la révolution américaine de 1753 à 1783 et son nouveau héros est un jeune homme d'origine britannique et mohawk nommé Ratonhnhaké:ton qui prendra par la suite le nom de Connor. Assassin's Creed III poursuit l'histoire de la lutte ancestrale entre les Assassins, combattant pour la liberté, et les Templiers, luttant pour le pouvoir par la domination, dans la jeune nation qui deviendra les États-Unis d'Amérique.",
  prix: 39.99,
  imgSrc: document.getElementById("imgAssCreed3").src
};

var assCreedOdyssey = {
  nom: "Assassin's Creed Odyssey",
  desc:
    "Dans le présent, le joueur suit toujours Layla Hassan, une membre des Assassins qui explore la mémoire des premiers Assassins. En revanche, l'action se déroule durant la guerre du Péloponnèse en 431 avant Jésus-Christ, soit 382 ans avant l'histoire de Bayek relatée dans Origins et est centrée sur la première civilisation. Le joueur incarne l'un des descendants de Léonidas, Kassandra ou Alexios.",
  prix: 39.99,
  imgSrc: document.getElementById("imgAssCreedOdyssey").src
};

var redAlert3 = {
  nom: "Red Alert 3",
  desc:
    "Dans une capitale en proie à la révolte populaire et face au départ précipité du Secrétaire Général, Le colonel russe Anatoliy Cherdenko (Interprété par Tim Curry) révèle à son supérieur, le général Krukov, l'existence d'un plan pour faire un bond en arrière dans le temps. Son objectif : assassiner Albert Einstein, supprimant de fait l'incroyable percée technologique des Alliés et restaurant l'ancienne et puissante Union Soviétique dans la foulée.",
  prix: 49.99,
  imgSrc: document.getElementById("imgRedAlert3").src
};

var gta4 = {
  nom: "Grand Theft Auto IV",
  desc:
    "Le jeu met en scène Niko Bellic, un vétéran de guerre originaire d'Europe de l'Est, ayant immigré dans la ville de Liberty City aux États-Unis afin d'y vivre le rêve américain promis par son cousin, Roman Bellic, qui l'entraîne malgré lui dans un engrenage de crimes et de règlements de compte. Le joueur progresse dans des environnements en trois dimensions qu’il explore en vue à la troisième personne et dans lesquels il peut se déplacer à pied ou grâce à divers véhicules.",
  prix: 59.99,
  imgSrc: document.getElementById("imgGta4").src
};

var starcraft = {
  nom: "Starcraft",
  desc:
    "StarCraft est un jeu vidéo de stratégie en temps réel (STR) développé par Blizzard Entertainment. La version PC du jeu fonctionnant sous Microsoft Windows sort le 31 mars 1998 et s’inscrit dans la droite lignée des deux premiers succès de Blizzard Entertainment dans le domaine des jeux de stratégie en temps réel : Warcraft: Orcs and Humans et Warcraft II: Tides of Darkness. Avec plus de onze millions de copies vendues dans le monde, il est l’un des jeux vidéo sur PC les mieux vendus et reste à ce jour le jeu de stratégie en temps réel le plus vendu de tous les temps.",
  prix: 19.99,
  imgSrc: document.getElementById("imgStarcraft1").src
};

var starwars = {
  nom: "StarWars BattleFront",
  desc:
    "Le jeu se concentre sur cinq films de la saga Star Wars, Rogue One: A Star Wars Story, Un nouvel espoir, L'Empire contre-attaque, Le Retour du Jedi et Le Réveil de la Force. Star Wars Battlefront met en scène des combats armés entre les forces de l'Empire galactique et d'une organisation s'y opposant, l'Alliance rebelle (parfois appelée la Rébellion) sur diverses planètes de la galaxie fictive.",
  prix: 59.99,
  imgSrc: document.getElementById("imgStarwars").src
};

var diablo2 = {
  nom: "Diablo 2",
  desc:
    "Diablo II est un jeu vidéo d'action et de rôle de type hack 'n' slash développé par Blizzard North. Il constitue le deuxième opus de la série, succédant à Diablo et à son extension Diablo: Hellfire. Le jeu a été publié en Amérique du Nord par Blizzard Entertainment et en Europe par Sierra Entertainment le 29 juin 2000. Le jeu se déroule dans un monde imaginaire de type médiéval-fantastique dans lequel le joueur peut choisir d’incarner une amazone, un barbare, un nécromancien, un paladin ou une ensorceleuse dans ses combats contre les armées de créatures démoniaques envoyées dans le monde des hommes par les démons Diablo, Mephisto et Baal.",
  prix: 29.99,
  imgSrc: document.getElementById("imgDiablo2").src
};

var wc3 = {
  nom: "Warcraft 3",
  desc:
    "Le jeu se déroule dans le monde médiéval-fantastique d'Azeroth plusieurs années après les événements de Warcraft II: Beyond the Dark Portal. En plus des humains et des orcs déjà présents dans les deux premiers opus de la série, Warcraft III permet au joueur de commander deux nouvelles factions, les elfes de la nuit et les morts-vivants.",
  prix: 29.99,
  imgSrc: document.getElementById("imgWc3").src
};

function carteDescAfficher() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (document.getElementById("carteDesc").classList.contains("is-hidden")) {
    window.setTimeout(function() {
      document.getElementById("carteDesc").classList.remove("is-hidden");
    }, 350);
  }
}

function afficherPanier() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (document.getElementById("panier").classList.contains("is-hidden")) {
    window.setTimeout(function() {
      document.getElementById("panier").classList.remove("is-hidden");
    }, 350);
  }
}

function ajouterPanier() {
  var nom = document.getElementById("jeuEnVente").innerHTML;
  var prix = document.getElementById("descPrix").innerHTML;
  var idNom = nom.substring(0, 1) + compteur;
  var idLi = nom.substring(0, 1) + (compteur + 100);
  afficherPanier();
  var ul = document.getElementById("panier");
  var li = document.createElement("li");
  li.classList.add("has-text-light");
  li.classList.add("title");
  li.setAttribute("id", idLi);
  li.appendChild(document.createTextNode(nom));
  var button = document.createElement("button");
  button.innerHTML = "supprimer du panier";
  button.classList.add("button");
  button.classList.add("is-pulled-right");
  button.classList.add("is-link");
  li.appendChild(button);
  button.setAttribute("id", idNom);
  ul.appendChild(li);
  document.getElementById("titrePanier").innerHTML =
    "Panier d'achats (" + compteur + ")";
  totalPrix += parseFloat(prix.replace(/[^\d.-]/g, ""));
  document.getElementById("totalPanier").innerHTML =
    "Total du panier: " + totalPrix + " $";
  compteur++;
}

document.getElementById("aoe3").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = aoe3.nom;
  document.getElementById("imgPanier").src = aoe3.imgSrc;
  document.getElementById("descPanier").innerHTML = aoe3.desc;
  document.getElementById("descPrix").innerHTML = aoe3.prix + " $";
};

document.getElementById("assCreed3").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = assCreed3.nom;
  document.getElementById("imgPanier").src = assCreed3.imgSrc;
  document.getElementById("descPanier").innerHTML = assCreed3.desc;
  document.getElementById("descPrix").innerHTML = assCreed3.prix + " $";
};

document.getElementById("assCreedOdyssey").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = assCreedOdyssey.nom;
  document.getElementById("imgPanier").src = assCreedOdyssey.imgSrc;
  document.getElementById("descPanier").innerHTML = assCreedOdyssey.desc;
  document.getElementById("descPrix").innerHTML = assCreedOdyssey.prix + " $";
};

document.getElementById("redAlert3").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = redAlert3.nom;
  document.getElementById("imgPanier").src = redAlert3.imgSrc;
  document.getElementById("descPanier").innerHTML = redAlert3.desc;
  document.getElementById("descPrix").innerHTML = redAlert3.prix + " $";
};

document.getElementById("gta4").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = gta4.nom;
  document.getElementById("imgPanier").src = gta4.imgSrc;
  document.getElementById("descPanier").innerHTML = gta4.desc;
  document.getElementById("descPrix").innerHTML = gta4.prix + " $";
};

document.getElementById("starcraft1").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = starcraft.nom;
  document.getElementById("imgPanier").src = starcraft.imgSrc;
  document.getElementById("descPanier").innerHTML = starcraft.desc;
  document.getElementById("descPrix").innerHTML = starcraft.prix + " $";
};

document.getElementById("starwars").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = starwars.nom;
  document.getElementById("imgPanier").src = starwars.imgSrc;
  document.getElementById("descPanier").innerHTML = starwars.desc;
  document.getElementById("descPrix").innerHTML = starwars.prix + " $";
};

document.getElementById("diablo2").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = diablo2.nom;
  document.getElementById("imgPanier").src = diablo2.imgSrc;
  document.getElementById("descPanier").innerHTML = diablo2.desc;
  document.getElementById("descPrix").innerHTML = diablo2.prix + " $";
};

document.getElementById("wc3").onclick = function() {
  carteDescAfficher();
  document.getElementById("jeuEnVente").innerHTML = wc3.nom;
  document.getElementById("imgPanier").src = wc3.imgSrc;
  document.getElementById("descPanier").innerHTML = wc3.desc;
  document.getElementById("descPrix").innerHTML = wc3.prix + " $";
};

document.getElementById("fermerDesc").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.setTimeout(function() {
    document.getElementById("carteDesc").classList.add("is-hidden");
  }, 350);
  document.getElementById("jeuEnVente").innerHTML = "Jeux en vente";
};

document.getElementById("btnAjouter").onclick = function() {
  ajouterPanier();
};

document.addEventListener("click", function(e) {
  var idBouton = e.target.id;
  if (!isNaN(idBouton) || idBouton.length < 3) {
    var idLi =
     idBouton.substring(0, 1) + (parseInt(idBouton.substring(1, 2)) + 100);
    //document.getElementById("panier").remove(document.getElementById("idLi"));
    //--compteur;
   // if (compteur === 0) {
    //  document.getElementById("titrePanier").innerHTML = "Panier d'achats";
   // } else {
   //   document.getElementById("titrePanier").innerHTML =
   //     "Panier d'achats (" + compteur + ")";
   // }
    alert(idLi);
  }

});
