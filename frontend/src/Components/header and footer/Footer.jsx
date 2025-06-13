import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/style.css'

function Footer(){
  return(
  <section id='footer'>
     <footer>
        <div className="footer-col">
          <h3>🔹Quick Links</h3>
          <li><a href="https://lms-main-1.vercel.app/">Home</a></li>
          <li><a href="https://adityauniversity.in/overview">About Us</a></li>
          <li><a href="https://lms-main-1.vercel.app/courses">Courses</a></li>
          <li><a href="https://api.whatsapp.com/send/?phone=919989776661&text&type=phone_number&app_absent=0">Contact</a></li>
        </div>
        <div className="footer-col">
          <h3>Intermediate Courses</h3>
          <li>Web Development</li>
          <li>Programming</li>
          <li>Machine Learning</li>
          <li>Project Fundamentals</li>
        </div>
        <div className="footer-col">
          <h3>Beginner Courses</h3>
          <li>Web Development</li>
          <li>Programming</li>
          <li>Machine Learning</li>
          <li>Project Fundamentals</li>
        </div>
        <div className="copyright">
          <p>Copyright ©2025 All rights reserved .</p>
          <div className="pro-links">
            <FontAwesomeIcon icon={faFacebookF} className="i"/>
            <FontAwesomeIcon icon={faInstagram} className="i"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="i"/>
          </div>
        </div>
        </footer>
      </section>
  )
}
export default Footer;
