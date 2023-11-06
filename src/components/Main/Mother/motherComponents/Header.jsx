import { GiHamburgerMenu } from 'react-icons/gi';
import { SlSocialFoursqare } from 'react-icons/sl';
import twitter from '../../../../Ui/img/mother_earth/twitter.svg';
import s from '../mother.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <SlSocialFoursqare fill="white" />
        <img src={twitter} alt="twitter" />
      </div>
      <div className={s.title}>MITRAVEL</div>
      <div className={s.burger}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
