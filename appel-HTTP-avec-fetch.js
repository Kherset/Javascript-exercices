/*La méthode fetch() permet de faire des appels HTTP afin de récupérer des ressources sur le réseau
et utilise le système de promesse que l'on a vu précédemment.

Site : JSONPlaceholder.typicode.com*/

const r = fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(body => console.log(body))


fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
headers: {
    Accept: 'application/json'
}
})
.then(r => {
    if (r.ok) {
        return r.json()
    } else {
        throw new Error('Erreur serveur', {cause: r})
    }
})
.then(posts => {
    console.log('La liste des articles : ', posts)
})
.catch(e => {
    console.error('Une erreur est survenue', e)
})

//On peut aussi utiliser cette méthode pour envoyer des données à un serveur au format JSON.

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: 'Hello world'})
})
