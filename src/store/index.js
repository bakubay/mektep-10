import {createStore} from "vuex";
import {getAuth} from "firebase/auth";
import {db} from "../firebase";
import {
    collection,
    getDocs,
    orderBy,
    query,
    doc,
    getDoc
} from "firebase/firestore";

const COURSES_COLLECTION = process.env.VUE_APP_COURSES_COLLECTION

const store = createStore({
    state() {
        return {
            courses: [],
            showMobileMenu: false,
            user: null,
            profileEmail: null,
            profileLastName: null,
            profileFirstName: null,
            profileId: null,
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
        UPDATE_USER(state, payload) {
            state.user = payload
        },
        SET_COURSE_SECTIONS(state, payload) {
            let courseIndex = state.courses.findIndex(el => el.courseId == payload.courseId);
            state.courses[courseIndex].courseSections = payload.sections
        },
        SET_CURRENT_COURSE(state, course){
            state.currentCourse = course;
        },
        SET_PROFILE_INFO(state, user){
            state.profileId = user.id;
            state.profileEmail = user.data().email;
            state.profileFirstName = user.data().firstName;
            state.profileLastName = user.data().lastname;
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
            const coursesRef = collection(db, COURSES_COLLECTION);
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
                        courseAuthor: doc.data().courseAuthor,
                        createdAt: doc.data().createdAt,
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
                    commit('SET_COURSE_SECTIONS', {courseId: courseId, sections: firestoreSections.sort((a,b) => a.index - b.index)})
                    resolve(firestoreSections)
                })
            });
        },
        async pullCourse({ commit }, courseId) {
            const courseRef = doc(db, COURSES_COLLECTION, courseId);
            const courseSnap = await getDoc(courseRef);
            if (courseSnap.exists()) {
                const course = {
                    courseId: courseSnap.id,
                    courseCategory: courseSnap.data().courseCategory,
                    courseDescription: courseSnap.data().courseDescription,
                    courseImageUrl: courseSnap.data().courseImageUrl,
                    courseName: courseSnap.data().courseName,
                    courseAuthor: courseSnap.data().courseAuthor,
                    createdAt: courseSnap.data().createdAt,
                    courseSections: [],
                }
                commit('ADD_COURSE', course)
            } else {
                console.log('Could not find course');
            }
        },
        async getCurrentUser({commit}) {
            const uid = getAuth().currentUser.uid;
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            commit('SET_PROFILE_INFO', userSnap);
            console.log("UserSnap: ");
            console.log(userSnap.data());
        }
    }
})

export default store;