/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];
let div = () => console.log("---".repeat(20));

const counter = () => {
  const totalCategories = booksByCategory.length;
  console.log(`Total de categorias ${totalCategories}`);

  div();

  for (let category of booksByCategory) {
    console.log(`Total de livros da categorias:`, category.category);
    console.log(`${category.books.length}`);
  }
};

div(); //------------------------------

let countAuthors = () => {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log(`Número de autores ${authors.length}`);
};

div(); //------------------------------

let booksAutor = (author) => {
  let authorBookes = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author.includes(author)) {
        authorBookes.push(book.title);
      }
    }
  }
  
  div(); //------------------------------

  if(authorBookes.length != 0){
    console.log(`livros do ${author}: `);
    let i = 1;
    for (const bookName of authorBookes) {
      console.log(`${i}) ${bookName}`);
      ++i;
    }
  }else{
    console.log("Livros não encotrado")
  }
};

counter();
countAuthors();
booksAutor("A");
