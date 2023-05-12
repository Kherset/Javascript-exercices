// L'objet date est represente par un timestamp qui represente le nombre de millisecondes
// ecoulees depuis le 01/01/1970.

// Le constructeur :
  // new Date()
  // new Date(timestampInMilliseconds)
  // new Date(dateString)

  // new Date(year, monthIndex)
  // new Date(year, monthIndex, day)
  // new Date(year, monthIndex, day, hours)
  // new Date(year, monthIndex, day, hours, minutes)
  // new Date(year, monthIndex, day, hours, minutes, seconds)
  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// Exemple :
    // console.log(new Date()) // date d'aujourd'hui
    // console.log(new Date(10)) // 01/01/1970 + 10 millisecondes

// Attention les mois sont des index, donc janvier = 0 et pas 1
// les nombres peuvent etre bizarres exemple mettre 14 pour les mois reviendra a Mars, idem pour les jours etc...

// GMT = le fuseau horaire
// UTC = Universal Time coordinate, c'est le temps de reference en France nous sommes a ce temps + 2.

// Date.getTimezoneOffset() permet de connaitre le decalage entre notre temps et le temps UTC.

// Les methodes sont beaucoup centres sur la recuperation d'informations : .getTime() ; GetDate() ...
  new Date().toLocaleDateString()// Permet d'avoir une date locale formatte comme ceci : 07/10/2022 (car nous sommes en France)


// Exercice : Creer une fonction qui permet d'avoir la date de demain
    // function addDays(date, days) {
    //   const newDate = new Date(date.getTime());
    //   newDate.setDate(newDate.getDate() + days)
    //   return newDate
    // }

    // const today = new Date()
    // const tomorrow = addDays(today, 1);
    // console.log(today);
    // console.log(tomorrow);

  // Exercice 2 : Creer une fonction qui permet d'avoir une date future

    const MONTHS = "months"
    const DAYS = "days"
    const YEARS = "years"

    function addInterval(date, n, unit ) {
      const newDate = new Date(date.getTime());
      switch (unit) {
        case DAYS:
          newDate.setDate(newDate.getDate() + n)
          break;

        case MONTHS:
          newDate.setMonth(newDate.getMonth() + n)
          break;

        case YEARS:
          newDate.setFullYear(newDate.getFullYear() + n)
          break;
      }
      return newDate
    }

    const today = new Date()
    const future = addInterval(today, 3, MONTHS);
    console.log(today);
    console.log(future);
