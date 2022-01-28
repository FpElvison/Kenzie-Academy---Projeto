//SELECIONANDO UM ELEMENTO DO MEU HTML, A LISTA DE DESTAQUES

//LISTA ESQUERDA VIDEOS
let listaDestaque = document.querySelector('.secaoVideosDestaques_lista')

//PARTE DE BAIXO DA SEÇÃO DE VIDEOS
let secaoTodosVideos = document.querySelector('.secaoTodosVideos ul')

//LISTA DA DIREITA ADICIONAR VIDEOS
let listaReproducao = document.querySelector('.secaoAdicionarAFila_lista')

//FILA DA DIREITA ONDE ADICIONO REPRODUÇÃO
let reproduzirTodos = document.querySelector('.secaoTodosVideos')

//ARRAY DE VÍDEOS
const listaVideos = [
  {
    id: 0,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil',
    descricao: 'APRENDA DO ZERO COM NOSSO CURSO DE PROGRAMAÇÃO',
    thumbnail: '/img/thumb1.webp'
  },

  {
    id: 1,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil',
    descricao: 'APRENDA DO ZERO COM NOSSO CURSO DE PROGRAMAÇÃO',
    thumbnail: '/img/thumb2.webp'
  },

  {
    id: 2,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil',
    descricao: 'APRENDA DO ZERO COM NOSSO CURSO DE PROGRAMAÇÃO',
    thumbnail: '/img/thumb1.webp'
  },

  {
    id: 3,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil',
    descricao: 'APRENDA DO ZERO COM NOSSO CURSO DE PROGRAMAÇÃO',
    thumbnail: '/img/thumb2.webp'
  }
]

//FUNÇÃO QUE VAI LISTAR OS VÍDEO, UTILIZANDO UM LOOP FOR

function listarVideos(listaDestaque) {
  for (let i = 0; i < listaVideos.length; i = i + 1) {
    //ACESSANDO VALORES DO VÍDEO
    let titulo = listaVideos[i].titulo
    let visualizacoes = listaVideos[i].visualizacoes
    let descricao = listaVideos[i].descricao
    let thumbnail = listaVideos[i].thumbnail

    //PASSANDO PARA FUNÇÃO CRIAR O TEMPLATE
    criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
  }
}
//LISTANDO VÍDEOS

listarVideos(listaDestaque)
listarVideos(secaoTodosVideos)

//FUNÇÃO QUE CRIA O TEMPLATE

function criarTemplate(
  listaDestaque,
  titulo,
  visualizacoes,
  descricao,
  thumbnail
) {
  //CRIANDO UM ELEMENTO DO TIPO  HTML => LI

  let li = document.createElement('li')

  //ESTOU ADICIONANDO TAGS E O CONTEÚDO PRA DENTRO DESSE LI

  li.innerHTML = `
        <figure>
          <img src="${thumbnail}"alt="${titulo}" />
        </figure>

            <div>
              <h3>${titulo}</h3>
              <span>${visualizacoes}</span>
              <p>${descricao}</p>
              <button class="buttonAdicionarAFila">Adicionar a fila</button>
            </div>
`
  //ESTOU ADICIONANDO O LI, PREECHIDO DENTRO DA MINHA LISTA LÁ NO HTML

  listaDestaque.appendChild(li)
}

// FUNÇÕES DE CLIQUE - COLUNA ESQUERDA ADICIONAR
listaDestaque.addEventListener('click', adicionarAFila)

//FUÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function adicionarAFila(event) {
  //PEGA O NOME DO ELEMENTO
  const buttonName = event.target.tagName

  //PEGA O ELEMENTO CLICANDO
  const button = event.target

  //VERIFICA SE É UM BOTÃO
  if (buttonName == 'BUTTON') {
    //PEGA O PAI DO BOTÃO
    const li = button.closest('li')

    //FAZ UMA COPIA DESSE ELEMENTO
    const licopy = li.cloneNode(true)

    //ADICIONA NA LISTA DE REPRODUÇÃO
    listaReproducao.appendChild(licopy)
  }
}

// FUNÇÕES DE CLIQUE - COLUNA DIREITA REMOVER
listaReproducao.addEventListener('click', removerdaAFila)
//FUÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function removerdaAFila(event) {
  //PEGA O ELEMENTO CLICANDO
  const elemento = event.target

  //PEGA O NOME DO ELEMENTO
  const elementoName = event.target.tagName

  //VERIFICA SE É UM BOTÃO
  if (elementoName !== 'LI') {
    elemento.closest('li').remove()
  } else {
    elemento.remove()
  }
}

// FUNÇÕES DE CLIQUE - SEÇÃO TODOS ADICIONAR
reproduzirTodos.addEventListener('click', adicionarAFila)

//FUÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function adicionarAFila(event) {
  //PEGA O NOME DO ELEMENTO
  const buttonName = event.target.tagName

  //PEGA O ELEMENTO CLICANDO
  const button = event.target

  //VERIFICA SE É UM BOTÃO
  if (buttonName == 'BUTTON') {
    //PEGA O PAI DO BOTÃO
    const li = button.closest('li')

    //FAZ UMA COPIA DESSE ELEMENTO
    const licopy = li.cloneNode(true)

    //ADICIONA NA LISTA DE REPRODUÇÃO
    listaReproducao.appendChild(licopy)
  }
}
