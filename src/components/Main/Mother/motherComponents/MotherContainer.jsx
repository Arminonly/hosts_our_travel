import { BiSearch } from 'react-icons/bi';
import s from '../mother.module.css';
import play from '../../../../Ui/img/mother_earth/play.svg';
import left from '../../../../Ui/img/mother_earth/arrow-left.svg';
import right from '../../../../Ui/img/mother_earth/arrow-right.svg';

const MotherContainer = () => {
  return (
    <section className={s.mother_body}>
      <div className={s.left}>
        <div className={s.left_title}>
          Mother Earth <br /> Hosts Our
          <br /> Travels
        </div>
        <div className={s.left_text}>
          There are not many cities that have experienced such social and
          political
          <br /> extremes in recent history as Amsterdam. In the 20th century
          alone,
          <br /> Amsterdam faced the atrocities of war for the first time in 400
          years, became
          <br /> the radical center of 1960s social movements and witnessed a
          complete{' '}
        </div>
        <div className={s.left_btn}>
          <button>BUY THE BOOK</button>
        </div>
        <div className={s.left_inputBody}>
          <input type="search" placeholder="Search stories" />
          <div>
            <BiSearch />
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.right_frame}>
          <img src={play} alt="play" />
        </div>
        <div className={s.right_carusel}>
          <img src={left} alt="arrow_left" />

          <span>wonderful moutain</span>

          <img src={right} alt="arrow_right" />
        </div>
      </div>
    </section>
  );
};

export default MotherContainer;
