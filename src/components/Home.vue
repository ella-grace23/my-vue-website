<template>
    <main>
<div class="row">
            <div class="column side left">
                <h2>Upcoming shows in your city</h2>
                <div class="shows">
                    <figure class="show">
                        <img :src="sImg" alt="SIX Playbill">
                        <figcaption>Six</figcaption>
                    </figure>
                    <figure class="show">
                        <img :src="pwImg" alt="Pretty Woman Playbill">
                        <figcaption>Pretty Woman</figcaption>
                    </figure>
                    <figure class="show">
                        <img :src="abnImg" alt="A Beautiful Noise: THe Neil Diamond Show Playbill">
                        <figcaption>A Beautiful Noise: THe Neil Diamond Show</figcaption>
                    </figure>
                    <figure class="show">
                        <img :src="fotrImg" alt="Fiddler on the Roof Playbill">
                        <figcaption>Fiddler on the Roof</figcaption>
                    </figure>
                    <figure class="show">
                        <img :src="mdImg.jpg" alt="Mrs Doubtfire Playbill">
                        <figcaption>Mrs Doubtfire</figcaption>
                    </figure>
                </div>
            </div>
            <div class="column middle">
                <h2>About Us</h2>
                <p>
                    Theatr Trackr is your one stop app designed to keep the shows you see organised and all in one
                    place! With its easy to use interface, you can add and rate shows that you have seen, compile the
                    statistics for your yearly visits to the theatre, as well as create a wishlist with all the shows
                    you are dying to see. It is an avid theatre lovers dream and we thank you for using our platform!
                </p>
            </div>
            <div class="column side right">
                <h2>FAQs</h2>
                <dl>
                    <dt>How do I add a show?</dt>
                    <dd>To add a show, go to the shows page and click on the plus sign in the top right corner, or at
                        the start of the shows list. You can also add a show by ticking off a show in your wishlist.
                    </dd>
                    <dt> Can I rate with half stars?</dt>
                    <dd>Yes! Half stars are an option within Theatr Trackr for rating your shows.</dd>
                    <dt>Do I have to wait till the end of the year to see my statistics?</dt>
                    <dd>Nope! Your statistics are always accessible through the 'Statistics' page in your navigation
                        bar.</dd>
                </dl>

            </div>
        </div>
    </main>

</template>

<script setup>

import pwImg from '../assets/pretty-woman.jpg'
import abnImg from '../assets/a-beautiful-noise.jpg'
import sImg from '../assets/six.jpg'
import fotrImg from '../assets/fiddler-on-the-roof.jpg'
import mdImg from '../assets/mrs-douvtfire.jpg'


</script>

<style scoped></style>