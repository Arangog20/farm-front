<template>
    <div class="onfarm-container">
      <h1>ONFARM</h1>
      <div class="form-container">
        <div class="form-box">
          <h2>Crear animal</h2>
          <form @submit.prevent="createAnimal">
            <label>a. Nombre del Animal</label>
            <input type="text" v-model="newAnimal.name" placeholder="raúl" />
  
            <label>b. Tipo de animal</label>
            <input type="text" v-model="newAnimal.type" placeholder="conejo" />
  
            <label>c. Edad del Animal</label>
            <input type="number" v-model="newAnimal.age" placeholder="23" />
  
            <button type="submit">Enviar</button>
          </form>
        </div>
  
        <div class="form-box">
          <h2>Editar Animal</h2>
          <form @submit.prevent="editAnimal">
            <label>Digite Id del Animal</label>
            <input type="text" v-model="editAnimalData.id" placeholder="a5d5fd6s6" />
  
            <label>a. Nombre del Animal</label>
            <input type="text" v-model="editAnimalData.name" placeholder="raúl" />
  
            <label>b. Tipo de animal</label>
            <input type="text" v-model="editAnimalData.type" placeholder="vaca" />
  
            <label>c. Edad del Animal</label>
            <input type="number" v-model="editAnimalData.age" placeholder="15" />
  
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
  
      <div class="button-container">
        <button class="view-animals-button">Ver animales</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAnimal: {
          name: '',
          type: '',
          age: null,
        },
        editAnimalData: {
          id: '',
          name: '',
          type: '',
          age: null,
        },
      };
    },
    methods: {
      createAnimal() {
        alert(`Animal creado: ${this.newAnimal.name}, Tipo: ${this.newAnimal.type}, Edad: ${this.newAnimal.age}`);
      },
      editAnimal() {
        alert(`Animal editado: ${this.editAnimalData.name}, Tipo: ${this.editAnimalData.type}, Edad: ${this.editAnimalData.age}`);
      },
    },
  };
  </script>

<style lang="scss" scoped>
.onfarm-container {
  text-align: center;
  font-family: Arial, sans-serif;
  background-image: url('@/assets/img/fish_farm.png');
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80vw;
  height: 100%;

  h1 {
    color: #f61b3f;
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .form-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;

    .form-box {
      background-color: #f8f9fa;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 40%;

      h2 {
        color: #d32f2f;
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      label {
        display: block;
        margin-top: 10px;
        font-size: 0.9rem;
        color: #333;
      }

      input {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-right: 20px;
        font-size: 1rem;
      }

      button {
        background-color: #0d47a1;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          background-color: #083375;
        }
      }
    }
  }

  .button-container {
    margin-bottom: 20px;

    .view-animals-button {
      background-color: #d32f2f;
      color: white;
      padding: 10px 20px;
      border-radius: 50%;
      font-size: 1.2rem;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #b71c1c;
      }
    }
  }

  /* Media Queries for responsiveness */

  /* Para pantallas medianas, como tablets */
  @media (max-width: 1024px) {
    .form-container {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .form-box {
        width: 80%;
      }
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  /* Para pantallas pequeñas, como móviles */
  @media (max-width: 768px) {
    .form-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10px;

      .form-box {
        width: 100%;
        padding: 15px;
      }

      input {
        width: 100%;
        margin-right: 0;
      }

      button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
      }
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;

      .view-animals-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        border-radius: 5px;
      }
    }

    h1 {
      font-size: 2rem;
    }
  }

  /* Para pantallas extra pequeñas, como móviles pequeños */
  @media (max-width: 480px) {
    .form-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 5px;

      .form-box {
        width: 100%;
        padding: 10px;
      }

      input {
        width: 100%;
        font-size: 0.9rem;
      }

      button {
        width: 100%;
        font-size: 0.9rem;
        padding: 10px;
      }
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .view-animals-button {
        width: 100%;
        font-size: 0.9rem;
        padding: 10px;
      }
    }

    h1 {
      font-size: 1.8rem;
    }
  }
}
</style>

