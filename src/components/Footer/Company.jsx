import s from './footer.module.css';

const Company = () => {
  return (
    <div className={s.column}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Driver Centre</a>
              </li>
            </ul>
          </div>
  )
}

export default Company
