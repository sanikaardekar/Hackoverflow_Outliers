import React from "react";
import Card from "../../components/UI/Card";

const Maths = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card
            title="Learn GeoGebra"
            desc="Learning programming can be made effective by dragging and dropping the code components and thus generating the code."
            link="/geogebra"
          />
          <Card
            title="Learn Formulas"
            desc="The complex Data Structures and Algorithms can be animated and their working can be viewed for better understanding."
            link="/math/flashcard"
          />
        </div>
      </div>
    </>
  );
};

export default Maths;
