import s from './afterBecome.module.css';

const Card = ({ src }) => {
  return (
    <div className={s.card}>
      <img src={src} alt="avatar 1" />
      <div className={s.descr}>
        <span>
          Do A Sporting Stag Do In<br /> Birmingham
        </span>
        <span>13 Dec 2019</span>
      </div>
    </div>
  );
};

export default Card;
