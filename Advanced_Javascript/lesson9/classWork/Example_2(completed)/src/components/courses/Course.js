import React from "react";

const Course = ({ course, toggle, openId ,toggleTeachers,openTeachers}) => (
    <div className="mt-3">
        <h3>{course.title}</h3>
        <p>{course.anons}</p>
        <button onClick={() => toggle(course._id)} className="btn btn-primary">
            {openId === course._id ? "Hide description" : "Show description"}
        </button>
        {openId === course._id ? <p>{course.description}</p> : null}


        
        <button onClick={() => toggleTeachers(course.date)} className="btn btn-primary">
            {openTeachers === course.date ? "Hide teachers" : "Show teachers"}
        </button>
        {openTeachers === course.date ? <div>{course.teachers.map(teacher=>(<div key={teacher._id}>  <br/>   <strong>  {teacher.name}  </strong> <br/>
        <div> {teacher.text} </div>     </div>
  
        ))}
        </div> : null}
    </div>
);

export default Course;
