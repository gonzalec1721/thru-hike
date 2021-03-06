import React from "react";

export default function Home() {
  return (
    <div>
      <p className="homep1">
        In a single day of thru-hiking one can burn around 6,000 calories. A
        struggle for many is planning and making sure you have enough food
        available for the entire trip.
      </p>
      <p className="homep2">
        This simple web-app will let you plan meals and make sure you have
        adequate calories per day.
      </p>
      <div className="pictures">
        <img
          className="jm1"
          src={
            "https://blog.gearcoop.com/wp-content/uploads/2018/04/jmtblog-cover-edruiz.jpg"
          }
          alt="camp"
        />
        <img
          className="jm2"
          src={
            "https://exploringwild.com/wp-content/uploads/2019/04/Backpackers-on-the-John-Muir-Trail.jpg"
          }
          alt="hike"
        />
        <img
          className="jm3"
          src={
            "https://www.halfwayanywhere.com/wp-content/uploads/2020/03/PCT-Desert-Psyched-Hiking-1024x500.jpg"
          }
          alt="female hiker"
        />
      </div>
      <div className="reviews">
        <p className="rev1">
          Amazing app, I use it all the time to track my meals!!
          <br />
          -Oscar
        </p>
        <p className="rev2">
          Makes planning our trips quick and easy!!
          <br />
          -Ali & Allan
        </p>
        <p className="rev3">
          Can't imagine how I survived before this app. It's my go to for thru
          hicking!
          <br />
          -Hannah
        </p>
      </div>
      <div className="footer">
        <p>Made By Cody</p>
      </div>
    </div>
  );
}