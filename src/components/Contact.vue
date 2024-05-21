<template>
<!-- Page content-->
<section class="py-5">
    <div class="container px-5">
        <!-- Contact form-->
        <div class="bg-light rounded-4 py-5 px-4 px-md-5">
            <div class="text-center mb-5">
                <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                <h1 class="fw-bolder">Get in touch</h1>
                <p class="lead fw-normal text-muted mb-0">Let's work together!</p>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8 col-xl-6">
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- * * SB Forms Contact Form * *-->
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- This form is pre-integrated with SB Forms.-->
                    <!-- To make this form functional, sign up at-->
                    <!-- https://startbootstrap.com/solution/contact-forms-->
                    <!-- to get an API token!-->
                    <form @submit.prevent="handleSubmit" id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input required v-model="fullName" class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label for="name">Full name</label>
                            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <!-- Email address input-->
                        <div class="form-floating mb-3">
                            <input required v-model="email" class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label for="email">Email address</label>
                            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <!-- Phone number input-->
                        <div class="form-floating mb-3">
                            <input v-model="telegram" class="form-control" id="phone" type="url" placeholder="(123) 456-7890" data-sb-validations="required" />
                            <label for="phone">Telegram/Whatsapp</label>
                            <div class="invalid-feedback" data-sb-feedback="phone:required">A telegram/whatsapp url is required.</div>
                        </div>
                        <!-- Message input-->
                        <div class="form-floating mb-3">
                            <textarea required v-model="message" class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                            <label for="message">Message</label>
                            <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <!-- Submit success message-->
                        <!---->
                        <!-- This is what your users will see when the form-->
                        <!-- has successfully submitted-->
                        <Transition name="fade">
                            <div v-if="success" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder text-success">Thank you for reaching out 🚀</div>
                                </div>
                            </div>
                        </Transition>
                        <!-- Submit error message-->
                        <!---->
                        <!-- This is what your users will see when there is-->
                        <!-- an error submitting the form-->
                        <Transition name="fade">
                            <div v-if="error" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">{{error}}</div>
                            </div>
                        </Transition>
                        <!-- Submit Button-->
                        <div class="d-grid">
                            <button :disabled="isSubmitting" class="btn btn-primary btn-lg" id="submitButton" type="submit">
                                <div v-if="isSubmitting" class="spinner-grow" role="status">
                                </div>
                                <span v-else>
                                    Submit
                                </span>
                            </button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    PORTFIOLO_URL
} from "../assets/utils/api"

export default defineComponent({
    name: 'contact',
    data() {
        return ({
            isSubmitting: false,
            success: false,
            error: "",
            fullName: "",
            email: "",
            telegram: "",
            message: "",
        })
    },
    methods: {
        async handleSubmit() {
            this.isSubmitting = true
            this.success = false
            this.error = ""
            const data = {
                fullName: this.fullName,
                email: this.email,
                chatRoom: this.telegram,
                message: this.message
            }
            const body = JSON.stringify(data)
            const res = await fetch(
                PORTFIOLO_URL, {
                    headers: {
                        "Content-type": "application/json",
                    },
                    method: "POST",
                    body
                })

            if (!res.ok) {
                const result = await res.json()
                this.error = result
            } else {
                this.success = true
                setTimeout(() => {
                    this.fullName = ""
                    this.email = ""
                    this.telegram = ""
                    this.message = ""
                }, 200)
            }
            this.isSubmitting = false
        }
    }
})
</script>
