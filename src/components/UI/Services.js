import React from 'react'
import Card from "../UI/Card"
const Services = () => {
  return (
    <>
    <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4 style={{fontFamily:"Roboto"}}>
                  Amazing <em style={{color:"#7C32FF"}}>Services &amp; Features</em> for you
                </h4>
                {/* <img src={heading} alt="heading" /> */}
                <p style={{fontSize:"1.0rem", color:"#72286F"}}>
                  Our proposed solution is a website that helps students to
                  learn programming in a fun and interactive way that would
                  revolutionize the way of learning to code. We propose the
                  following features in our application:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" >
            <Card
            
              title="Code Algorithms"
              desc="Learning programming can be made effective by dragging and dropping the code components and thus generating the code."
              link="/coding"
            />
            <Card
              title="Learn Maths"
              desc="The complex Data Structures and Algorithms can be animated and their working can be viewed for better understanding."
              link="/maths"
            />
            <Card
              title="Mythology"
              desc="Helping developers break through the enigma of code.  It helps you in learning programming concepts and improves your coding skills."
              link="/mythology"
            />
            <Card
              title="Communication"
              desc="24x7 Active Discussion where researchers/developers can discuss algorithms and help solve each others doubts."
              link="/interview"
            />
            <Card
              title="Videochat"
              desc="24x7 Active Discussion where researchers/developers can discuss algorithms and help solve each others doubts."
              link="/videochat"
            />
            <Card
              title="Calendar"
              desc="24x7 Active Discussion where researchers/developers can discuss algorithms and help solve each others doubts."
              link="/calendar"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services