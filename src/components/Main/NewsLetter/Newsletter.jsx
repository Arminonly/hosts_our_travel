import s from './newsletter.module.css';

const Newsletter = () => {
  return (
    <section className="container">
      <div className={s.container}>
        <div className={s.img}>
          <div className={s.body}>
            <div className={s.left}>
              <h1>Sign Up Our Newsletter</h1>
              <p>
                {' '}The state of Utah in the United States is home to lots of
                beautiful National Parks, & Bryce Canyon National Park ranks as
                three of the most magnificent.{' '}
              </p>
            </div>
            <div className={s.right}>
              <div className={s.form}>
                <input type="email" placeholder="EMAIL" />
                <input type="text" placeholder="EMAIL" />
                <input type="tel" placeholder="PHONE NUMBER" />
              </div>
              <button>SIGN UP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
