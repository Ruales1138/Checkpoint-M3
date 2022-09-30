const utils = require("../utils");
/*
    3️⃣ ***EJERCICIO 4*** - deleteBook 3️⃣
        ❕ CONSIGNA ❕
        
    1 - Buscar el libro por id, eliminarlo y responder con los libros teniendo en cuenta que no esta mas el que eliminamos.
    
    2 - Si no existe un libro con ese id,
    arrojar un Error. ej: Error(`no existe el libro con id: 10`)
    
      📢 PUNTOS A TENER EN CUENTA 📢
    - Nuestros libros se van a encontrar en un array que inicialmente lo vas a ver vacio pero a medida que se agreguen libros va a ser un array de objetos.Este mismo se encuentra en nuestro archivo utils.

    - Dentro del array de utils es donde debemos buscar nuestros libros
  
    */

const deleteBook = (id) => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  // utils.books.find(e => {
  //   if(e.id !== parseInt(id)) {
  //     throw new Error('no existe el libro con id: ' + id)
  //   }
  //   if(e.id === parseInt(id)) {
  //     utils.books.pop(e)
  //   } 
  //   return utils.books
  // })

  let filteredBook = utils.books.find(e => e.id === parseInt(id))

  if(!filteredBook) throw new Error(`no existe el libro con id: ${id}`)
  else {
    utils.books = utils.books.filter(e => e.id !== parseInt(id))
    return utils.books
  }
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = deleteBook;
