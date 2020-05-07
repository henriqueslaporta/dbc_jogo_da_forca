export default class Api{
  constructor( url ){
    this.url = url || 'http://localhost:3000'
  }

  async buscarPalavras(categoria) {
    // Caso uma categoria definida buscar somente da categoria,
    // Caso não definido busca todas categorias
    const url = categoria ? `${this.url}/palavras?categoria=${categoria}` : `${this.url}/palavras?`
 
    return new Promise( resolve => {
      fetch( url )
        .then( j => j.json() )
        .then( p => {
          // retorna o objeto {categoria: c, lista: []}
          resolve(p)
        } )
    } ) 
  }

  async buscarRanking() {

    const url = `${this.url}/ranking?_sort=pontos&_order=desc&_start=0&_end=10`

    return new Promise( resolve => {
      fetch( url )
        .then( j => j.json() )
        .then( p => {
          // retorna array de objetos {nome: Jonh, pontos: 100}
          resolve(p)
        } )
    } ) 
  }

    

  async adicionarNoRaking( nome, pontos ) {
    return new Promise( resolve => {
      fetch( 'http://localhost:3000/ranking', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( { 'nome': nome, 'pontos':pontos} ) 
      } )
      .then( j => j.json() )
      .then( p => {
        console.log(p)
      } ) 
    } ) 
  }

  async adicionarUsuario( nome, nascimento ) {
    let usuario = { nome: nome , nascimento: nascimento }
    fetch( 'http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( usuario ) 
    } )
    .then( j => j.json() )
    .then( p => {
      console.log(p)
    } ) 
  }
}
