import React from "react";
import MythologyData from "../../data/MythologyData";

const MythoDisplay = () => {
  return (
    <>
      {MythologyData.map((post, index) => {
        return (
          <>
            <div
              className="card"
              style={{
                width: "50em",
                height: "30em",
                backgroundColor: "#9B9AEE",
              }}
              key={post.id}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <h2 style={{ color: "red" }}>Moral:</h2>
                    <p className="card-text">{post.moral}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MythoDisplay;
