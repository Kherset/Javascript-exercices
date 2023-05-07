// Il ne faut pas commenter chaque ligne, mais plutot expliquer le but de telle ou telle fonction

//JSDoc.app est un format particulier de commentaire pour guider les autres developpeurs mais aussi l'editeur de texte et donc de l'autocompletion

// exemple :
      /**
   * Vérifie si l'utilisateur peut conduire (conduite accompagnée incluse)
   *
   * https://en.wikipedia.org/wiki/List_of_minimum_driving_ages
   *
   * @param {number} age
   * @param {string} country Le pays sur 2 lettres (exemple: "FR", "EN", ...)
   * @returns {boolean}
   * @throws {InvalidCountryException}
   */
  function canDrive ({age, country}) {
    // A la réunion un permis de conduite accompagnée existe à partir de 15 ans
    if (age >= 15 && country === "RE") {
        return true
    }
  }
// fin de l'exemple
