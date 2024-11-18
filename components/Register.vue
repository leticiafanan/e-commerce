<template> 

<div class="div-logo">
    <img src="../assets/img/Background (1).png">
    <h1 class="title">Saravava</h1>
  </div>

  <div class="form-container">
    <h2>Criar Conta</h2>
    <form >
      <div>
        <label for="email">Email</label>
        <input type="email" id="email"  required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" id="password"  required />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Senha</label>
        <input type="password" id="confirmPassword" required />
      </div>
      <div  class="error">
      </div>
      <button class="button-register" type="submit">Criar Conta</button>
    </form>
  </div>

  <div class="form-container-login">
    <h2>Entrar</h2>
    <form >
      <div>
        <label for="email">Email</label>
        <input class="input-login" type="email" id="email"  required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" id="password"  required />
      </div>
      <button class="button-login" type="submit">Entrar</button>
    </form>
  </div>
</template>


<style scoped>


.div-logo{
  height: 160px;
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
.form-container {
  max-width: 400px; 
  margin: 50px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 12px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-register {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
}

.error {
  color: red;
  font-size: 14px;
}

.form-container-login {
  max-width: 400px; 
  margin: 50px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
}

form div {
  margin-bottom: 12px;
}

.input-login {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-login {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw; 
  margin: 50px;
  padding: 20px;
}

.form-container{
  margin-left: 190px;
  margin-top: 50px;
}

.form-container-login{
  margin-left: 890px;
  margin-top: -350px;
}

</style>