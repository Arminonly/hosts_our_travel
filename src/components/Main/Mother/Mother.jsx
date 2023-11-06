import s from './mother.module.css';
import Header from './motherComponents/Header';
import MotherContainer from './motherComponents/MotherContainer';

const Mother = () => {
  return (
    <>
      <div className="container">
        <section className={s.mother}>
          <div className={s.container}>
            <Header />
            <div className={s.new_book}>
              <span>new book</span>
            </div>
            <MotherContainer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Mother;
