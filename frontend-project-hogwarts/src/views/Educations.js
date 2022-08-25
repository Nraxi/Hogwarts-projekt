import React from 'react'
import './css/EducationsStyles.css'
import { get, post } from '../utility/fetchUtility.js'
import {useState, useEffect } from 'react'

function Educations(props) {

    const [courses, setCourses] = useState([]);
    const [eventLists, setEventLists] = useState([]);
    const [chooseCourse, setChooseCourse] = useState("");
    const [selectTeacher, setSelectTeacher] = useState("");
    const [selectHouse, setSelectHouse] = useState("");
    const [selectComment, setSelectComment] = useState("");
    // const [isSubmit, setIsSubmit] = useState(false);
    const [content, setContent] = useState({});

useEffect(() => {
    get("/education").then((response) => setEventLists(response.data));
    get("/Courses").then((response) => setCourses(response.data));
    get("/Staff").then((response) => setSelectTeacher(response.data));
}, []);

// useEffect(() => {

// const timer = setTimeout(() => {
//     if (isSubmit) {
//         setIsSubmit(false);
//     }
// }, 1000);

// return () => clearTimeout(timer);

// }, [isSubmit]);

return (
<div className='educations'>
<div className='education-list'>
    <div>
    <h3>Your Magical Journey</h3>
        <div>
        <ul>
        <li className='educationTitle'>
                        <p>
                        &nbsp;&nbsp;<b>Course:</b> {content.course}
                        </p>
                        <p>
                        &nbsp;&nbsp;<b>Professor:</b> {content.teacher}
                        </p>
                        <p>
                        &nbsp;&nbsp;<b>House:</b> {content.house}
                        </p>
                        <p>
                        &nbsp;&nbsp;<b>Comments:</b> {content.comment}
                        </p>
                </li>
        </ul>
        </div>
    </div>
    <button className='btn'>Apply Now</button>
</div>

    <div className='card-container'>
        <form className='card selectors' onSubmit={(event) => {event.preventDefault();
            
            setContent({ 
                course: chooseCourse,
                teacher: selectTeacher,
                house: selectHouse,
                comment: selectComment
            })
            }}>

            <h3>Enter Education Information</h3>
            <p>- Select Your House -</p>
            <select className='selection' value={selectHouse}
                    onChange={(event) => setSelectHouse(event.target.value)}>
                <option value="" disabled>Select Your House</option>
                <option>Gryffindor</option>
                <option>Hufflepuff</option>
                <option>Ravenclaw</option>
                <option>Slytherin</option>
                );
            </select>

            <p>- Education Leader -</p>
            <select className='selection' value={selectTeacher} 
                    onChange={(event) => setSelectTeacher(event.target.value)}>
            <option value="" hidden>Select Your Professor</option>
            {courses.map((teacher) => {
                return (
                    <option key={teacher.courseId}>
                    {`${teacher.teacher}  `}
                    </option>
                );
            })}
            </select>

            <p>- Courses -</p>
            <select className='selection' value={chooseCourse} onChange={(event) => setChooseCourse(event.target.value)}>
                <option value="" disabled>Select Your Course</option>
                {courses.map((course) => {
                return (
                <option key={course.courseId} className="option">
                {` ${course.courseName}`}
                </option>
                );
                })} 
            </select>

            <p>- Your Comments -</p>
            <textarea value={selectComment} onChange={(event) => setSelectComment(event.target.value)} placeholder='Share your thoughts with us...'></textarea>
            
            <button className='btn' type='submit'>Submit</button>
            
        </form>
    </div>
    </div>
)}


export default Educations
