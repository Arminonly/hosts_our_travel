import Description from './description';
import s from './inspiration.module.css';
// import avatar1 from '../../../Ui/img/inspirations/avatars/top/Ellipse 1.png';
// import avatar2 from '../../../Ui/img/inspirations/avatars/top/Ellipse 2.png';
// import avatar3 from '../../../Ui/img/inspirations/avatars/top/Ellipse 3.png';
// import frame1 from '../../../Ui/img/inspirations/avatars/top/Frame1.png';
// import ava1 from '../../../Ui/img/inspirations/avatars/top/avatar1.png';
// import ava2 from '../../../Ui/img/inspirations/avatars/top/avatar2.png';
// import img1 from '../../../Ui/img/inspirations/avatars/middle/1.png';
// import img2 from '../../../Ui/img/inspirations/avatars/middle/2.png';
// import img3 from '../../../Ui/img/inspirations/avatars/middle/3.png';
// import img4 from '../../../Ui/img/inspirations/avatars/middle/4.png';
// import img5 from '../../../Ui/img/inspirations/avatars/middle/5.png';
// import img6 from '../../../Ui/img/inspirations/avatars/middle/6.png';
// import i1 from '../../../Ui/img/inspirations/avatars/bottom/1.png';
// import i2 from '../../../Ui/img/inspirations/avatars/bottom/2.png';

// import oval1 from '../../../Ui/img/inspirations/avatars/bottom/oval1.png';
// import oval2 from '../../../Ui/img/inspirations/avatars/bottom/oval2.png';
// import oval3 from '../../../Ui/img/inspirations/avatars/bottom/oval3.png';
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
