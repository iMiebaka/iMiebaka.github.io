<template>
<div class="d-flex flex-column h-100">
    <main class="flex-shrink-0">
        <NavBarVue :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Home v-if="store.navigation == 'Home'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Resume v-if="store.navigation == 'Resume'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Projects v-if="store.navigation == 'Projects'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Contact v-if="store.navigation == 'Contact'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Contact v-if="store.navigation == 'Contact'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <TermsOfService v-if="store.navigation == 'Terms'" :navigation="store.navigation" @change-navigation="changeNavigation" />
        <Footer :navigation="store.navigation" @change-navigation="changeNavigation" />
    </main>
</div>
</template>

<script lang="ts">
import Home from './components/Home.vue';
import Footer from "./components/Footer.vue"
import NavBarVue from './components/NavBar.vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import TermsOfService from './components/TermsOfService.vue';
import {
    defineComponent,
} from 'vue'
import {
    store
} from './store';
import {
    ITStore
} from './interface';

export default defineComponent({
    components: {
        Home,
        Footer,
        NavBarVue,
        Projects,
        Resume,
        TermsOfService,
        Contact
    },
    data() {
        return {
            store,
            open: false
        }
    },
    methods: {
        changeNavigation(value: ITStore['navigation']) {
            store.navigation = value
        }
    }
})
</script>
