import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  componentDidMount() {
    const { authors, courses, actions } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert('Loading authors failed: ' + error);
      });
    }

    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert('Loading courses failed: ' + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses}/>
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps({courses, authors}) {
  return {
    courses: authors.length === 0 ? [] : courses.map(course => (
      {...course, authorName: authors.find(a => a.id === course.authorId).name}
    )),
    authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
