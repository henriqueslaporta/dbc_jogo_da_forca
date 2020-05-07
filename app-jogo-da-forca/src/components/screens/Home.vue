<template>
    <div  id="home" class="container-fluid">
      <div class="row h-100 pb-5 justify-content-center align-items-end">
        <form id="caixa" v-on:submit.prevent="onSubmit" class="col-8 p-2 border border-secondary rounded">
          <div class="row p-3" id="tela">
            <InputText label="Nome"
              id='nome' 
              ref="nome"
              placeholder="Seu nome" 
              type="text"
              nome="nome"
              regraValidacao="required"
              class="col mr-1"
            />
            <InputText label="Data de nascimento"
              type="text" 
              id="dataInput" 
              placeholder="Seu nascimento"
              nome="Data_nascimento" 
              regraValidacao="required|date_format:DD/MM/YYYY|before:10/10/2018"
              ref="dataNascimento"
              class="col"
            />
          </div>
          <div class="row p-3">
            <Dropdown id="inputDificuldade"
                      label="Dificuldade:"
                      v-bind:lista="dificuldades"
                      ref="dificuldadeRef"
                      class="col mr-1"
            /> 
            <Dropdown id="inputCategoria"
                      label="Categoria:"
                      v-bind:lista="categorias"
                      ref="categoriaRef"
                      class="col"
            /> 
          </div>
          <div class="row justify-content-center">
            <Button v-bind:texto="textoBotao" v-bind:click="noop" class="btn btn-lg btn-success" type="submit"/>
          </div>
        </form>
      </div>
      <footer class="navbar fixed-bottom row justify-content-center">
        <div>
          &#174;Todos os direitos reservados a DBC Company.
        </div> 
      </footer>
    </div>
</template> 

<script>

import Button from '../shared/Button.vue'
import InputText from '../shared/InputText.vue'
import Dropdown from '../shared/Dropdown.vue'
import Api from '../../api/api.js'

export default {
  name: 'Home',
  components: {
    Button, InputText, Dropdown
  },
  data: () => {
    return {
      dificuldades: [
        { id: 1, texto: 'Fácil' },
        { id: 2, texto: 'Médio' },
        { id: 3, texto: 'Difícil' }],
      categorias: [
        { id: 1, texto: 'Vem Ser DBC' },
        { id: 2, texto: 'Comidas' },
        { id: 3, texto: 'Animais' }],
      textoBotao: "Jogar"
    } 
  },
  methods: { 
    onSubmit() {  
      const nome = this.$refs.nome.valor
      const nascimento = this.$refs.dataNascimento.valor
      const dificuldade = this.$refs.dificuldadeRef.valor
      const categoria = this.$refs.categoriaRef.valor
      if(nome != 0 && nascimento != 0 && dificuldade != 0 && categoria != 0){
        this.textoBotao = 'Aguarde...'
        setTimeout( () => {
          this.$router.push( { name: 'jogo', params:  {dificuldade,categoria,nome,nascimento} } )
        }, 2000 )
      }
    },
    noop(){}
  }
}
</script>

<style>
  #caixa{
    background: rgba(15, 15, 37, 0.6);
    color:white;
  }

  #home{
    background-image: url(https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.0-9/43470084_892305414491997_3121446363737358336_n.jpg?_nc_cat=102&oh=1ee609c9c7c2e906240966b999cc6c82&oe=5C4BFD6C);
    background-position: center;
    height:100%;
  }
</style>




