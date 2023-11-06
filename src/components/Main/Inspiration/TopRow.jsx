import s from './inspiration.module.css';

import avatar1 from '../../../Ui/img/inspirations/avatars/top/Ellipse 1.png';
import avatar2 from '../../../Ui/img/inspirations/avatars/top/Ellipse 2.png';
import avatar3 from '../../../Ui/img/inspirations/avatars/top/Ellipse 3.png';

import frame1 from '../../../Ui/img/inspirations/avatars/top/Frame1.png';

import ava1 from '../../../Ui/img/inspirations/avatars/top/avatar1.png';
import ava2 from '../../../Ui/img/inspirations/avatars/top/avatar2.png';

import CardBig from './Cards/CardBig';
import CardSmall from './Cards/CardSmall';

const TopRow = () => {
  return (
    <div className={s.topAndBottom}>
      <div className={s.blog1}>
        <button>
          <span>featured</span>
        </button>
        <div>
          <h5>DESTINATIONS</h5>
          <h3>A Guide To Rocky Mountain Vacations</h3>

          <div className={s.imgBlock}>
            <CardBig src={avatar1} alt="avatar1" />
            <CardBig src={avatar2} alt="avatar2" />
            <CardBig src={avatar3} alt="avatar3" />
          </div>
        </div>
      </div>
      <div className={s.blog3}>
        <span>
          <img src={frame1} alt="frame1" />
        </span>
        <div>
          <h5>DESTINATIONS</h5>
          <h3>Traveling To Barcelona</h3>
          <div className={s.imgBlock}>
            <CardSmall src={ava1} alt="ava1" />
            <CardSmall src={ava2} alt="ava2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRow;
