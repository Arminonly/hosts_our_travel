
const Card = ({ img, alt }) => {
  return (
    <>
      <div>
        <img src={img} alt={alt} />
      </div>
    </>
  );
};

export default Card;
