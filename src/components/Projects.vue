<script setup lang="ts">

</script>

<template>
<main class="flex-shrink-0">
    <!-- Projects Section-->
    <section class="py-5">
        <div class="container px-5 mb-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    <!-- Project Card 1-->
                    <div v-for="(item, index) in projects" :key="index" class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center">
                                <div class="p-5">
                                    <h2 class="fw-bolder">{{item.projectName}}</h2>
                                    <p>{{item.details.body}}</p>
                                </div>
                                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                                    <!-- <img class="img-fluid cover-image" width="300" height="400" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." /> -->
                                    <img class="img-fluid cover-image" :src="item.cover_image" alt="..." />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Call to action section-->
    <section class="py-5 bg-gradient-primary-to-secondary text-white">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="#contact" @click="changeNavigation('Contact')">Contact me</a>
            </div>
        </div>
    </section>
</main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITProps, ITStore } from '../interface';
import projects from '../assets/utils/projects';

export default defineComponent({
    name: 'Projects',
    data(){
        return(
            {
                projects

            }
        )  
  },
  props: {
    navigation: {
      type: String as PropType<ITProps['navigation']>,
      required: true,
    },
  },
  methods: {
      changeNavigation(newNavigation: ITStore['navigation']){
        this.$emit('change-navigation', newNavigation);
      }
  },

});
</script>


<style scoped>
.cover-image{
    object-fit: contain;
}
</style>