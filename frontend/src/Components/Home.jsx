import React from "react";
import { useUserContext } from "./UserContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./images/logo.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/html.png";
import c3 from "./images/sql.jpg";
import c4 from "./images/python.jpg";
import c5 from "./images/java.png";
import c6 from "./images/css.png";
import "./css/style.css";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "./header and footer/Footer";

function Home() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
  return (
    <div>
      <Navbar page={"home"} />
      <div>
        <section id="home">
          <h2>Enhance your future with ADITYA UNIVERSITY</h2>
          <p>
            {" "}
            <b>ADITYA UNIVERSITY</b> is a leading provider of massive open online courses , offering 
            a dynamic and engaging learning experience. The university structures its courses into a series 
            of modules and lessons, each designed to deliver knowledge effectively. These modules can include a mix 
            of video lectures, detailed text notes, and interactive assessment tests, ensuring comprehensive learning and evaluation.
          </p>
          <div className="btn">
            <a className="blue" href="https://adityauniversity.in/">
              Learn More
            </a>
            <a className="yellow" href="http://localhost:3000/courses">
              Visit Courses
            </a>
          </div>
        </section>
        <section id="features">
          <h1>Awesome Features</h1>
          <p>Chance to enhance yourself</p>
          <div className="fea-base">
            <div className="fea-box">
              <FontAwesomeIcon icon={faGraduationCap} className="i" />
              <h3>Scholarship Facility</h3>
              <p>Originality is the essence of true scholarship. </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} className="i" />
              <h3>Valuable Courses</h3>
              <p>
                Online education is like a rising tide, it's going to lift all
                boats.{" "}
              </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faAward} className="i" />
              <h3>Global Certification</h3>
              <p>
                A certificate without knowledge is like a gun without bullets in
                your hand.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="course">
          <h1>Our Popular Courses</h1>
          <p>10,000+ enrolled</p>
          <div className="course-box">
            {/* ... (Course content here) */}
            <div className="courses">
              <img src={c1} alt="" />
              <div className="details">
                <h6>JavaScript Beginner Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs:500</div>
            </div>
            <div className="courses">
              <img src={c2} alt="" />
              <div className="details">
                <h6>HTML Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs:500</div>
            </div>
            <div className="courses">
              <img src={c3} alt="" />
              <div className="details">
                <h6>SQL Beginner Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs:500</div>
            </div>
            <div className="courses">
              <img src={c4} alt="" />
              <div className="details">
                <h6>Python Master Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs:500</div>
            </div>
            <div className="courses">
              <img src={c5} alt="" />
              <div className="details">
                <h6>Java Essentials</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">500</div>
            </div>
            <div className="courses">
              <img src={c6} alt="" />
              <div className="details">
                <h6>CSS Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs:500</div>
            </div>
          </div>
        </section>
        <section id="registration">
          {!authToken ? (
            <div className="form">
              <h3>Create Free Account NOW!</h3>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="Email" name="" id="" />
              <input type="password" placeholder="Password" name="" id="" />
              <input type="number" placeholder="Phone Number" name="" id="" />
              <div className="btn">
                <a className="yellow" href="#">
                  Submit Form
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
