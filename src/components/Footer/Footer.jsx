import { FiUser } from 'react-icons/fi';
import s from './footer.module.css';
import Company from './Company';
import OurStory from './OurStory';
import CustomerService from './CustomerService';
import Subscribe from './Subscribe';
const Footer = () => {
  return (
    <div className="container">
      <div className={s.container}>
        <div className={s.row}>
          <Company />
          <OurStory />
          <CustomerService />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
