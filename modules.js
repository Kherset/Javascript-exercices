/* N'avoir qu'un seul fichier js n'est pas viable sur des gros projet, c'est pourquoi,
on utilise des modules que l'on peut importer et exporter */

// exemple avec _array.js

//On peut importer divers modules via d'autres modules
import {hello} from "./_array.js";
