import React from "react";

const Card = ({ product, clickToCompare, isSelected, toggleDark }) => {
  return (
    <>
      <div
        className={`card ${
          isSelected
            ? toggleDark
              ? "bg-info-subtle border border-info-subtle"
              : "border-white bg-secondary"
            : toggleDark
            ? "bg-light"
            : "border-white bg-dark"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "200px",
            margin: "auto",
            borderRadius: "5px",
          }}
        />
        <div className="card-body">
          <h5 className="text-center text-primary">{product.name}</h5>
          <h4 className="text-center text-primary-emphasis">{product.brand}</h4>
          <p className={`text-center text-${toggleDark ? "dark" : "light"}`}>
            {product.price}
          </p>

          {product.features.map((features, index) => (
            <p
              className={`text-center ${
                toggleDark
                  ? "border border-dark border-bottom text-dark"
                  : "border border-light border-bottom text-light"
              }`}
              key={index}
            >
              {features}
            </p>
          ))}

          <button
            className="btn btn-primary mx-auto d-flex"
            onClick={() => clickToCompare(product)}
          >
            Compare
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
