import React from "react";

const CompareBar = ({
  selectedProducts,
  onRemove,
  onClear,
  onCompareNow,
  toggleDark,
}) => {
  return (
    <div className="container">
      <h2 className={`text-center text-primary my-4`}>
        Comparison of the products:
      </h2>
      <div
        className={`card ${
          toggleDark ? "bg-light border-info-subtle" : "bg-dark border-white"
        }`}
      >
        <div className="card-body d-flex justify-content-between">
          {selectedProducts.map((product) => (
            <div key={product.id} className="container">
              <div className="row">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "auto",
                    padding: "5px",
                  }}
                />
                <span
                  className={`text-center text-${
                    toggleDark ? "dark" : "light"
                  } my-1`}
                >
                  {product.name}
                </span>
                <button
                  style={{ width: "100px" }}
                  className="my-1 mx-auto btn btn-danger"
                  onClick={() => onRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`d-flex justify-content-center bg-${
            toggleDark ? "light" : "dark"
          } py-2`}
        >
          <button className="btn btn-primary mx-2" onClick={onCompareNow}>
            Compare Now
          </button>
          <button className="btn btn-secondary" onClick={onClear}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
