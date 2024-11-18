<template>
  
<div class="div-logo">
    <img  class="img-logo" src="../assets/img/Background (1).png">
    <h1 class="title">Saravava</h1>
  </div>

  <carousel class="carousel-magics">
    <div class="title-magics"  id="title-magic">OS MAIS MÁGICOS</div>
    <ol>
    <li>
    <div class="magics">
      <img src="../assets/img/O despertar da lua caida.jpg" alt="O despertar da lua caída">
      <p class="p-books">O despertar da lua caída <br> <span>por Sarah A. Parker</span> </p>
      <p>R$56,91</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/Box Trilogia O Senhor dos Anéis.jpg" alt="Box Trilogia O Senhor dos Anéis">
      <p class="p-books"> Box Trilogia O Senhor dos Anéis <br> <span>por J.R.R. Tolkien</span> </p>
      <p>R$129,90</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/Edgar Allan Poe - Vol. 1.jpg" alt="Edgar Allan Poe - Vol. 1: Sinta o medo clássico">
      <p class="p-books"> Edgar Allan Poe - Vol. 1: Sinta o medo clássico <br> <span>por Edgar Allan Poe</span> </p>
      <p>R$61,28</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/Edgar Allan Poe - Vol. 2.jpg" alt="Edgar Allan Poe - Vol. 2: O darksider original mais vivo do que nunca">
      <p class="p-books">Edgar Allan Poe - Vol. 2: O darksider original mais vivo do que nunca <br> <span>por Edgar Allan Poe</span></p>
      <p>R$48,25</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/Duna- livro 1.jpg" alt="Duna: livro 1">
      <p class="p-books"> Duna: livro 1 <br> <span> por Frank Herbert </span></p>
      <p>R$66,90</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/A Biblioteca da Meia-Noite.jpg" alt="A Biblioteca da Meia-Noite">
      <p class="p-books"> A Biblioteca da Meia-Noite <br> <span>por Matt Haig</span>
      </p>
      <p>R$41,90</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/A vida invisível de Addie LaRue.jpg" alt="A vida invisível de Addie LaRue ">
      <p class="p-books"> A vida invisível de Addie LaRue  <br> <span> por V.E. Schwab</span></p>
      <p>R$49,95</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/As Crônicas de Nárnia.jpg" alt="As Crônicas de Nárnia - Coleção de Luxo: O Leão, a Feiticeira e o Guarda-roupa">
      <p class="p-books"> As Crônicas de Nárnia - Coleção de Luxo: O Leão, a Feiticeira e o Guarda-roupa <br> <span>por C S. Lewis</span></p>
      <p>R$41,90</p>
    </div>
  </li>


    <li>
    <div class="magics">
      <img src="../assets/img/Wicked.jpg" alt="Wicked">
      <p class="p-books">Wicked <br> <span>por Freida McFadden e Fernanda Abreu</span></p>
      <p>R$67,80</p>
    </div>
  </li>

  <li>
    <div class="magics">
      <img src="../assets/img/Box O castelo animado.jpg" alt="Box O castelo animado">
      <p class="p-books">Box - O castelo animado<br> <span> por Diana Wynne Jones</span></p>
      <p>R$138,82</p>
    </div>
  </li>

  <li>
    <div class="magics">
      <img src="../assets/img/Corte de espinhos e rosas.jpg" alt="Corte de espinhos e rosas">
      <p class="p-books">Corte de espinhos e rosas <br> <span> por Sarah J. Maas</span></p>
      <p>R$78,99</p>
    </div>
  </li>

  <li>
    <div class="magics">
      <img src="../assets/img/Carmilla - A vampira de Karnstein.jpg" alt="Carmilla - A vampira de Karnstein">
      <p class="p-books">Carmilla - A vampira de Karnstein<br> <span>por Sheridan Le Fanu</span></p>
      <p>R$34,90</p>
    </div>
  </li>

  <li>
    <div class="magics">
      <img src="../assets/img/De sangue e cinzas (Vol. 1).jpg" alt="De sangue e cinzas">
      <p class="p-books">De sangue e cinzas<br> <span> por Jennifer L. Armentrout</span></p>
      <p>R$49,91</p>
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

.title-magics{
  background-color: #faebd7;
  height: 100px;
  align-content: center;
  margin-top: -60px;
  margin-bottom: -20px;
}

#title-magic{
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