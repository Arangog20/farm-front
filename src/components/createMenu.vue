<template>
  <div class="app">
    <div class="menu">
      <button @click="showComponent('instructions')">Instrucciones</button>
      <button @click="showComponent('createPen')">Crear Corral</button>
      <button @click="showComponent('createSpecies')">Crear Especie</button>
      <button @click="showComponent('createAnimal')">Crear Animal</button>
    </div>

    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Importar los componentes que se mostrarán
import InstructionsCreate from '@/components/InstructionsCreate.vue'
import CreatePen from '@/components/createPen.vue'
import CreateSpecies from '@/components/creaeType.vue'
import CreateAnimal from '@/components/createAnimal.vue'

const currentComponent = ref(InstructionsCreate) 

const showComponent = (component) => {
  switch (component) {
    case 'instructions':
      currentComponent.value = InstructionsCreate
      break
    case 'createPen':
      currentComponent.value = CreatePen
      break
    case 'createSpecies':
      currentComponent.value = CreateSpecies
      break
    case 'createAnimal':
      currentComponent.value = CreateAnimal
      break
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

.menu {
  width: 20%;
  background-color: #041E50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.menu button {
  background-color: #041E50;
  color: white;
  border: none;
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  text-align: center;
}

.menu button:hover {
  background-color: #F61B3F;
}

.content {
  flex: 1;
  max-width: 80%;
  padding: 20px;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }

  .menu {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }

  .menu button {
    margin: 0;
    padding: 10px 20px;
    flex: 1;
  }

  .content {
    max-width: 100%;
    padding: 10px;
  }
}
</style>