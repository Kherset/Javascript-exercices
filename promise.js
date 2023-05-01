/* La nature asynchrone du JavaScript pose souvent des problèmes en terme d'organisation avec une sur-utilisation des callbacks.
Les Promise permettent une approche différente et pourront être accompagnées d'une syntaxe spécifique pour rendre le code plus simple et lisible.
Une promesse se construit avec une fonction qui recevra 2 callbacks que l'on pourra appeler en cas de succès ou d'échec de la logique */

const p = new Promise((resolve, reject) => {
  resolve(4)
  // or : reject(5)
})

p
  .then((n) => {
    console.log('Le nombre', n)
    throw new Error('echec')
  })
  .then((n) => console.log('le nombre 2', n))
  .catch((e) => {
    console.log('echec', e)
  })
  .finally(() => console.log('aaa'))


// // exemple avec un setTimeout

function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration)
    }, duration);
  })
}

function waitAndFail(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration)
    }, duration);
  })
}

// wait(2000)
//   .then(() => {
//     console.log('Attente 2s')
//     return wait(1000)
//   })
//   .then(() => {
//     console.log('Attente 1s')
//   })


  /* Await & Async
L'utilisation des Promise résout partiellement le problème du "callback hell" mais la syntaxe reste lourde.
Heureusement, il existe des mots clefs qui permettent de simplifier les choses.
Une méthode peut être déclarée comme asynchrone grâce au mot clef async.
Dans ce cas, le retour de la fonction sera une promesse.*/

async function main() {
  await wait(2000)
  console.log('bonjour')
}

main()

/* Combiner les Promise
L'objet Promise possède en plus des méthodes qui permettent de combiner les Promise pour suivre la résolution de plusieurs Promise en parallèle.

Promise.all()
Promise.allSettled()
Promise.any()
Promise.race()
*/
