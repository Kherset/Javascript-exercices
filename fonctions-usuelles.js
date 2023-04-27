// Les arrays :

  // .at() permet d'aller a un index, mais accepte aussi des nombres negatifs
    const notes1 = [12, 17, 18]
    console.log(notes1.at(-1))

  //.concat() permet de fusionner des tableaux

  // .fill() permet de remplir un tableau avec des valeurs precises

  // TRES IMPORTANT : .filter() permet de filtrer un tableau selon des parametres, sans avoir a creer un nouveau tableau et faire une boucle qui enverra les resultats dedans
    const notes2 = [12, 17, 18, 9, 7]
    const goodNotes = notes2.filter((note) => note >= 10)
    console.log(goodNotes)

  //.find() recupere le premier element qui correspond a la demande dans le tableau
    const array1 = [12, 17, 18, 9, 7]

    const found = array1.find(element => element > 10)

    console.log(found)

  // .findIndex() idem que find mais renvoie l'index de l'element

    const array2 = [12, 17, 18, 9, 7]

    const isLargeNumber = (element) => element > 17

    console.log(array2.findIndex(isLargeNumber))

  // il existe exalement .findLast() et .findLastIndex()

  // .flat() pour applatir un tableau avec plusieurs niveau de profondeur :

    const array3 = [0, 1, 2, [3, 4]]
    console.log(array3.flat())

      // On peut specifier le niveau que l'on veut applatir.
        const array4 = [0, 1, 2, [[[3, 4]]]]
        console.log(array4.flat(2))

  //.forEach() permet de parcourir un tableau (moins utile maintenant qu'il y a les boucles forin, forof)

    const notes3 = [12, 17, 18, 9, 7]
    notes3.forEach((note, index) => {
      console.log(note, index)
    })

  // .from() permet de creer un tableau avec les informations qu'on lui donne
    console.log(Array.from('foo'))

  // IMPORTANT .includes() permet de voir si une valeur est incluse dans un tableau
    const array5 = [1, 2, 3]

    console.log(array5.includes(2))

    const array6 = ['dog', 'cat', 'bat']

    console.log(array6.includes('cat')) // true
    console.log(array6.includes('at')) // false

  // .indexOf() donne l'index d'un element donne
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));

    // Start from index 2
    console.log(beasts.indexOf('bison', 2));
    // Expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // Expected output: -1

  // .join()

  // IMPORTANT .map()
    const array7 = [1, 4, 9, 16];

    // Pass a function to map
    const map1 = array7.map(x => x * 2);

    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]

    //Autre exemple :
    const persons = [
      {firstname: 'John', lastname: 'Doe'},
      {firstname: 'Jane', lastname: 'Doe'},
      {firstname: 'Marc', lastname: 'Doe'},
      {firstname: 'Manon', lastname: 'Doe'}
    ]
    console.log(
      persons
        .map((p) => p.firstname + ' ' + p.lastname)
        .join('\n')
    )

    // .pop() permet de retirer le dernier element d'un tableau. attention elle affecte le tableau original

    // .push() permet d'ajouter un element dans un tableau. attention elle affecte le tableau original

    // .reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

    const notes4 = [12, 19, 15, 8]
    console.log(
      notes4.reduce((acc, note) => { // Prend deux parametres : un accumulateur et la valeur courante
        return acc + note // l'accumulateur va etre incremente par les notes une par une
      }, 0 ) // 0 est l'accumulateur a son etat initial, apres que la fonction ai fini son travail elle renverra le resultat a la place du 0
    )

  // .slice() permet de recuperer une partie du tableau en creant un nouveau tableau
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // Expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // Expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice());
    // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

  // .sort() permet d'organiser les element dans un tableau

  // .unshift() permet d'ajouter des elements au debut du tableau



// Les objets :

  // .assign() permet d'assigner des proprietes d'un objet a un autre objet.

    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // Expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget === target);
    // Expected output: true

  // .create() permet de créer un nouvel objet avec un prototype donné et des propriétés données.

    const person = {
      isHuman: false,
      printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      }
    };

    const me = Object.create(person);

    me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // Inherited properties can be overwritten

    me.printIntroduction();
    // Expected output: "My name is Matthew. Am I human? true"

  // .key() permet de creer un tableau avec toutes les clefs
    const object1 = {
      a: 'somestring',
      b: 42,
      c: false
    };

    console.log(Object.keys(object1));
    // Expected output: Array ["a", "b", "c"]


// Les fonctions :

  // .bind() permet de créer une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
    function hello () {
      console.log(this)
    }

    const hello2 = hello.bind(3) // renverra fonction 3

  // .apply() permet d'appeller une fonction en lui passant une valeur this et des arguments sous forme d'un tableau (ou d'un objet semblable à un tableau).
    const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers);

    console.log(max);
    // Expected output: 7

    const min = Math.min.apply(null, numbers);

    console.log(min);
    // Expected output: 2

  // .call() permet de réaliser un appel à une fonction avec une valeur this donnée et des arguments fournis individuellement.
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }

    console.log(new Food('cheese', 5).name);
    // Expected output: "cheese"
