import s from './afterBecome.module.css';
import Featuredbutton from '../../../Ui/img/afterBecome/Featuredbutton';
import ReadArticleButton from '../../../Ui/img/afterBecome/ReadArticleButton';


const LeftColumn = () => {
  return (
    <>
       <div className={s.tripBlock}>
            <Featuredbutton />
          <div className={s.title}>
            How To Fly A Private Jet On Your Next Trip
          </div>
          <div className={s.text}>
            <span>
              The state of Utah in the United States is home to lots of
              beautiful National Parks, & Bryce Canyon <br /> National Park
              ranks as three of the most magnificent & awe inspiring.
            </span>
          </div>
          <ReadArticleButton />
        </div>
    </>
  )
}

export default LeftColumn
