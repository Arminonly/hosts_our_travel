import Description from './description';
import s from './inspiration.module.css';
import TopRow from './TopRow';
import MiddleRow from './MiddleRow';
import BottomRow from './BottomRow';

const Inspiration = () => {
  return (
    <div className="container">
      <div className={s.inspiration}>
        <Description />
        <div className={s.parent}>
          <TopRow />
          <MiddleRow />
          <BottomRow />
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
