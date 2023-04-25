// Debut de l'exercice sur les fonctions "Palindrome"
  function isPalindrome(string) {
    reversedMot = string.split('')
                        .reverse()
                        .join('');
    return string.toUpperCase() === reversedMot.toUpperCase()
  }

  const mots = {
    kayak: true,
    SOS: true,
    Kayak: true,
    Bonjour: false,
  }
  for(let mot in mots) {
    if(isPalindrome(mot) !== mots[mot]) {
      console.error(`isPalindrome(${mot}) aurait du renvoyer ${mots[mot]}`)
    }
  }
  // Fin de l'exercice sur les fonctions "Palindrome"


  // Debut de l'exercice sur les fonctions "Calcul des moyennes des eleves"
  const students = [
    {
      name: 'John',
      notes : [1, 20, 18, 19, 12]
    },
    {
      name: 'Jane',
      notes : [17, 18, 20, 13, 15]
    },
    {
      name: 'Sophie',
      notes : [17, 12, 14, 15, 13]
    },
    {
      name: 'Marc',
      notes : [2, 3, 5, 8, 9]
    },
    {
      name: 'Manon',
      notes : [18, 17, 18, 19, 12]
    },
  ]

  const moyenne = (notes) => {
    let somme = 0
    for (const note of notes) {
      somme += note
    }
    return somme / notes.length

  }

  const compareStudent = (a, b) => {
    return b.moyenne - a.moyenne
  }

  for (let student of students) {
    student['moyenne'] = moyenne(student.notes)
    student['worst'] = Math.min(...student.notes)
    student['best'] = Math.max(...student.notes)
  }

  students.sort(compareStudent)

  const podium = ` Les trois meilleurs eleves sont :
Premier ${students[0].name} avec ${students[0].moyenne} de moyenne. Sa meilleure note est : ${students[0].best}, sa moins bonne est : ${students[0].worst}
Second ${students[1].name} avec ${students[1].moyenne} de moyenne. Sa meilleure note est : ${students[1].best}, sa moins bonne est : ${students[1].worst}
Troisieme ${students[2].name} avec ${students[2].moyenne} de moyenne. Sa meilleure note est : ${students[2].best}, sa moins bonne est : ${students[2].worst}`

  console.log(students)
  console.log(podium)
  // Fin de l'exercice sur les fonctions "Calcul des moyennes des eleves"


  // Debut de l'exercice sur les fonctions "Compter la frequence des mots dans une phrase"
  const phrase = `Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée. Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l'interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n'est pas mon cas, comme je disais là, puisque moi au contraire, j'ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie, je ne suis qu'amour. Et finalement, quand beaucoup de gens aujourd'hui me disent « mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c'est ce`;
  const regex = /[^\w]+/g;
  let frequencies = {}
  const words = phrase
        .toLowerCase()
        .split(regex);

  for (let word of words) {
    if(frequencies[word]) {
      frequencies[word]++
    } else {
      frequencies[word] = 1
    }
  }

  const frequenciesArray = []
  for (let key in frequencies) {
    frequenciesArray.push({
      word: key,
      count: frequencies[key]
    })
  }

  frequenciesArray.sort((a, b) => b.count - a.count)

  const topTrois = `La frequence des mots qui reviennent le plus souvent sont "${frequenciesArray[0].word}" avec une frequence de ${frequenciesArray[0].count} fois;
"${frequenciesArray[1].word}" avec une frequence de ${frequenciesArray[1].count} fois;
"${frequenciesArray[2].word}" avec une frequence de ${frequenciesArray[2].count} fois.`
  // Fin de l'exercice sur les fonctions "Compter les mots dans une phrase"
