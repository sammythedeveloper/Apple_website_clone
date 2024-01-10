import React, { Fragment } from "react";

const FifthSection = () => {
  return (
    <Fragment>
      <section className="Fourth-highlight-wrapper">
        <div className="left-side-wrapper4">
          <div className="content1">
            <div className="description6">
              {" "}
              <img src={require("../Image/icons/vision-pro.png")} alt="" />
              <p className="date">
                Welcome to the era of spatial computing. Pre-order starting 1.19
                @ 5:00 a.m PT Available starting 2.2
              </p>
            </div>
            <div className="link-wrapper">
              <ul>
                <li>
                  <a href="#">Learn more</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="vision"></div>
        </div>
        <div className="right-side-wrapper4">
          <div className="content2">
            <div>
              <img src={require("../Image/icons/fitness.png")} alt="" />
            </div>
            <div className="Upgrade">
              <p>
                Work out to an entire playlist of music by your favorite artists
              </p>
            </div>
            <div className="link-wrapper">
              <ul>
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Try it free</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="trade"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default FifthSection;
