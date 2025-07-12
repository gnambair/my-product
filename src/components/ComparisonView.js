import React from "react";

const ComparisonView = ({ selectedProducts, toggleDark }) => {
  if (selectedProducts.length < 2) return null;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-primary">Product Comparison</h2>

      <div className="table-responsive">
        <table
          className={`table table-${
            toggleDark ? "light" : "dark"
          } table-bordered text-center align-middle`}
        >
          <thead className="table-light">
            <tr>
              <th
                className={`${
                  toggleDark ? "bg-light text-dark" : "bg-dark text-light"
                }`}
              >
                Attribute
              </th>
              {selectedProducts.map((p) => (
                <th
                  className={`${
                    toggleDark ? "bg-light text-dark" : "bg-dark text-light"
                  }`}
                  key={p.id}
                >
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brand</td>
              {selectedProducts.map((p) => (
                <td key={p.id}>{p.brand}</td>
              ))}
            </tr>
            <tr>
              <td>Price</td>
              {selectedProducts.map((p) => (
                <td key={p.id}>{p.price}</td>
              ))}
            </tr>
            <tr>
              <td>Features</td>
              {selectedProducts.map((p) => (
                <td key={p.id}>
                  <ul className="list-unstyled">
                    {p.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonView;
