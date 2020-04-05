import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    // using anonymous function
    // getCourses().then(function (mockCourse) {
    //   this.setState({ courses: mockCourse });
    // });

    // using arrow function
    getCourses().then((mockCourse) => this.setState({ courses: mockCourse }));
  }

  render() {
    return <h2>Courses</h2>;
  }
}
export default CoursesPage;
