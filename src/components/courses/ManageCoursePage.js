import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { newCourse } from '../../../tools/mockData';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from "./CourseForm";

const ManageCoursePage = ({authors, courses, loadAuthors, loadCourses, ...props}) => {
  const [course, setCourse] = useState({...props.course});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        setErrors([...errors, error]);
      });
    }

    if (courses.length === 0) {
      loadCourses().catch(error => {
        setErrors([...errors, error]);
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;  // don't garbage-collect the event

    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }))
  };

  const handleSave = (event) => {

  };

  return (
    <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} />
  );
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps({courses, authors}) {
  return {
    course: newCourse,
    courses,
    authors
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
