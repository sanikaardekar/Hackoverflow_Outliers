import React from "react";
import Card from "../../components/UI/Card";

const Coding = () => {
  return (
    <>
      <div className="container" style={{paddingTop:"205px"}}>
        <div className="row">
          <Card
            title="Build Algorithms"
            desc="Learning programming can be made effective by dragging and dropping the code components and thus generating the code."
            link="/build"
          />
          <Card
            title="Visualize Algorithms"
            desc="The complex Data Structures and Algorithms can be animated and their working can be viewed for better understanding."
            link="/coding/visualize"
          />
          <Card
            title="Contests"
            desc="Helping developers break through the enigma of code.  It helps you in learning programming concepts and improves your coding skills."
            link="/contests"
          />
        </div>
      </div>
    </>
  );
};

export default Coding;
