import s from './footer.module.css';

const CustomerService = () => {
  return (
    <div className={s.column}>
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
                J<a href="#">obs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </div>
  )
}

export default CustomerService
