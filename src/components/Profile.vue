<template>
    <main>
        <div class="basic-info">
            <h2>Ella King</h2>
            <p> <em>I am a theatre lover based in Melbourne who loves seeing all the different shows (and some of the
                    same!) </em>
            </p>
        </div>

        <h2>Statistics</h2>
        <div class="profile-stats">
            <div class="stat">
                <h3>Shows Seen</h3>
                <p>32</p>
            </div>
            <div class="stat">
                <h3>Average Rating</h3>
                <p>4.2</p>
            </div>
            <div class="stat">
                <h3>Highest Attended Year</h3>
                <p>2024</p>
            </div>
            <div class="stat">
                <h3>Shows on Wishlist</h3>
                <p>7</p>
            </div>
        </div>

        <h2>Favourite Shows</h2>
        <div class="fav-shows">

            <figure class="show">
                <img :src="hImg" alt="Hadestown Playbill">
                <figcaption>1. Hadestown </figcaption>
            </figure>
            <figure class="show">
                <img :src="cfaImg" alt="Come From Away Playbill">
                <figcaption>2. Come From Away</figcaption>
            </figure>
            <figure class="show">
                <img !src="ajImg" alt="and julietPlaybill">
                <figcaption>3. &amp; Juliet</figcaption>
            </figure>
        </div>
    </main>
</template>

<script setup>
import hImg from '../assets/hadestown.jpg'
import cfaImg from '../assets/come-from-away.jpg'
import ajImg from '../assets/and-juliet.jpg'

</script>

<style scoped></style>