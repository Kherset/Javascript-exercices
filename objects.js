// Debut du cour sur les classes

// const moyenne = (notes) => {
//   let somme = 0
//   for (const note of notes) {
//     somme += note
//   }
//   return somme / notes.length
// }

// class Student {
//   ecole = 'Jules Ferry'
//   #notes = []

//   constructor (firstname, lastname) {
//     this.firstname = firstname
//     this.lastname = lastname
//   }

//   set notes (v) {
//     if (Array.isArray(v)) {
//     this.#notes = v
//     }
//   }

//   get name () {
//     return `${this.firstname} ${this.lastname}`
//   }

//   canPass () {
//     return moyenne(this.#notes) >= Student.moyenne
//   }

//   static  moyenne = 10

// }

// class SuperStudent extends Student {

//   constructor (firstname, lastname, notes) {
//     super(firstname, lastname)
//     this.notes = notes
//   }
//   get name () {
//     return `Super` + super.name
//   }
//   canPass () {
//     return super.canPass()
//   }
// }

// const john = new SuperStudent('John', 'Doe', [0, 10, 8])
// const jane = new Student('Jane', 'Doe')
// jane.notes = [15,18,19]
// console.log(john.canPass())

// Fin du cour sur les classes



// Debut exercice calculer du perimetre d'un rectangle et d'un carre

// Fonction pour calculer le perimettre d'un rectangle
const perimeterRectangle = (height, width) => {
  return (height + width) * 2
}


// Creer une classe rectangle initialise avec une largueur et une hauteur
class Rectangle {

  constructor(height, width) {
  this.height = height;
  this.width = width;
  }

  // Creer un getter perimeter
  get perimeter() {
    return perimeterRectangle(this.height, this.width);
  }

  // Creer un getter isValid
  get isValid() {
    return this.width > 0 && this.height > 0
  }

  //Creer une methode comparative isBiggerThan
  isBiggerThan(shape) {
      return this.perimeter > shape.perimeter
  }
}

// Creer une classe Square qui est une extension de la classe Rectangle
class Square extends Rectangle {
  constructor(width){
    super(width, width)
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter)
console.log(r.isValid)

const r2 = new Rectangle(-10, 20);
console.log(r2.isValid)

const c = new Square(10);
console.log(c.perimeter)
console.log(c.isBiggerThan(r))

// Fin exercice calculer du perimetre d'un rectangle et d'un carre
