import "./product.css";

const Product = ({img1,img2,img3,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img1} alt="" className="p-img" />
        <img src={img2} alt="" className="p-img" />
        <img src={img3} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
