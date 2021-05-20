import React from 'react'
// const logo = require('/jm1.jpeg'); // with require


//  import jm1 from './jm1.jpeg';
// import jm2 from '/thru-hike/client/dist/jm2.jpeg';
// import jm3 from '/thru-hike/client/dist/John-Muir-Trail-Planning.jpeg';


export default function Home(){
  return (
    <div>
     <p className='homep1'>In a single day of thru-hiking one can burn around 6,000 calories. A struggle for many is planning and making sure you have enough food available for the entire trip.</p>
  <p className='homep2'>This simple web-app will let you plan meals and make sure you have adequate calories per day.</p>
  <div className='pictures'>
  <img className='jm1' src={"https://blog.gearcoop.com/wp-content/uploads/2018/04/jmtblog-cover-edruiz.jpg"} alt="camp"/>
  <img className='jm2' src={"https://exploringwild.com/wp-content/uploads/2019/04/Backpackers-on-the-John-Muir-Trail.jpg"} alt="hike"/>
  <img className='jm3' src={"https://www.halfwayanywhere.com/wp-content/uploads/2020/03/PCT-Desert-Psyched-Hiking-1024x500.jpg"} alt="female hiker"/>
  </div>




    </div>
  )
}