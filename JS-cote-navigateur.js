// Les navigateurs utilise un moteur JS, mais parfois un peu different, d'ou les diferences entre chrome, safari, firefox, ...
  // Utiliser le site caniuse.com pour savoir si une fonction est utilisable sur un navigteur et si oui a partir de quelle version


// faire un lien de l'index.html vers le fichier .js c'est bien, mais le probleme est sur l'ordre :
// en effet le navigateur va lire le fichier js avant le body de l'html et donc executer JS avant lui, ce qui peut parfois poser soucis
// avant on mettait la balise script a la fin du body, mais aujourdhui il existe ceci :

  // <script src="JS-cote-navigateur.js" defer ></script> le mot clef defer permet de lire le code JS mais de l'executer a la fin de la lecture du body.
  // ainsi on peut laisser la balise script avant a balise head



// il existe l'objet window
console.log(window) // auquel on peut ajouter des methodes
console.log(window.location) // pour avoir l'adresse tape
console.log(window.setTimeout()) // pour avoir l'heure


// Nous avons vu le terme defer, qui permet davoir acces aux fichiers js donc d,appeler une variable a l'interieur par exemple a partir de l'index

// Si je met plutot : <script src="JS-cote-navigateur.js" type:"module"></script>
// la portee sera differente, dans ce ca je n'aurait pas acces a la variable du fichier a partir d'une autre balise script
