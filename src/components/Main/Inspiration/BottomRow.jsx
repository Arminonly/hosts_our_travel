import s from './inspiration.module.css';

import frame1 from '../../../Ui/img/inspirations/avatars/top/Frame1.png';
import i1 from '../../../Ui/img/inspirations/avatars/bottom/1.png';
import i2 from '../../../Ui/img/inspirations/avatars/bottom/2.png';

import oval1 from '../../../Ui/img/inspirations/avatars/bottom/oval1.png';
import oval2 from '../../../Ui/img/inspirations/avatars/bottom/oval2.png';
import oval3 from '../../../Ui/img/inspirations/avatars/bottom/oval3.png';

import CardSmall from './Cards/CardSmall';
import CardBig from './Cards/CardBig';

const BottomRow = () => {
  return (
    <div className={s.topAndBottom}>
      <div className={s.blog4}>
        <span>
          <img src={frame1} alt="frame1" />
        </span>
        <div>
          <h5>DESTINATIONS</h5>
          <h3>Traveling To Barcelona</h3>
          <div className={s.imgBlock}>
            <CardSmall src={i1} alt="i1" />
            <CardSmall src={i2} alt="i2" />
          </div>
        </div>
      </div>
      <div className={s.blog2}>
        <button>
          <span>featured</span>
        </button>
        <div>
          <h5>DESTINATIONS</h5>
          <h3>A Guide To Rocky Mountain Vacations</h3>
          <div className={s.imgBlock}>
            <CardBig src={oval1} alt="oval1" />
            <CardBig src={oval2} alt="oval2" />
            <CardBig src={oval3} alt="oval3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
