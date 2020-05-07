<template>
  <div class="form-group row">
    <label v-bind:for="id">{{label}}</label>
    <input v-bind:name="nome" 
          v-validate="regraValidacao" 
          class="form-control" 
          v-bind:id="id" 
          v-bind:placeholder="placeholder" v-model="valor"
          >

    <div v-show="errors.has( this.nome)" class="alert alert-danger" role="alert">
      <span>{{ errors.first(this.nome) }}</span>
    </div>
  </div> 
  </template> 
<script>
 
export default {
  name: 'InputText',
  props: {
    nome: String, 
    id: String,
    label: String,
    placeholder: String,
    regraValidacao: String
  },
  data: () => {
    return {
      valor: ''
    }
  }
}
</script>
