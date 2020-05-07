<template>
  <button v-on:click="verificarClick();click(texto);" 
          v-bind:disabled="disable"
          v-bind:class="{'btn-success' : success, 'btn-danger' : error, 'btn-info' : !disable}"          
          class="btn btn-lg m-1 border-secondary border-top-0 border-left-0"      
  >{{ texto }}</button>
</template>

<script>
export default {
  name: 'ButtonLetra',
  props: {
    texto: String,
    especial: Boolean,
    click: Function
  }, 
  data: () => {
    return {
      disable: false,
      error: false,
      success: false
    }
  },
  methods:{
    verificarClick(){
      this.disable = true
      this.success = this.especial
      this.error = !this.especial
    }
  }
} 
</script>
