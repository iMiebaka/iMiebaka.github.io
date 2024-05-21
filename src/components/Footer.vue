<template>
<!-- Footer-->
<footer class="bg-white py-4 mt-auto">
    <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto">
                <div class="small m-0">Copyright &copy; M3 District 2019 - {{new Date().getFullYear()}}</div>
            </div>
            <div class="col-auto">
                <!-- <a class="small" href="#!">Privacy</a>
                  <a class="small" href="#!">Terms</a>
                  <span class="mx-1">&middot;</span> -->
                <a class="small" href="#contact" @click="changeNavigation('Terms')">Terms</a>
                <span class="mx-1">&middot;</span>
                <a class="small" href="#contact" @click="changeNavigation('Contact')">Contact</a>
            </div>
        </div>
    </div>
</footer>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue';
import {
    ITProps,
    ITStore
} from '../interface';

export default defineComponent({
    name: 'Footer',
    props: {
        navigation: {
            type: String as PropType < ITProps['navigation'] > ,
            required: true,
        },
    },
    emits: ['change-navigation'],
    setup(_, {
        emit
    }) {
        const changeNavigation = (newNavigation: ITStore['navigation']) => {
            emit('change-navigation', newNavigation);
        };

        return {
            changeNavigation
        };
    },
});
</script>
