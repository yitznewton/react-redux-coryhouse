import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { authors, courses, loadAuthors, loadCourses } = this.props;

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert('Loading authors failed: ' + error);
      });
    }

    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert('Loading courses failed: ' + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps({courses, authors}) {
  return {
    courses,
    authors
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
