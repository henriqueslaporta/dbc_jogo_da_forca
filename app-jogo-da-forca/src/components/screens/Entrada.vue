<template>
  <section  class="container-fluid entrada">
    <div>
      <img class="iniciar" src="../../assets/botao_iniciar.png" alt="botao iniciar" onclick=()>
    </div>
    
  </section>
</template>

<script>
export default {  
  name: 'Entrada',
  components: {
  },
  data: () => {
    return {

    }
  },
  methods: {
    onClick() {
      setTimeout( () => {
          this.$router.push( { name: 'home' } )
        }, 2000 )
      }
    }
  }
</script>

<style>
  .entrada{
    background-image: url("../../assets/carrasco_final_bernardo.png");
    background-position: center;
    background-size:cover;
    height: 100vh;
  }
  .iniciar{
    width: 5vw;
    margin-top: 200px;
  }
</style>


