import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        courses: [],
        courseLoaded: null,
    },
    getters: {
        coursesCards(state) {
            return courses;
        }
    },
    mutations: {

    },
    actions: {
        async getCourse({ state }) {
            const db = await ab.collection("courses").orderBy("date", "desc");
            const dbResults = await db.get();
            dbResults.forEach((doc) => {

            })
        }
    }
})