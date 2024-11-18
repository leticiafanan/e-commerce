Carousel Sales

<template>

<div class="div-logo">
    <img  class="img-logo" src="../assets/img/Background (1).png">
    <h1 class="title">Saravava</h1>
  </div>


  <carousel class="slider-sales">
    <div class="title-sales" id="sales">EM PROMOÇÃO</div>

    <ol>
      <li>
        <div class="on-sale">
          <img src="../assets/img/depoisdaqueleverao.jpg" alt="Depois daquele verão">
          <p class="p-books">Depois daquele verão <br> <span>por Carley Fortune</span></p>
          <p>De R$ 49,90 <br> <span class="price">Por R$17,22</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/verity.jpg" alt="Verity">
          <p class="p-books"> Verity <br> <span>por Colleen Hoover</span></p>
          <p>De R$ 79,90 <br> <span class="price">Por R$47,50</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/prasempreseu.jpg" alt="Pra sempre seu">
          <p class="p-books"> Pra sempre seu <br> <span>por Abby Jimenez</span></p>
          <p>De R$ 59,90 <br> <span class="price">Por R$33,76</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/promessascrueis.jpg" alt="Promessas Cruéis">
          <p class="p-books"> Promessas Cruéis <br> <span>por Rebecca Ross</span></p>
          <p>De R$ 59,90 <br> <span class="price">Por R$34,20</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/avoznasuacabeca.jpg" alt="A voz na sua cabeça">
          <p class="p-books"> A voz na sua cabeça <br> <span>por Ethan Kross</span></p>
          <p>De R$ 59,90 <br> <span class="price">Por R$39,45</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/chamadeferro.jpg" alt="Chama de ferro">
          <p class="p-books"> Chama de ferro <br> <span>por Rebecca Yarros</span></p>
          <p>De R$179,90 <br> <span class="price">Por R$98,36</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/odeusquedestroisonhos.jpg" alt="O Deus que destrói Sonhos">
          <p class="p-books"> O Deus que destrói sonhos <br> <span>por Rodrigo Bibo</span></p>
          <p>De R$ 44,90 <br> <span class="price">Por R$20,90</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/ondeocorpoestava.jpg" alt="Onde o corpo estava">
          <p class="p-books"> Onde o corpo estava <br> <span>por Ed Brubaker</span></p>
          <p>De R$ 98,00 <br> <span class="price">Por R$59,76</span></p>
        </div>
      </li>


      <li>
        <div class="on-sale">
          <img src="../assets/img/contodefadas.jpg" alt="Conto de fadas">
          <p class="p-books"> Conto de fadas <br> <span>por Stephen King</span></p>
          <p>De R$ 119,90 <br> <span class="price">Por R$52,00</span></p>
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
  font-size: 50px;

}

.title-sales{
  background-color: #faebd7;
  height: 100px;
  align-content: center;
  margin-top: -60px;
  margin-bottom: -20px;
  font-size:  24px;
}

#sales{
  display: grid;
  justify-content: center;
}

.slider-sales{
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

.price{
  color: #109010;
}

span{
  color: black;
  font-size: 16px;
  font-weight: normal;
}

.p-books{
  font-size: 19px;
  font-weight: bold;
}

</style>