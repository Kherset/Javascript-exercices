// L'incrémentation :

  // i++ // équivalent à i = i + 1
  // i-- // équivalent à i = i - 1
  //   /* Vous pouvez mettre le ++ et -- avant le nom de la variable pour changer
  //   la valeur de retour (mais cela ne change pas le fonctionnement de l'incrémentation) */
  // i += 4 // Equivalent à i = i + 4
  // i /= 3 // Equivalent à i = i / 3
  // i *= 3 // Equivalent à i = i * 3


  let i = 0
  ++i // retourne 1, là ou i++ retourne 0


// Les conditions :

  const age = 19
  let message
  if (age >= 18) {
      message = 'Vous pouvez entrer'
  } else {
      message = 'Vous ne pouvez pas entrer'
  }
  // Pour simplifier on peut utiliser un ternaire : <condition> ? <valeur si condition vrai> : <valeur si condition fausse>

    const messageTernaire = age >=18 ? 'Vous pouvez entrer' : 'Vous ne pouvez pas entrer'

  // On peut aussi dériver l'utilisation des opérateurs booléens pour éviter de faire une condition
    const b = a || 3 // Ne vaudra 3 que si la valeur de a est falsy
    const c = a && 3 // Ne vaudra 3 que si la valeur de a est truthy
    
    // Ces opérateurs peuvent aussi être utilisé lors de l'assignation
    a ||= 3 // Equivalent à a = a || 3
    a &&= 3 // Equivalent à a = a && 3

    // L'opérateur de coalescence des nuls (Nullish coalescing operator)
     const d = a ?? 3 // Ne vaudra 3 que si la valeur de a est null ou undefined

  // L'opérateur ?. permettra de faire de l'optional chaining et d'accéder à une propriété sur un objet s'il existe, en renvoyant undefined si la valeur est null ou undefined.
  // Cela permet de simplifier ce genre de syntaxe
  if (person && person.job && person.job.salary) {
  console.log(person.job.salary.value)
  }
  // Peut etre remplacer par :
  console.log(person?.job?.salary?.value)


// La déstructuration