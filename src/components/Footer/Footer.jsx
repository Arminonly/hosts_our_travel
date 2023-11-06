import { FiUser } from "react-icons/fi";
import s from './footer.module.css';
const Footer = () => {
  return (
    <div className="container">
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.column}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Driver Centre</a>
              </li>
            </ul>
          </div>

          <div className={s.column}>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={s.column}>
            <h3>Information</h3>

            <ul>
              <li>
                {' '}<a href="#">Customer service</a>
              </li>
              <li>
                <a href="#">Recommend a restaurant</a>
              </li>
              <li>
                <a href="#">Signup a restaurant</a>
              </li>
              <li>
                J<a href="#">obs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </div>
          <div className={s.lastColumn}>
            <h3>Subscribe Now</h3>
            <form >
              <input type="email" placeholder='Your email'/><span><FiUser/></span>
              <input type="button" value="Subscribe Now" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
