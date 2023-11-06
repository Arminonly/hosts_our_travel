import s from './become.module.css';
import mountains from '../../../Ui/img/become/mountains.png';
import river from '../../../Ui/img/become/river.png';
import castle from '../../../Ui/img/become/castle.png';
import church from '../../../Ui/img/become/church.png';
import Card from './Card';

const Become = () => {
  return (
    <div className="container">
      <div className={s.become}>
        <div className={s.container}>
          <div className={s.body}>
            <div className={s.title}>
              Become A Travel Pro In<br /> One Easy Lesson
            </div>
            <div className={s.cards}>
              <Card img={mountains} alt="mountains" />
              <span className={s.cover}>
                <Card img={river} alt="river" />
              </span>
              <Card img={castle} alt="castle" />
              <Card img={church} alt="church" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
