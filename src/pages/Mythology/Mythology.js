import React from "react";
import Card from "../../components/UI/Card";

const Mythology = () => {
  return (
    <>
      <div className="container" style={{paddingTop:"205px"}}>
        <div className="row">
          <Card
            title="Insights into Mythology"
            desc="Learning programming can be made effective by dragging and dropping the code components and thus generating the code."
            link="/mythology/display"
          />
          <Card
            title="Questions about Mythology"
            desc="The complex Data Structures and Algorithms can be animated and their working can be viewed for better understanding."
            link="/mythology/crossword"
          />
        </div>
      </div>
    </>
  );
};

export default Mythology;
