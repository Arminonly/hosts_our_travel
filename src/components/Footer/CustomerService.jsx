import s from './footer.module.css';

const CustomerService = () => {
  return (
    <section className={s.column}>
            <h3>Information</h3>

            <ul>
              <li>
                {' '}<a href="#">Customer service</a>
              </li>
              <li>
                <a href="#">Recommend a restaurant</a>
              </li>
              <li>
                <a href="#">Signup a restaurant</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </section>
  )
}

export default CustomerService
