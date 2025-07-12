import React, { useState } from "react";
import { products } from "./components/Products";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Compare from "./components/Compare";
import ComparisonView from "./components/ComparisonView";
import "./App.css";

function App() {
  const [compareList, setCompareList] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [toggleDark, setToggleDark] = useState(true);

  const toggleSwitch = () => {
    if (toggleDark) {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
    setToggleDark(!toggleDark);
  };

  const clickToCompare = (product) => {
    const isAdded = compareList.some((p) => p.id === product.id);

    if (isAdded) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, product]);
      } else {
        alert("You can compare up to 3 products only.");
      }
    }
  };
  const handleRemove = (id) => {
    setCompareList(compareList.filter((p) => p.id !== id));
  };

  const handleClear = () => {
    setCompareList([]);
    setShowComparison(false);
  };

  const handleCompareNow = () => {
    if (compareList.length >= 2) {
      setShowComparison(true);
    }
  };
  return (
    <>
      <Navbar toggleSwitch={toggleSwitch} toggleDark={toggleDark} />
      <div className="container">
        <h2 className="text-center my-4 text-primary">Product List</h2>
        <div className="row">
          {products.map((item) => (
            <div className="col-md-3 my-2" key={item.id}>
              <Card
                toggleDark={toggleDark}
                product={item}
                clickToCompare={clickToCompare}
                isSelected={compareList.some((p) => p.id === item.id)}
              />
            </div>
          ))}
        </div>

        {compareList.length >= 2 && (
          <Compare
            toggleDark={toggleDark}
            selectedProducts={compareList}
            onRemove={handleRemove}
            onClear={handleClear}
            onCompareNow={handleCompareNow}
          />
        )}

        {showComparison && (
          <ComparisonView
            selectedProducts={compareList}
            toggleDark={toggleDark}
          />
        )}
      </div>
    </>
  );
}

export default App;
