<template>
  
  <div class="onfarm-container">
    <h1 class="onfarm-title"><span class="highlight">ON</span>FARM</h1>
    <p class="onfarm-subtitle">Pasión por los animales, dedicación en cada detalle.</p>
    <div class="animal-images">
      <img src="@/assets/img/OnfarmAnimals.png" alt="Animal" class="animal-image" />
    </div>
    <button @click="homeCreate">Home create</button>
  </div>

<!--   <div v-if="currentComponent === 'HomeCreate'">
    <HomeCreate />
  </div> -->
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const homeCreate = () => {
  router.push({ name: 'homeCreate' })
}

</script>

<style lang="scss" scoped>
.onfarm-container {
  border-radius: 5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 50px;
  font-family: 'Arial', sans-serif;
}

.onfarm-title {
  font-size: 5rem;
  font-weight: bold;
  color: #041e50;
}

.highlight {
  color: #f61b3f; 
}

.onfarm-subtitle {
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #041e50;
}

.animal-images {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  padding-top: 4rem;
  padding-bottom: 2rem;
  .img {
    width: 100vw;
    height: 50vh;
  }
}

.start-button {
  background-color: #f61b3f;
  color: white;
  font-size: 1.2em;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.start-button:hover {
  background-color: #a30621;
}
</style>
