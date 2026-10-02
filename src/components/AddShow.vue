<template>
    <main class="page">
        <h2> Add Show</h2>
        <section class="card">
            <section class="form">
                <form @submit.prevent="submitForm">
                    <fieldset>
                        <div class="main-info">
                            <legend> Show Info</legend>
                            <div class="field">
                                <label for="showname">Show Name</label>
                                <input type="text" id="showname" v-model="form.showName" />
                                <span v-if="errors.showName">{{ errors.showName }} </span>
                            </div>
                            <div class="field">
                                <label for="date">Date</label>
                                <input type="date" id="date" v-model="form.date" />
                                <span v-if="errors.date">{{ errors.date }}</span>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>

                        <div class="seat-info">
                            <legend> My Seat</legend>
                            <select v-model="form.theatre">
                                <option value="">Select Theatre</option>
                                <option v-for="theatre in theatres" :key="theatre" :value="theatre"> {{ theatre }}
                                </option>
                            </select>
                            <span v-if="errors.theatre">{{ errors.theatre }}</span>

                            <div class="radio-pick">
                                <label><input type="radio" name="section" value="stalls" v-model="form.section">
                                    Stalls</label>
                                <label><input type="radio" name="section" value="dress-circle" v-model="form.section">
                                    Dress circle</label>
                                <label><input type="radio" name="section" value="grand-circle" v-model="form.section">
                                    Grand circle</label>
                            </div>
                            <span v-if="errors.section">{{ errors.section }}</span>

                            <div class="field">
                                <label for="row">Row</label>
                                <input type="text" id="row" name="row" v-model="form.row">
                                <span v-if="errors.row">{{ errors.row }}</span>
                            </div>
                            <div class="field">
                                <label for="seat">Seat</label>
                                <input type="text" id="seat" name="seat" v-model.number="form.seat">
                                <span v-if="errors.seat">{{ errors.seat }}</span>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="rating">
                            <legend>Rating</legend>
                            <div class="radio-pick">
                                <label><input type="radio" name="rate" value="1" v-model="form.rating">1</label>
                                <label><input type="radio" name="rate" value="2" v-model="form.rating">2</label>
                                <label><input type="radio" name="rate" value="3" v-model="form.rating">3</label>
                                <label><input type="radio" name="rate" value="4" v-model="form.rating">4</label>
                                <label><input type="radio" name="rate" value="5" v-model="form.rating">5</label>
                            </div>
                            <span v-if="errors.rating">{{ errors.rating }}</span>


                            <div class="field">
                                <label for="review">Review</label>
                                <textarea id="review" name="review" rows="5" v-model="form.review"></textarea>
                                <span v-if="errors.review">{{ errors.review }}</span>
                                <span class="reviewcount">{{ reviewCount }}/1000 characters</span>
                            </div>

                            <div class="favourite">
                                <label><input type="checkbox" v-model="form.favourite">Favourite Show</label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="actions">
                        <button class="primary" type="submit">Submit</button>
                        <button class="secondary" type="button" @click="resetForm">Reset</button>
                    </div>
                </form>
            </section>
        </section>
    </main>
</template>

<script setup>

import { ref, computed } from 'vue';


const emit = defineEmits(['submit-form'])

const form = ref({
    showName: '',
    seat: null,
    row: '',
    date: '',
    section: '',
    rating: '',
    review: '',
    theatre: '',
    favourite: false
})

const errors = ref({})
const successMessage = ref(false)

const theatres = [
    'Regent',
    'Princess',
    'Her Majesty\'s',
    'Comedy',
    'Other'
]

const reviewCount = computed(() => form.value.review.length)
const today = new Date()


function validateForm() {

    errors.value = {}

    if (!form.value.showName) {
        errors.value.showName = "Enter show name"
    }

    if (!form.value.date) {
        errors.value.date = "Select a date"
    } else {
        const selectedDate = new Date(form.value.date)
        const today = new Date()


        if (selectedDate > today) {
            errors.value.date = "Date must have already passed"
        }
    }

    if (!form.value.theatre) {
        errors.value.theatre = "Select theatre"
    }

    if (!form.value.section) {
        errors.value.section = "Select section"
    }

    if (!form.value.row) {
        errors.value.row = "Enter row"
    } else if (!/^[A-Za-z]$/.test(form.value.row)) {
        errors.value.row = "Enter row (e.g. A-Z)"
    }

    if (!form.value.seat) {
        errors.value.seat = "Enter seat"
    } else if (!/^\d+$/.test(form.value.seat)) {
        errors.value.seat = "Enter seat (must be numerical)"
    }

    if (!form.value.rating) {
        errors.value.rating = "Select rating"
    }

    if (form.value.review.length > 1000) {
        errors.value.review = "Maximum characters exceeded"
    }

    return Object.keys(errors.value).length === 0
}

function submitForm() {

    if (!validateForm()) return

    emit('submit-form', { ...form.value })

    successMessage.value = true

    setTimeout(() => { resetForm() }, 2000)

}

function resetForm() {

    form.value = {
        showName: '',
        seat: null,
        row: '',
        date: '',
        section: '',
        rating: '',
        review: '',
        theatre: '',
        favourite: false
    }

    errors.value = {}
    successMessage.value = false
}

</script>

<style scoped>
span {
    color: red;
}

.reviewcount {
    color: black
}

.favourite {
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.favourite label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.favourite input {
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer
}
</style>