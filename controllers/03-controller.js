const utils = require("../utils");
/*
    4️⃣ ***EJERCICIO 4*** - deleteBook 4️⃣
      ❕ CONSIGNA ❕
      
    1 - Debemos buscar nuestro libro en el array de books y actualizar las propiedades de name, rating y genre.

    2 - Si no encuentra un libro, debe
    arrojar un Error. ej: Error("no se encontro el libro solicitado")

    3 - Si alguna de las propiedades del book que recibimos son undefined, debe arrojar un Error. ej: Error("falta completar datos")

    📢 PUNTOS A TENER EN CUENTA 📢

    - Nuestros libros se van a encontrar en un array que inicialmente lo vas a ver vacio pero a medida que se agreguen libros va a ser un array de objetos.Este mismo se encuentra en nuestro archivo utils.

    - Dentro del array de utils es donde debemos buscar nuestros libros

  */

const findBook = (book) => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  let filteredBook = utils.books.find(e => e.id === book.id)

  if(!filteredBook) throw new Error('no se encontro el libro solicitado')
  else{
    if(
    !book.id || 
    !book.name || 
    !book.author || 
    !book.stock || 
    !book.available || 
    !book.rating || 
    !book.admission || 
    !book.genre
    ) {
      throw new Error('falta completar datos')
    }
    else {
      filteredBook.id = book.id;
      filteredBook.name = book.name;
      filteredBook.author = book.author;
      filteredBook.stock = book.stock;
      filteredBook.available = book.available;
      filteredBook.rating = book.rating;
      filteredBook.admission = book.admission;
      filteredBook.genre = book.genre;
    }
    return filteredBook
  }
}; 

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = findBook;
