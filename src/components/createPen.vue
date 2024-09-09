<template>
  <div class="onfarm-container">
    <p class="onfarm-title"><span class="highlight">ON</span>FARM</p>

    <div class="container-animals">
      <img src="@/assets/img/sheeo_farm.png" alt="sheep">
      <button class="button-id">Consulta id</button>
      <img src="@/assets/img/cow_farm.png" alt="cow">
    </div>

    <div class="form-container">
      <div class="form-group">
        <h2>Crear Corral</h2>
        <form @submit.prevent="submitCreateCorral">
          <div class="form-field">
            <label for="corral-name">Nombre del Corral:</label>
            <input 
              type="text" 
              id="corral-name" 
              v-model="corralName" 
              placeholder="Nombre del Corral" 
              required
            />
          </div>
          <div class="form-field">
            <label for="corral-capacity">Capacidad del Corral:</label>
            <input 
              type="number" 
              id="corral-capacity" 
              v-model="corralCapacity" 
              placeholder="Capacidad" 
              required
            />
          </div>
          <button type="submit">Crear Corral</button>
        </form>
      </div>

      <div class="form-group">
        <h2>Agregar Animal al Corral</h2>
        <form @submit.prevent="submitAddAnimal">
          <div class="form-field">
            <label for="corral-id">Nombre del Corral:</label>
            <input 
              type="text" 
              id="corral-id" 
              v-model="corralId" 
              placeholder="Nombre del Corral" 
              required
            />
          </div>
          <div class="form-field">
            <label for="animal-id">ID del Animal:</label>
            <input 
              type="number" 
              id="animal-id" 
              v-model="animalId" 
              placeholder="ID del Animal" 
              required
            />
          </div>
          <button type="submit">Agregar Animal</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      corralName: '',
      corralCapacity: '',
      corralId: '',
      animalId: ''
    };
  },
  methods: {

    async submitCreateCorral() {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/pen/create', {
          name: this.corralName,
          capacity: this.corralCapacity
        });
        console.log('Corral creado:', response.data);
        this.corralName = '';
        this.corralCapacity = '';
      } catch (error) {
        console.error('Error al crear el corral:', error);
      }
    },

    async submitAddAnimal() {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/pen/add-animal', {
          penName: this.corralId,
          animalId: this.animalId
        });
        console.log('Animal agregado al corral:', response.data);
        this.corralId = '';
        this.animalId = '';
      } catch (error) {
        console.error('Error al agregar el animal al corral:', error);
      }
    }
  }
};
</script>

<style scoped>
.onfarm-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 80vw;
  height: 100%;
}

.container-animals{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.form-container{
  display: flex;
  flex-direction: row;
  padding: 5rem;
  gap: 5rem;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.5%;
}

.onfarm-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #041e50;
  margin: 0;
  padding: 30px;
}

.highlight {
  color: #f61b3f;
}

.form-group {
  border: 1px solid #F1F1F1;
  background-color:#F1F1F1 ;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;

}

.form-field {
  display: flex;
  flex-basis: column;
  border: 1px solid #F1F1F1;
  background-color:#F1F1F1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5rem;
  border: none;
  background-color: #f61b3f;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #740d1e;
}

.button-id{
  border-radius: 50%;
  width: 60%;
  height: 40%;
  font-size: 1.2rem;
}

@media (max-width: 1200px) {
  .form-container {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
  }

  .container-animals {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .onfarm-title {
    font-size: 2.5rem;
    padding: 20px;
  }

  .form-group {
    padding: 0.5rem;
  }

  .container-animals {
    gap: 1.5rem;
  }

  .form-field {
    padding: 0.75rem;
  }

  input {
    padding: 0.4rem;
  }

  button {
    padding: 0.4rem;
    font-size: 1rem;
  }

  .button-id {
    width: 80%;
    height: 50%;
    font-size: 1rem;
    border-radius: 10px;
  }
}

@media (min-width: 400px) {

  .onfarm-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    height: 100%;
    width: auto;
  }

  .onfarm-title {
    font-size: 2rem;
  }

  .container-animals {
    gap: 1rem;
  }

  .form-container {
    padding: 1rem;
  }

  .form-field {
    padding: 0.5rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.3rem;
  }

  .button-id {
    width: 100%;
    height: auto;
    font-size: 0.9rem;
  }
}

</style>