<template>
    <h1>Theatr Trackr</h1>
    <h2>{{ props.currentPage }}</h2>

    <nav>
        <button @click="$emit('change-page', 'Home')">Home</button>
        <button @click="$emit('change-page', 'Shows')">Shows</button>
        <button @click="$emit('change-page', 'AddShow')">Add Show</button>
        <button @click="$emit('change-page', 'Profile')">Profile</button>
    </nav>

</template>

<script setup>
const props = defineProps({
  currentPage: String
})
</script>

<style scoped></style>