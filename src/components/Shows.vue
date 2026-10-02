<template>
    <main>

        <div class="my-shows">
            <figure class="show">
                <img :src="sImg" alt="SIX Playbill">
                <figcaption>Six <br> ⭐ ⭐ ⭐ ⭐</figcaption>
            </figure>
            <figure class="show">
                <img :src="wImg" alt="Wicked Playbill">
                <figcaption>Wicked <br> ⭐ ⭐ ⭐½</figcaption>
            </figure>

            <figure class="show">
                <img :src="hImg" alt="Hadestown Playbill">
                <figcaption>Hadestown <br> ⭐ ⭐ ⭐ ⭐ ⭐</figcaption>
            </figure>

            <figure class="show">
                <img :src="dehImg.jpg" alt="Dear Evan Hansen Playbill">
                <figcaption>Dear Evan Hansen <br> ⭐ ⭐ ⭐ ⭐</figcaption>
            </figure>

            <figure class="show">
                <img :src="cfaImg.jpg" alt="Come From Away Playbill">
                <figcaption>Come From Away <br> ⭐ ⭐ ⭐ ⭐½</figcaption>
            </figure>

            <figure class="show">
                <img :src="ajImg.jpg" alt="& Juliet Playbill">
                <figcaption>&amp; Juliet<br> ⭐ ⭐ ⭐ ⭐</figcaption>
            </figure>

        </div>
        <div class="show-info">
            <table border="1">
                <tr>
                    <th>Show</th>
                    <th>Date</th>
                    <th>Seat</th>
                    <th>Ranking</th>
                </tr>
                <tr>
                    <td>Six</td>
                    <td>21-08-2026</td>
                    <td>Stalls, B-24</td>
                    <td>⭐ ⭐ ⭐ ⭐ ⭐</td>
                </tr>
                <tr>
                    <td>Wicked</td>
                    <td>12-06-2026</td>
                    <td>Dress Circle, D-11</td>
                    <td>⭐ ⭐ ⭐½</td>
                </tr>
                <tr>
                    <td>Hadestown</td>
                    <td>01-05-2026</td>
                    <td>Stalls, A-1</td>
                    <td>⭐ ⭐ ⭐ ⭐ ⭐</td>
                </tr>
                <tr>
                    <td>Dear Evan Hansen</td>
                    <td>13-02-2026</td>
                    <td>Stalls, H-25</td>
                    <td>⭐ ⭐ ⭐ ⭐ ⭐</td>
                </tr>
                <tr>
                    <td>Come From Away</td>
                    <td>09-11-2025</td>
                    <td>Dress Circle, K-10</td>
                    <td>⭐ ⭐ ⭐ ⭐½</td>
                </tr>
                <tr>
                    <td>&amp; Juliet</td>
                    <td>6-10-2025</td>
                    <td>Stalls, R-25</td>
                    <td>⭐ ⭐ ⭐ ⭐</td>
                </tr>
            </table>
        </div>

    </main>
</template>

<script setup>
import sImg from '../assets/six.jpg'
import hImg from '../assets/hadestown.jpg'
import wImg from '../assets/wicked.jpg'
import cfaImg from '../assets/come-from-away.jpg'
import ajImg from '../assets/and-juliet.jpg'
import dehImg from '../assets/dear-evan-hansen.jpg'


</script>

<style scoped></style>