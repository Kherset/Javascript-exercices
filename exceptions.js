// // Debut cour exception base sur l'exercice des perimetres

// // Fonction pour calculer le perimettre d'un rectangle


// const perimeterRectangle = (height, width) => {
//   return (height + width) * 2
// }

// // Creer une classe rectangle initialise avec une largueur et une hauteur
// class Rectangle {

//   constructor(height, width) {
//     if(width <= 0 || height <= 0) {
//       throw new Error('Impossible d\'avoir une forme geometrique avec des dimensions negatives')
//     }
//   this.height = height;
//   this.width = width;
//   }

//   // Creer un getter perimeter
//   get perimeter() {
//     return perimeterRectangle(this.height, this.width);
//   }

//   // Creer un getter isValid
//   get isValid() {
//     return this.width > 0 && this.height > 0
//   }

//   //Creer une methode comparative isBiggerThan
//   isBiggerThan(shape) {
//       return this.perimeter > shape.perimeter
//   }
// }

// // Creer une classe Square qui est une extension de la classe Rectangle
// class Square extends Rectangle {
//   constructor(width){
//     super(width, width)
//   }
// }

// // try{
// //   const r = new Rectangle(-10, 20)
// // } catch (e) {
// //   console.log(e.message)
// // }

// function promptRectangle() {
//   try {
//       const width = parseInt(prompt('Largeur'), 10)
//       const height = parseInt(prompt('Hauteur'), 10)
//       const r = new Rectangle(width, height)
//     return r
//   } catch (e) {
//     throw new Error('Entree utilisateur invalide')
//   }
// }

// promptRectangle()
// // Fin exercice calculer du perimetre d'un rectangle et d'un carre
