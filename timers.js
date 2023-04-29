// Premiere facon d'attendre de maniere synchrone
  function wait(duration) {
    const t = Date.now()
    while(Date.now() - t < duration) {

    }
  }

  console.log('bonjour')
  // wait(1000) // exprime en millisecondes
  // console.log('les gens')


// Autre facon de maniere asynchrone (+ efficace)
  // setTimeout(() => {
  //   console.log('les gens')
  // }, 1000);

  // Autre facon de maniere asynchrone (+ efficace)
// const t2 = setInterval(() => {
//       console.log('les gens')
//     }, 1000);

      // pour stopper l'interval faire console.log(t2) puis clearInterval(valeur obtenue par le console log)


// Exercice : Afficher un message un certain nombre de fois :
  // let i = 0;
  // const temps = setInterval(() => {
  //   if(i < 5) {
  //   i++
  //   console.log('Je ne me repete jamais !')
  //   } else {
  //     clearInterval(temps)
  //   }
  // }, 1000);

// Puis une fonction decompte qui fera un decompte d'un chiffre donne, en attendant une seconde entre chaque valeur retournee
  let number = prompt('Donnez une duree') * 1

  function decompte(duration) {
    const dec = setInterval(() => {
      if(duration >= 0) {
      console.log(`Il reste ${duration} secondes`)
      duration--
      } else {
        clearInterval(dec)
      }
    }, 1000 );
  }

  decompte(number)
