import LeftColumn from './LeftColumn';
import s from './afterBecome.module.css';
import avatar1 from './../../../Ui/img/afterBecome/featuredStories/Avatar1.png';
import avatar2 from './../../../Ui/img/afterBecome/featuredStories/Avatar2.png';
import avatar3 from './../../../Ui/img/afterBecome/featuredStories/Avatar3.png';
import avatar4 from './../../../Ui/img/afterBecome/featuredStories/Avatar4.png';
import Card from './Card';

const AfterBecome = () => {
  return (
    <div className="container">
      <div className={s.container}>
        <LeftColumn />
        <div className={s.featured}>
          <div className={s.body}>
            <div className={s.featuredText}>
              <span>Featured Stories</span>
            </div>
            <div className={s.cards}>
              <Card src={avatar1} />
              <Card src={avatar2} />
              <Card src={avatar3} />
              <Card src={avatar4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterBecome;
