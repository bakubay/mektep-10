import {
    createStore
} from "vuex";
import "firebase/auth";
import {
    db
} from "../firebase";
import {
    collection,
    getDocs,
    orderBy,
    query
} from "firebase/firestore";

const store = createStore({
    state() {
        return {
            courses: [],
            currentSections: [],
            courseLoaded: null,
        }
    },
    getters: {
        getCourseById: (state) => (id) => {
            return state.courses.find(course => course.courseId === id)
        }
    },
    mutations: {

    },
    actions: {
        async pullCourses({state}) {
            const coursesRef = collection(db, "courses");
            const q = query(coursesRef, orderBy('courseName', 'desc'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if (!state.courses.some((course) => course.courseId === doc.id)) {
                    const course = {
                        courseId: doc.id,
                        courseCategory: doc.data().courseCategory,
                        courseDescription: doc.data().courseDescription,
                        courseImageUrl: doc.data().courseImageUrl,
                        courseName: doc.data().courseName,
                    }
                    state.courses.push(course)
                }
            });
            this.state.courseLoaded = true;
        },
        async pullCourseSections({ state }, courseId){ 
            const firestoreSections = []
            const sectionsRef = collection(db, "courses", courseId, "sections");
            const querySnapshot = await getDocs(sectionsRef);
            querySnapshot.forEach((doc) => {
                const section = doc.data()
                firestoreSections.push(section)
            });
            state.currentSections = firestoreSections
        }
    }
})

export default store;