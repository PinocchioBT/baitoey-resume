import React from "react";
import "./workpage.css"

function WorkShowCase() {
  const myWorkList = [
    {
      id: "001",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
    {
      id: "002",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
    {
      id: "003",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
    {
      id: "0034",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
    {
      id: "005",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
    {
      id: "006",
      image:
        "https://img.freepik.com/free-psd/photo-frames-mockup_53876-57749.jpg",
    },
  ];
  return (
    <>
      <div className="top-text-wrapper">
        <div className="top-text"> 
          <h1 className="portfolio">Portfolio</h1>
        </div>
        <div className="right-arrow-sign">
          <h3>See More &rarr;</h3>
        </div>
      </div>
      <div className="work-lists">
        {myWorkList.map((item, index) => {
          return (
            <div key={index} className="work-card">
              <div className="work-preview">
                <img src={item.image}  alt={`Work ${item.id}`}></img>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkShowCase;
