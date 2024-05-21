<template>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container px-5">
        <a class="navbar-brand" href="/"><span class="fw-bolder text-primary">Let's Build</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li class="nav-item"><a class="nav-link" href="#" @click="changeNavigation('Home')">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#resume" @click="changeNavigation('Resume')">Resume</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects" @click="changeNavigation('Projects')">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact" @click="changeNavigation('Contact')">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITProps, ITStore } from '../interface';


export default defineComponent({
  name: 'Home',
  props: {
    navigation: {
      type: String as PropType<ITProps['navigation']>,
      required: true,
    },
  },
  emits: ['change-navigation'],
  setup(_, { emit }) {
    const changeNavigation = (newNavigation: ITStore['navigation']) => {
      emit('change-navigation', newNavigation);
    };

    return { changeNavigation };
  },
});
</script>