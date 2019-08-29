const dataGeneros = [
    { id: 1, description: 'Drama' },
    { id: 2, description: 'Comédia' },
    { id: 3, description: 'Suspense' },
    { id: 4, description: 'Ficção' },
    { id: 5, description: 'Terror' },
    { id: 6, description: 'Comédia romântica' },
    { id: 7, description: 'Ficção científica' },
    { id: 8, description: 'Desenho' }
]

const dataFilmesDrama = [
    { id: 1, filme: 'Titanic', genero: 1 },
    { id: 2, filme: 'Star is born', genero: 1 },
    { id: 3, filme: 'Capitão fantástico', genero: 1 },
    { id: 4, filme: 'Marley e eu', genero: 1 },
    { id: 5, filme: 'Os estagiários', genero: 2},
    { id: 6, filme: 'Gente grande', genero: 2},
    { id: 7, filme: 'Uma noite no museu', genero: 2},
    { id: 8, filme: 'Click', genero: 2},
    { id: 9, filme: 'Matrix', genero: 4},
    { id: 10, filme: 'V de Vingança', genero: 4},
    { id: 11, filme: 'O Senhor dos Anéis', genero: 4},
    { id: 12, filme: 'Homem de ferro', genero: 4},
    { id: 13, filme: 'Chuck', genero: 5} ,
    { id: 14, filme: 'Anabelle', genero: 5} ,
    { id: 15, filme: 'A bolha assassina', genero: 5} ,
    { id: 16, filme: 'Sexta-Feira 13', genero: 5}
]

let generos = dataGeneros.map((genero) => (`<div class="item-genero">${genero.id}</div>
                                    <div class="descricao-genero">${genero.description}</div>`))

let divGenero = document.getElementById('generos')

generos.forEach(elemento => {
    divGenero.innerHTML = divGenero.innerHTML + elemento
});
//divGenero.innerHTML = generos

console.log(divGenero)
console.log(generos)
console.log("teste")