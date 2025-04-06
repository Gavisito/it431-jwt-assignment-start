import { getCoursesRoute } from './getCourses';
import { getCourseRoute } from './getCourseRoute';
import { postCourseRoute } from './postCourseRoute';
import { deleteCourseRoute } from './deleteCourseRoute';
import { putCourseRoute } from './putCourseRoute';
import { loginRoute } from './loginRoute';
import { signUpRoute } from './signUpRoute';
import { getUsersRoute } from './getUsersRoute';


export const routes = [
    getCoursesRoute,
    getCourseRoute,
    postCourseRoute,
    deleteCourseRoute,
    putCourseRoute,
    //TODO: 3. Uncomment the following lines to enable add login and signup routes
    loginRoute,
    signUpRoute,
    getUsersRoute
];
