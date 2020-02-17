import {LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS} from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return { type: CREATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  return (dispatch) => {
    return courseApi.saveCourse(course).then(savedCourse => {
      const type = course.id ? UPDATE_COURSE_SUCCESS : CREATE_COURSE_SUCCESS;
      dispatch({ type: type, savedCourse });
    }).catch(error => {
      throw error;
    });
  };
}
