// import "./css/applycss.css";
// import { useState } from "react";

// function Apply() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [courseList, setCourseList] = useState("");
//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify({
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           courseList: courseList,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setCourseList("");
//         setMessage("Application successfull");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="Apply">
//       <form onSubmit={handleSubmit}>
//         <input className="input1"
//           type="text"
//           value={firstName}
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input className="input1"
//           type="text"
//           value={lastName}
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input className="input1"
//           type="text"
//           value={email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

       
//         <select className="select1">
//         {/* <input
//           type="text"
//           value={courseList}
//           placeholder="Select Course"
//           onChange={(e) => setCourseList(e.target.value)}
//         /> */}
          
//           <option selected value="">Select Available Course</option>
//           <option value="logicI">Logic I</option>
//           <option value="logicII">Logic II</option>
//           <option value="ibmSpace">IBM Space</option>
//           <option value="ufo">UFO</option>
//         </select> 
        

//         <button className="button1" type="submit">Apply</button>

//         <div className="message1">{message ? <p>{message}</p> : null}</div>
//       </form>
//     </div>
//   );
// }

// export default Apply;

import {useState, useEffect} from 'react'
import { get, post, put, remove } from "../utility/fetchUtility";
import "./css/applycss.css";

function Apply(props) {
  const [id, setId] = useState(0);
  const [dateId, setDateId] = useState(Date.now());
  const [apply, setApply] = useState([]);
  const [education, setEducation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [getEducation, setGetEducation] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    get("/Apply").then((response) => setApply(response.data));
    get("/Education").then((response) => setGetEducation(response.data));
  }, []);
  return (
    <div>
      <div className="container">
        {props.authorized ? (
          <div className="staffList">
            <h1 className="h1Staff">Application</h1>
            <div className="staffContainer">
              <ul>
                {apply.map((applys) => {
                  return (
                    <div>
                      <li className="staffName" key={applys.id}>
                        <p>
                          <b>id:</b> {applys.id}
                        </p>{" "}
                        <p>
                          {" "}
                          <b>First Name:</b> {applys.firstName}{" "}
                        </p>{" "}
                        <p>
                          <b>Last Name:</b> {applys.lastName}
                        </p>{" "}
                        <p>
                          <b>Education:</b> {applys.education}
                        </p>{" "}
                        <p>
                          <b>Email:</b> {applys.email}
                        </p>{" "}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}

        <div className="form">
          <div className="createFormDiv">
            <div className="input">
              {!props.authorized ? (
                <h1 className="h1Staff">Apply for Education</h1>
              ) : (
                <h1 className="h1Staff">Delete Application</h1>
              )}
              {props.authorized ? (
                <div>
                  <select
                    className="inputClass"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    placeholder="Id for the person you want to change"
                  >
                    <option value="" selected display hidden>
                      select ID
                    </option>
                    {apply.map((applys) => {
                      return (
                        <option className="option" key={applys.id}>
                          {`${applys.id}  `}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : null}

              <div className="inputApply">
                <input
                  className="inputClass"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First Name"
                ></input>
                <input
                  className="inputClass"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last Name"
                ></input>
                <input
                  className="inputClass"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  type="email"
                ></input>
              </div>

              <div>
                <select
                  className="inputClass"
                  value={education}
                  onChange={(event) => setEducation(event.target.value)}
                >
                  <option>Select education</option>
                  {getEducation.map((education) => {
                    return (
                      <option className="option" key={id}>
                        {`${education.Education}  `}
                      </option>
                    );
                  })}
                </select>
              </div>

              {props.authorized ? (
                <div className="btnSpace">
                  <button
                    className="inputBtn1"
                    onClick={() => {
                      remove(`/Apply/${id}`);
                      get("/Apply").then((response) => setApply(response.data));
                    }}
                  >
                    Delete
                  </button>
                  <div className="space"></div>
                  <button
                    className="inputBtn1"
                    onClick={() => {
                      put(`/Apply/${id}`, {
                        id: apply.id,
                        firstName: firstName,
                        lastName: lastName,
                        education: education,
                        email: email,
                      }).then((response) =>
                        get("/Apply").then((response) =>
                          setApply(response.data)
                        )
                      );
                    }}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="inputBtn1"
                    onClick={() => {
                      post("/Apply", {
                        id: dateId,
                        firstName: firstName,
                        lastName: lastName,
                        education: education,
                        email: email,
                      });

                      setDateId(Date.now());
                      get("/Apply").then((response) => setApply(response.data));
                      get("/Education").then((response) => {
                        setGetEducation(response.data);

                        setPopup(true);
                      });
                    }}
                  >
                    Send in Application
                  </button>
                </div>
              )}
            </div>

            {popup ? (
              <div className="poppUp">
                <p>Thanks for your application</p>

                <button className="poppupBtn" onClick={() => setPopup(false)}>
                  Ok
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {!props.authorized ? (
          <div>
           

            <div className="applyEducationPosition">
              <ul className="applyEducation">
                <h2 className="h1Staff">Our Education</h2>
                {getEducation.map((educations) => {
                  return (
                    <li className="applyEducation">{educations.Education}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Apply;
