import { FiUser } from 'react-icons/fi';
import s from './footer.module.css';

const Subscribe = () => {
  return (
    <section className={s.lastColumn}>
      <h3>Subscribe Now</h3>
      <form>
        <input type="email" placeholder="Your email" />
        <span>
          <FiUser />
        </span>
        <input type="button" value="Subscribe Now" />
      </form>
    </section>
  );
};

export default Subscribe;
