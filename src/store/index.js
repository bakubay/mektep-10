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
    query,
    doc,
    getDoc
} from "firebase/firestore";

const store = createStore({
    state() {
        return {
            courses: [],
            showMobileMenu: false
        }
    },
    getters: {
        getCourses: (state) => {
            let sortedCourses = state.courses;
            sortedCourses = sortedCourses.sort((a, b) => {
                var a_id = a.courseName.toLowerCase();
                var b_id = b.courseName.toLowerCase();
                if (a_id < b_id) {
                    return -1
                }
                if (a_id > b_id) {
                    return 1
                }
                return 0
            })
            return sortedCourses;
        },
        getCourseById: (state) => (id) => {
            return state.courses.find(course => course.courseId === id);
        }
    },
    mutations: {
        ADD_COURSE(state, course) {
            state.courses.push(course);
         },
        SET_COURSE_SECTIONS(state, payload) {
            let courseIndex = state.courses.findIndex(el => el.courseId == payload.courseId);
            state.courses[courseIndex].courseSections = payload.sections
        },
        SET_CURRENT_COURSE(state, course){
            state.currentCourse = course;
        },
        toggleMobileMenu(state){
            state.showMobileMenu = !state.showMobileMenu
        }
    },
    actions: {
        async pullCourses({
            state,
            commit
        }) {
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
                        courseSections: []
                    }
                    commit('ADD_COURSE', course)
                }
            });
            this.state.courseLoaded = true;
        },
        async pullCourseSections({ commit, dispatch, getters }, courseId) {
            const firestoreSections = []
            const sectionsRef = collection(db, "courses", courseId, "sections");
            return new Promise((resolve) => {
                getDocs(sectionsRef).then((docs) => {
                    docs.forEach((doc) => {
                        const section = doc.data()
                        firestoreSections.push(section)
                    })
                    if(!getters.getCourseById(courseId)){
                        dispatch('pullCourse', courseId)
                    }
                    commit('SET_COURSE_SECTIONS', {courseId: courseId, sections: firestoreSections})
                    resolve(firestoreSections)
                })
            });
        },
        async pullCourse({ commit }, courseId) {
            console.log(courseId);
            const courseRef = doc(db, "courses", courseId);
            const courseSnap = await getDoc(courseRef);
            if (courseSnap.exists()) {
                const course = {
                    courseId: courseSnap.id,
                    courseCategory: courseSnap.data().courseCategory,
                    courseDescription: courseSnap.data().courseDescription,
                    courseImageUrl: courseSnap.data().courseImageUrl,
                    courseName: courseSnap.data().courseName,
                    courseSections: [],
                }
                commit('ADD_COURSE', course)
            } else {
                console.log('Could not find course');
            }
        }
    }
})

export default store;