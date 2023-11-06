import s from './footer.module.css';

const OurStory = () => {
  return (
    <section className={s.column}>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </section>
  )
}

export default OurStory
