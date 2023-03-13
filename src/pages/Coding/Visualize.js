import React from "react";
import Card from "../../components/UI/Card";

const Algorithms = () => {
  return (
    <div>
      <div className="container" style={{paddingTop:"205px"}}>
        <div className="row">
          <Card
            title="Binary Search"
            link="/coding/visualize/binarysearch"
            img=""
            desc=""
          />
          <Card title="Prime" link="/coding/visualize/prime" img="" desc="" />
          <Card
            title="N-Queens"
            link="/coding/visualize/nqueens"
            img=""
            desc=""
          />
          <Card title="Sorting" link="/coding/visualize/sort" img="" desc="" />
          <Card title="Graph" link="/coding/visualize/graph" img="" desc="" />
          <Card title="Puzzle" link="/coding/visualize/puzzle" img="" desc="" />
          <Card
            title="Turing Machine"
            link="/coding/visualize/turing"
            img=""
            desc=""
          />
          <Card
            title="Convex Hull"
            link="/coding/visualize/convexhull"
            img=""
            desc=""
          />
          <Card
            title="Path Finder"
            link="/coding/visualize/pathfinder"
            img=""
            desc=""
          />
          <Card
            title="Recursive Sort"
            link="/coding/visualize/recursivesort"
            img=""
            desc=""
          />
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
