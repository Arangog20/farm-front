<template>
  <div class="onfarm-container">
    <h1 class="onfarm-title"><span class="highlight">ON</span>FARM</h1>
    <div class="containes-cow">
      <div class="steps">
        <h4>Pasos</h4>
        <ul>
          <li>1. Crea la especie, con tipo de animal y restricciones de convivencia.</li>
          <li>2. Crea el corral donde habitara cada animal, recuerda colocarle la capacidad.</li>
          <li>3. Crea un animal, no olvides colocarle la especie, nombre y edad.</li>
          <li>4. Por ultimo agrega el animal al corral.</li>
        </ul>
      </div>

      <div class="cow-container">
        <img src="@/assets/img/cow_farm.png" alt="cow" />
      </div>
    </div>
    <div class="button-container">
      <button>Especies</button>
      <button>Animales</button>
      <button>Corrales</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onfarm-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 80vw;
  height: 80vh;
  padding: 2rem;
  
  @media (max-width: 768px) {
    width: 95vw;
    height: auto;
    padding: 1rem;
  }
}

.onfarm-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #041e50;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
}

.highlight {
  color: #f61b3f;
}

.containes-cow {
  display: flex;
  flex-direction: row;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
}

.steps {
  background-color: rgb(236, 236, 236);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 2.5%;
  
  h4 {
    color: #f61b3f;
    font-weight: bold;
  }
  
  ul {
    color: #041e50;
    list-style: none;
  }

  @media (max-width: 768px) {
    padding: 2%;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1%;
    border-radius: 10px;
  }
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  width: 80%;

  @media (max-width: 768px) {
    gap: 5rem;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    flex-direction: column;
    width: 100%;
  }
}

.button-container button {
  background-color: #f61b3f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }
}

.button-container button:hover {
  background-color: darkred;
}
</style>
