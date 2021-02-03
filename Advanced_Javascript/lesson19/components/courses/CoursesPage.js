import React, {useState, useEffect, useMemo} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import {createCourseAction, loadCoursesAction} from "../../ac/coursesActions"
import CoursesList from "./CoursesList"
import {loadAuthorsAction} from "../../ac/authorActions"

const CoursesPage = ({courses, authors, loadCoursesAction, loadAuthorsAction, loading}) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (courses.length === 0) {
            loadCoursesAction().catch(err => console.log("Error ", err.message));
        }
    }, [courses.length, loadCoursesAction]);

    useEffect(() => {
        if (authors.length === 0) {
            loadAuthorsAction().catch(err => console.log("Error ", err.message));
        }
    }, [authors.length, loadAuthorsAction]);

    const memoCourses = useMemo(
        () =>
            courses.map(course => ({
                ...course,
                authorName: authors.find(author => author.id === course.authorId).name,
            })),
        [courses, authors],
    )

    return (
        <div className="container mt-5">
            {redirect && <Redirect to="/course" />}
            <h1>Courses Page</h1>

            <button onClick={() => setRedirect(true)} className={'btn btn-primary my-3'}>Create Course</button>

            {memoCourses.length ? <CoursesList courses={memoCourses} /> : null}
        </div>
    )
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourseAction: PropTypes.func.isRequired,
}

CoursesPage.defaultProps = {
    courses: [],
}

function mapStateToProps(state) {
    const {courses, authors} = state
    return {
        courses: authors.length === 0 ? [] : courses,
        authors,
        loading: state.apiCallsInProgress > 0,
    }
}

export default connect(mapStateToProps, {
        createCourseAction,
        loadCoursesAction,
        loadAuthorsAction,
    },
)(CoursesPage)
