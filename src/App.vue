<template>
  <div id="app-layout">

    <HeaderComponent :current-page="activePage" @change-page="changePage" />
    <Home v-if="activePage === 'Home'" />
    <Shows v-if="activePage === 'Shows'" />
    <Profile v-if="activePage === 'Profile'" />
    <AddShow v-if="activePage === 'AddShow'" @submit-form="handleSubmit" />

    <section v-if="submittedShow" class="acknowledgement">
      <h2>Show Successfully Added</h2>

      <p><strong>Show:</strong> {{ submittedShow.showName }}</p>
      <p><strong>Date:</strong> {{ submittedShow.date }}</p>
      <p><strong>Theatre:</strong> {{ submittedShow.theatre }}</p>
      <p><strong>Section:</strong> {{ submittedShow.section }}</p>
      <p><strong>Row:</strong> {{ submittedShow.row }}</p>
      <p><strong>Seat:</strong> {{ submittedShow.seat }}</p>
      <p><strong>Rating:</strong> {{ submittedShow.rating }}/5</p>
      <p><strong>Review:</strong> {{ submittedShow.review }}</p>
    </section>

    <FooterComponent />

  </div>
</template>

<script setup>
import { ref } from 'vue'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

import Home from './components/Home.vue'
import Shows from './components/Shows.vue'
import Profile from './components/Profile.vue'
import AddShow from './components/AddShow.vue'

const submittedShow = ref(null)

function handleSubmit(show) {
  submittedShow.value = show
}


const activePage = ref('Home')

function changePage(page) {
  activePage.value = page
}
</script>

<style>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>