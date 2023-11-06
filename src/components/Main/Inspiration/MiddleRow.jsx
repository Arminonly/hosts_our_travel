import s from './inspiration.module.css';

import img1 from '../../../Ui/img/inspirations/avatars/middle/1.png';
import img2 from '../../../Ui/img/inspirations/avatars/middle/2.png';
import img3 from '../../../Ui/img/inspirations/avatars/middle/3.png';
import img4 from '../../../Ui/img/inspirations/avatars/middle/4.png';
import img5 from '../../../Ui/img/inspirations/avatars/middle/5.png';
import img6 from '../../../Ui/img/inspirations/avatars/middle/6.png';

import CardMedium from './Cards/CardMedium';


const MiddleRow = () => {
  return (
    <div className={s.middle}>
            <div className={s.blog5}>
              {' '}
              <h5>DESTINATIONS</h5>
              <h3>Party Jokes Startling But Unnecessary</h3>
              <div className={s.imgBlock}>
              <CardMedium src={img1} alt="img1"/>
              <CardMedium src={img2} alt="img2"/>
              </div>
            </div>
            <div className={s.blog7}>
              <h3>Maui By Air The Best Way Around The Island</h3>
              <div className={s.imgBlock}>
              <CardMedium src={img3} alt="img3"/>
              <CardMedium src={img4} alt="img4"/>
              </div>  
            </div>
            <div className={s.blog6}>
              <h5>Andre Gide</h5>
              <h3>
                Man cannot discover new oceans unless he has the courage to lose
                sight of the shore.
              </h3>
              <div className={s.imgBlock}>
              <CardMedium src={img5} alt="img5"/>
              <CardMedium src={img6} alt="img6"/>
              </div>
            </div>
          </div>
  )
}

export default MiddleRow
