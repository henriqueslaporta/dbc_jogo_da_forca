<template>
  <section class="container-fluid fullHeight">
    <div class="row altura15 m-1 rounded align-items-center justify-content-center"> <!-- info e pontuacao -->
      <div class="col"> 
        <h3>Pontos: {{ this.pontos }}</h3>
      </div>  
      <div class="col"> 
        <h3>Tentativas: {{ this.tentativas }}</h3>
      </div>
      <div class="col"> 
        <h3>Tempo: {{ this.tempo }}s</h3>
      </div> 
    </div>
      
    <div class="row h-15 align-items-end justify-content-center mb-5">
      <div class="col-5"> <!-- forca -->
        <!-- <img id="forca" alt="Vue logo" src="../../assets/forcaJogoDesenho.png"> -->
      </div> 
    </div>  
    
    <div class="row altura30 align-items-end justify-content-center mb-5">
      <div class="col-10">
        <div class="row justify-content-center align-items-end">
          <div v-for="(letra, index) in  palavraAtual" v-bind:key="`letra-${index}`" class="mr-2 ">
            <Letra v-if="letra !== ' '" v-bind:letra="letra" v-bind:mostrar="mostrar[index]"/>
            <Espaco v-else />
          </div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid altura40 p-2 align-self-end">
      <div class="row justify-content-center"> 
        <div class="col"> <!-- letras -->
          <ButtonLetra v-for="letra in alfabeto" 
            v-bind:key="letra" 
            v-bind:texto="letra"
            v-bind:especial="verificarLetra( letra )"
            v-bind:click="letraClicada"
          />
        </div>
      </div>
      <div class="row pb-5 justify-content-center align-items-center"> 
        <div class="col">
          <InputText label="Já adivinhou?"
            type="text" 
            id="chuteInput" 
            placeholder="Digite a palavra aqui"
            nome="chute" 
            regraValidacao="required"
            ref="chute"
          />
          <Button
            texto="Submeter" 
            class="btn btn-success btn-lg border-secondary border-top-0 border-left-0"
            v-bind:click="chute"
          />
        </div>
        <div class="col">
          <Button
            v-bind:texto="pedirDica" 
            class="btn btn-info btn-lg border-secondary border-top-0 border-left-0"
            v-bind:click="noop"
          />
        </div> 
        <div class="col">
          <Button
            v-bind:texto="desistir" 
            class="btn btn-danger btn-lg border-secondary border-top-0 border-left-0"
            v-bind:click="perder"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>


<script>
import Button from '../shared/Button.vue'
import ButtonLetra from '../shared/ButtonLetra.vue'
import InputText from '../shared/InputText.vue'
import Dropdown from '../shared/Dropdown.vue'
import Letra from '../shared/Letra.vue'
import Espaco from '../shared/Espaco.vue'
import Api from '../../api/api.js'

export default {
  name: 'Jogo',
  components:{
    Button, ButtonLetra, InputText, Letra, Espaco
  },
  data: () => {
    return {
      nome: '',
      dataNascimento: '',
      dificuldade: '',
      categoria: '',
      tentativas: 0,
      tempo: 0,
      pontos: 0,
      ganhoPontos: 0,
      mostrar: [],
      interval: '',
      pedirDica: "Pedir uma dica",
      desistir: "Desistir",
      palavraAtual: '',
      alfabetoMin: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      alfabeto: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
  },
  methods:{
    verificarLetra( letra ){
      for(let l of this.palavraAtual){
        if(l === letra) return true
      }
      return false
    },
    letraClicada( letra ){
      console.log(`letra - ${letra}`)
      if(!this.verificarLetra(letra)){
        this.tentativas--
        if(this.tentativas === 0)
          this.perder()
      }
      else{
        this.pontos += this.ganhoPontos
        this.mostrarLetra(letra)
        if(!this.mostrar.some(element => element === false )) this.perder()
      }
    },
    mostrarLetra( letra ){
      let pos = 0
      for(let l of this.palavraAtual){
        if(l === letra) this.mostrar[pos] = true
        pos++
      }
    },
    perder(){
      this.desistir = 'Aguarde...'
      clearInterval(this.interval)
      setTimeout( () => {
        const nome = this.nome
        const nascimento = this.dataNascimento
        const pontos = this.pontos
        const dificuldade = this.dificuldade
        const categoria = this.categoria
        this.$router.push( { name: 'telaFinal', params:  {nome,nascimento,pontos,dificuldade,categoria} } )
      }, 2000 )
    },
    async buscarPalavra(){
      const api = new Api()
      const palavras = await api.buscarPalavras(this.categoria)
      const posicao = this.getRandomInt(0, palavras[0].lista.length - 1)
      return palavras[0].lista[posicao]
    },
    getRandomInt(min, max) {
      min = Math.round(min);
      max = Math.round(max);
      return Math.round(Math.random() * (max - min)) + min;
    },
    chute(){
      const chute = this.$refs.chute.valor
      if(chute.toUpperCase() === this.palavraAtual){
        let pos = 0
        for(let i of this.palavraAtual){
          this.mostrar[pos++] = true
        }
        this.perder()
      }
    },
    noop(){}
  },
  async created() {
    this.nome = this.$route.params.nome
    this.dataNascimento = this.$route.params.nascimento
    this.dificuldade = this.$route.params.dificuldade
    this.categoria = this.$route.params.categoria

    const palavra = await this.buscarPalavra(this.categoria)
    console.log(palavra)
    this.palavraAtual = palavra
    this.mostrar = []
    let pos = 0
    for(let i of palavra){
      this.mostrar[pos++] = i === ' ' ? true : false
    }

    if(this.dificuldade === "Fácil"){
      this.tempo = 90
      this.tentativas = 15
      this.ganhoPontos = 5
    }
    else if(this.dificuldade === "Médio"){
      this.tempo = 60
      this.tentativas = 10
      this.ganhoPontos = 10
    } 
    else if(this.dificuldade === "Difícil"){
      this.tempo = 30
      this.tentativas = 5
      this.ganhoPontos = 20
    }
    this.interval = setInterval( () => {
      if(this.tempo === 0 ){
        clearInterval(this.interval)
        this.perder()
      } 
      this.tempo--
    }, 1000)
  }
}
</script>

<style>
 .altura15{
   border: solid 5px;
   border-color:  rgba(255, 255, 255, 0.75); 
   background-color: rgba(165, 198, 45, 1);
   height: 15vh;
   color: whitesmoke;
 }
 
 .altura30{
   height: 30vh;
 }
 .altura40{
   height: 20vh;
   background-color: rgba(255, 255, 255, 0.849);
 }

  #forca{
    height: 300px;
    width: 600px;
  }

  .fullHeight{
    background-image: url("../../assets/cenario.png");
    background-position: center top;
    background-size:cover;
    height: 100vh;
  }

  footer{
    display: none !important;
  }
</style>
