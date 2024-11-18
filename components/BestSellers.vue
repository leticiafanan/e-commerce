<template>

<div class="div-logo">
    <img  class="img-logo" src="../assets/img/Background (1).png">
    <h1 class="title">Saravava</h1>
  </div>

  <carousel class="carousel-best-sellers">
    <div class="title-best-sellers" id="title-best">OS MAIS VENDIDOS</div>

    <ol>
      <li>
        <div class="best-sellers">
          <img src="../assets/img/A empregada.jpg" alt="A emprega">
          <p class="p-books">A empregada <br> <span>por Freida McFadden</span> </p>
          <p>R$25,40</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/M ou N.jpg" alt="M ou N?">
          <p class="p-books"> M ou N? <br> <span>por Agatha Christie</span> </p>
          <p>R$42,60</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/Era uma vez um coração partido.jpg" alt="Era uma vez um coração partido">
          <p class="p-books"> Era uma vez um coração partido <br> <span>por Stephanie Garber</span> </p>
          <p>R$31,50</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/Quarta Asa.jpg" alt="Quarta Asa">
          <p class="p-books"> Quarta Asa <br> <span>por Rebecca Yarros</span></p>
          <p>R$57,60</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/O despertar da lua caida.jpg" alt="O despertar da lua caida">
          <p class="p-books"> O despertar da lua caida <br> <span>por Sarah A. Parker, Carolina Candido, e outros</span>
          </p>
          <p>R$62,70</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/Carmilla - A vampira de Karnstein.jpg" alt="Carmilla - A vampira de Karnstein">
          <p class="p-books"> Carmilla - A vampira de Karnstein <br> <span>por Le Fanu J. Sheridan e John
              Polidori</span>
          </p>
          <p>R$19,90</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/A Biblioteca da Meia-Noite.jpg" alt="A Biblioteca da Meia-Noite">
          <p class="p-books"> A Biblioteca da Meia-Noite <br> <span>por Matt Haig e Adriana Fidalgo</span></p>
          <p>R$41,90</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/A paciente silenciosa.jpg" alt="A paciente silenciosa">
          <p class="p-books"> A paciente silenciosa <br> <span>por Alex Michaelides e Clóvis Marques</span></p>
          <p>R$39,90</p>
        </div>
      </li>


      <li>
        <div class="best-sellers">
          <img src="../assets/img/O segredo da empregada.jpg" alt="O segredo da empregada">
          <p class="p-books"> O segredo da empregada <br> <span>por Freida McFadden e Fernanda Abreu</span></p>
          <p>R$39,45</p>
        </div>
      </li>

    </ol>


  </carousel>

</template>

<style scoped>


.div-logo{
  height: 160px;
  width: 100%;
  background-color: #FF8400;
  margin-bottom: 60px;

}

.img-logo{
  height: 150px;
  width: 200px;
  margin: 5px 20px;
}

.title {
  display: grid;
  justify-items: center;
  margin-top: -100px;

}

.title-best-sellers{
  background-color: #faebd7;
  height: 100px;
  align-content: center;
  margin-top: -60px;
  margin-bottom: -20px;
}

#title-best{
  display: grid;
  justify-content: center;
  font-size: 24px;
}

.carousel-best-sellers{
  background-color: #faebd7;
}


img {
  height: 250px;
  width: 200px;
  margin: 5px 20px;
}


a{
  cursor: pointer;
  text-decoration: none;
  color: green;
}

p{
  display: flex;
  align-items: center;
}

ol {
  flex-direction: row;
  background-color: #faebd7;
  display: flex;            
  justify-content: space-around; 
  flex-wrap: wrap;          
  padding: 0;
  margin: 0;
  list-style-type: none;  
  align-content: center;
  justify-content: center;  
}

li {
  display: flex;
  border: 1px solid #949494;
  border-radius: 30px;
  height: 350px;
  width: 250px;
  margin: 10px;
  justify-content: center;
  align-content: center;
  padding: 20px;
  
  justify-content: center;
}

span{
  color: black;
  font-size: 16px;
  font-weight: normal;
  justify-content: center;
}

.p-books{
  font-size: 19px;
  font-weight: bold;
  justify-content: center;
}

</style>