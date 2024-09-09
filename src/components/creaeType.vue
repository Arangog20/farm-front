
<template>
  <div class="onfarm-container">
    <p class="onfarm-title"><span class="highlight">ON</span>FARM</p>
    <div class="create-specie">
      <h2>Crear especie</h2>
      <p>1. Crea la especie, con tipo de animal y restricciones de convivencia.</p>
      <p>a. Elige tipo de animal (la lista de los tipos de animales permitidos se encuentran en la parte inferior de la página)</p>
      <input type="text" placeholder="Vaca" v-model="animal" />
      
      <p>b. Elige con cual de los animales de la lista el animal ingresado anteriormente NO puede convivir en un mismo corral</p>
      <input type="text" placeholder="pato,gallina" v-model="restrictions" />
      
      <button @click="submitForm">Enviar</button>
    </div>
    
    <div class="animal-list">
      <button v-for="animal in animals" :key="animal" @click="selectAnimal(animal)" :class="{'selected': selectedAnimal === animal}">
        {{ animal }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animal: '',
      restrictions: '',
      selectedAnimal: null,
      animals: ['Caballo', 'Toro', 'Vaca', 'Cabra', 'Gallina', 'Ganso', 'Burro', 'Cerdo', 'Oveja', 'Llama', 'Pato', 'Conejo']
    };
  },
  methods: {
    selectAnimal(animal) {
      this.selectedAnimal = animal;
      this.animal = animal;
    },
    async submitForm() {
      try {
        if (!this.animal || !this.restrictions) {
          alert('Por favor, completa todos los campos');
          return;
        }

        const response = await axios.post('http://localhost:3000/api/v1/restrictions/create', {
          type: this.animal,
          restrictions: this.restrictions.split(',')
        });

        alert(`Especie creada: ${response.data.type}, Restricciones: ${response.data.restrictions.join(', ')}`);

        this.animal = '';
        this.restrictions = '';
        this.selectedAnimal = null;
      } catch (error) {
        console.error('Error al crear la especie:', error);
        alert('Hubo un error al crear la especie.');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.onfarm-container{
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-family: 'Arial', sans-serif;
width: 80vw;
height: 100%;


h1 {
  color: #f61b3f;
  font-size: 3rem;
  margin-bottom: 20px;
  
  
}

.create-specie {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  width: 80%;
  margin: 0 auto;
  

  h2 {
    color: #f61b3f;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 10px;
    
  }

  input {
    width: 70%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  button {
    background-color: #041e50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    width: 6rem;
    

    &:hover {
      background-color: #083375;
    }
  }
}

.onfarm-title {
font-size: 3.5rem;
font-weight: bold;
color: #041e50;
margin: 0;
padding: 30px;
text-align: center;
}

.highlight {
color: #f61b3f;
}

.animal-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 5rem;

  button {
    background-color: #f61b3f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 10rem;

    &.selected {
      background-color: #041e50;
    }

    &:hover {
      background-color: #b71c1c;
    }
  }
}


}
</style>