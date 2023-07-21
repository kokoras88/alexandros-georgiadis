import First from '../components/First';
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Line from "../components/Line";
import Lottie from "lottie-react";
import animationData from "../assests/animation_lkb1qu0s.json";
import { useState } from "react";


const Home = () => {


  const [projects, setProjects] = useState([
    {title:"schedulazy", body:"final project", image:"../images/boy.png", id:1},
    {title:"BearBnB", body:"middle project", id:2},
  ]);




  return (
    <div className="home">
      <First />
      <Line />
      <Second />
      <Line />
      <Third />
      <Line />
      <Fourth />
      {projects.map((banana) => (
        <div className="banana-preview" key={banana.id}>
          <img src={banana.image}/>
          <div className="banana-infos">
            <h2>{ banana.title}</h2>
            <p>A project about: {banana.body}</p>
          </div>
        </div>
      ))}










      <Line />
      <Lottie animationData={animationData}/>
      <Fifth />
    </div>
  );
}

export default Home;
