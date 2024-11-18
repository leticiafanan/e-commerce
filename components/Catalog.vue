<template>


  <header>

    <div class="img-logo">
      <img class="logo" src="../assets/img/logodefinitiva.jpg">
    </div>
    <div class="login">
      <p class="login" id="p-login">Seja Bem Vindo(a)</p>

      <a href="../../Login/" class="login" id="a-login">Entrar ou Cadastre-se</a>

      <a class="login" id="cart">
        <img class="img-cart" src="../assets/img/carrinho-de-compras.png" alt="">
      </a>
    </div>


    <div class="header">

      <a class="a-header">Os mais vendidos</a>


      <a class="a-header">Em promoção</a>

      <a class="a-header">Os mais românticos</a>


      <a class="a-header">Os mais mágicos</a>


    </div>

  </header>


</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>



<style scoped>
.img-logo {
  margin-top: 50px;
  display: grid;
  justify-content: left;
}

.logo {
  margin-left: 20px;
  height: 50px;
  width: 300px;
  max-width: 100px;
  max-height: 200px;
}

.login {
  padding: 0;
  margin-top: 20px;
  display: grid;
  justify-content: right;
  align-content: center;
}

#p-login {
  font-size: 15px;
  margin-right: 170px;
}

#a-login {
  text-decoration: none;
  font-size: 15px;
  margin-right: 158px;
}

.img-cart {
  height: 50px;
  width: 60px;
  margin-top: -75px;
  margin-right: 50px;
}

.header {
  margin-top: -45px;
  margin-left: 50px;
  margin-bottom: 50px;
  justify-content: space-between;
  flex-direction: row;
}

.a-header {
  border-radius: 5px;
  border: 1px solid #838d86;
  justify-content: space-between;
  gap: 20px;
  height: 40px;
  width: 90px;
  flex-direction: row;
  margin-right: 10px;

}

a {
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.7);
}
</style>