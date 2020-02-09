import {CREATE_COURSE, LOAD_COURSES_SUCCESS} from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

export function loadCourses() {
  return (dispatch) => {
    return courseApi.getCourses().then(courses => {
      dispatch({ type: LOAD_COURSES_SUCCESS, courses });
    }).catch(error => {
      throw error;
    });
  };
}

