import { reactive } from "vue";
import { ITStore } from "../interface";


export const store = reactive < ITStore > ({
    navigation: "Home"
})