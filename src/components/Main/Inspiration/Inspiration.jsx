import Description from './Description';
import s from './inspiration.module.css';
import TopRow from './TopRow';
import MiddleRow from './MiddleRow';
import BottomRow from './BottomRow';

const Inspiration = () => {
  return (
    <section className="container">
      <div className={s.inspiration}>
        <Description />
        <div className={s.parent}>
          <TopRow />
          <MiddleRow />
          <BottomRow />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
