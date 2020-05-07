<template>
  <section  class="container-fluid cenario">
    <div>
      <div class="row align-self-center justify-content-center" role="alert">
        <h4 class="alert alert-dark col-4 alert-heading resultado">Resultado Final</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div>
              <h4 class="jogador">Dados do jogador</h4>
              <span class="resultados">{{ this.nome }}</span><br>
              <span class="resultados">{{ this.nascimento }}</span>
            </div>
          </div>
          <div class="col p-1 justify-content-center">
            <div class="row justify-content-center">
              <div class=" col-sm-4 align-self-center p-2">
                <h4 class="pontos">Pontuação</h4>
                <span class="resultados">{{ this.pontos }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><br><br>
        <div class="row align-self-center justify-content-center" role="alert">
          <h4 class="alert alert-dark col-4 alert-heading ranking">Ranking</h4>
        </div>
        <div class="container tabela">
          <table class="table table-sm col-10 align-self-center">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Pontuação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in arrayRank">
                <td>{{ user.nome }}</td>
                <td>{{ user.pontos }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button texto="Finalizar" class="btn btn-danger mr-4" v-bind:click="fim" />
        <Button texto="Jogar Novamente" class="btn btn-success" v-bind:click="jogarNovamente"/>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../shared/Button.vue'
import Api from '../../api/api.js'

export default {
  name: 'TelaFinal',
    components: {
      Button
    },
    data: () => {
      return {
        botaoFinalizar: "Finalizar",
        botaoNovamente: "Jogar Novamente",
        nome: '',
        nascimento: '',
        pontos: '',
        dificuldade: '',
        categoria: '',
        arrayRank: []
      }
    },
    methods: {
      async salvarUsuarioRanking(){
        const api = new Api()
        await api.adicionarNoRaking( this.nome, this.pontos )
      },
      async buscarRanking(){
        const api = new Api()
        console.log('buscar rank') 
        this.arrayRank = await api.buscarRanking( this.nome, this.pontos )
        console.log(this.arrayRank)  
      },
      fim(){
        this.$router.push( { name: 'home' } )
      },
      jogarNovamente(){
        const nome = this.nome
        const nascimento = this.dataNascimento
        const dificuldade = this.dificuldade
        const categoria = this.categoria
        this.$router.push( { name: 'jogo', params:  {dificuldade,categoria,nome,nascimento} } )
      }
    },
    async created() {
      this.nome = this.$route.params.nome
      this.nascimento = this.$route.params.nascimento
      this.pontos = this.$route.params.pontos
      this.dificuldade = this.$route.params.dificuldade
      this.categoria = this.$route.params.categoria
      await this.buscarRanking()  
      await this.salvarUsuarioRanking()  
    }
}
</script>

<style>
.cenario{
  background-image: url("../../assets/cenario.png");
  background-position: center top;
  background-size:cover;
  height: 100vh;
}
.resultado{
  color: whitesmoke;
  background-color: rgba(20, 77, 91, 1);
  font-family: 'Bangers', cursive;
}
  .ranking{
    color: whitesmoke;
    background-color: rgba(20, 77, 91, 1);
    font-family: 'Bangers', cursive;  
  }
  .jogador{
    font-family: 'Bangers', cursive;
    color:  rgba(20, 77, 91, 1);
  }
  .pontos{
    font-family: 'Bangers', cursive;
    color:  rgba(20, 77, 91, 1);
  }
  .tabela{
    color:aliceblue;
    font-family: 'Bangers', cursive; 
  }
  .resultados{
    color: rgba(20, 77, 91, 1);
     font-family: 'Bangers', cursive; 
  }
</style>


