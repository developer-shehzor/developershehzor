import { useState } from "react";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [{
      id: "1",
      icon: "./assets/mobile.png",
      title: "Frontend Development",
      desc:
        "With a robust command over frontend development, I bring a wealth of experience in delivering exceptional solutions across diverse industries",
        img:
        process.env.PUBLIC_URL + "/assets/frontend.jpg",
    },

    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Backend Development",
      desc:
        "Proficient in backend development, I possess a strong track record of creating powerful and scalable solutions for a wide range of industries",
        img:
        process.env.PUBLIC_URL + "/assets/backend.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "FullStack Development",
      desc:
        "Experienced in full-stack development, I offer a comprehensive skill set that encompasses both frontend and backend expertise.",
      img:
      process.env.PUBLIC_URL + "/assets/fullstack.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href="#portfolio">Projects</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}