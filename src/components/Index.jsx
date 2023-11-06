import Footer from './Footer/Footer'
import AfterBecome from './Main/AfterBecome/AfterBecome'
import Become from './Main/Become/Become'
import Featured from './Main/Featured_videos/Featured'
import Inspiration from './Main/Inspiration/inspiration'
import Mother from './Main/Mother/Mother'
import Newsletter from './Main/NewsLetter/Newsletter'

const MainIndex = () => {
  return (
    <>
      <Mother/>
      <Become/>
      <AfterBecome/>
      <Featured/>
      <Newsletter/>
      <Inspiration/>
      <Footer/>
    </>
  )
}

export default MainIndex
