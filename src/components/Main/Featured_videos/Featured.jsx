import see from '../../../Ui/img/featured_videos/see.png';
import desert from '../../../Ui/img/featured_videos/desert.png';
import play from '../../../Ui/img/featured_videos/play.png';
import s from './featured.module.css';

const Featured = () => {
  return (
    <section className="container">
      <div className={s.container}>
        <div className={s.title}>
          <div>Featured Videos</div>
          <p>
            The state of Utah in the United States is home to lots of beautiful
            National Parks, & Bryce<br /> Canyon National Park ranks as three of
            the most magnificent & awe inspiring.
          </p>
        </div>
        <div className={s.videos}>
          <div>
            <img src={see} alt="see" />
          </div>
          <div>
            <img data-set="img" src={play} />
          </div>
          <div>
            <img src={desert} alt="desert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
