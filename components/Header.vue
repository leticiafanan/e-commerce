<template>
  <div class="div-logo">
    <img src="../assets/img/Background (1).png">
    <h1 class="title">Saravava</h1>
  </div>
  <div class="itens-header">
    <h1 class="itens-header">O e-commerce que vai trasnformar sua experiência com os livros!</h1>
    <a class="itens-header" href="../../Principal">Venha descobrir um mundo mágico.</a>
  </div>

  <header>

    <div class="login">
      <p class="login" id="p-login">Seja Bem Vindo(a)🖤</p>
      <a href="../../Login/" class="login" id="a-login">Entre ou Cadastre-se</a>
    </div>
    <div class="cart">
      <a class="cart" id="cart">
        <img class="img-cart" src="../assets/img/carrinho-de-compras.png" alt="">
      </a>
    </div>


    <div class="header">

      <a class="a-header" href="../../BestSellers" >Os mais vendidos</a>


      <a class="a-header"  href="../pages/Sales/">Em promoção</a>


      <a class="a-header"  href="../pages/Magic/">Os mais mágicos</a>


    </div>

  </header>
</template>


<style scoped>


.div-logo{
  height: 200px;
  width: 100%;
  background-color: #FF8400;
  margin-bottom: 60px;

}

.title {
  display: grid;
  justify-items: center;
  margin-top: -100px;

}

img {
  height: 150px;
  width: 200px;
  margin: 5px 20px;

}

.login {
  max-width: 100vw;
  max-width: 100vh;
  height: 60px;
  width: 265px;
  display: grid;
  margin-left: 600px;
  padding: -30px;
  margin-top: -159px;
  align-items: center;
}

.p-login {
  padding: 10px;
  margin: 30px;
  margin-right: -65px;

  max-width: 100vw;
  max-width: 100vh;
}

.a-login {
  padding: 10px;
  margin: 30px;

  max-width: 100vw;
  max-width: 100vh;
}

.cart {
  height: 60px;
  width: 160px;
  display: grid;
  margin-left: 680px;
  padding: -30px;
  margin-top: -97px;
  align-items: center;

  max-width: 100vw;
  max-width: 100vh;
}

.img-cart {
  height: 50px;
  width: 70px;

  max-width: 100vw;
  max-width: 100vh;
}

.itens-header{
  height: 56px;
  display: flex;
  align-items: center;
}

header {
  background-color: #faebd7;
  justify-content: center;
  
}

.header {
  background-color: #faebd7;
  height: 210px;
  display: flex;
  margin-top: 300px;
  justify-items: center;
  margin-left: 150px;
  flex-direction: row;
  padding: 2px;
}

.a-header {
  height: 20px;
  padding: 20px;
  justify-items: center;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 187px;
}

.a-header:hover{
  background-color:#FF8400;
  color: #faebd7;
}

a{
  cursor: pointer;
  text-decoration: none;
  color: green;
}


</style>