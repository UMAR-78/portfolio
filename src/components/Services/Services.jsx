import React from "react";
import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const servicesData = [
    {
      id: 1,
      imageSrc: "user-interface-svgrepo-com.svg",
      title: "User Interface Design",
      description:
        "I create user-friendly UI designs using trending and lightweight front-end tech stacks.",
    },
    {
      id: 2,
      imageSrc: "com-laptop-code-svgrepo-com.svg",
      title: "Website Development",
      description:
        "I build beautiful websites with seamless interfaces that compose inspiring animations.",
    },
    {
      id: 3,
      imageSrc: "code-square-svgrepo-com.svg",
      title: "Software Development",
      description:
        "I design software, encompassing specification, design, programming, documentation, testing.",
    },
    
  ];

  return (
    <div className="container2 ServicesSection">
      <h1 className="contentHeading">
        <span>05.</span> Services I offer <span className="spanLine"></span>
      </h1>

      <div className="mainDivofServicesSection">
        <div className="textSectionOfServicesSection">
          <h2>You're in experienced hands 👋</h2>
          <p className="Ptext">
            I can help you successfully take your business needs while assisting
            you throughout the project/product development process. Building the
            best softwares & bringing value to your organization through my
            technical expertise in the relevant domain.
          </p>
        </div>

        <div className="servicesDiv">
          {servicesData.map((service) => (
            <div key={service.id} className="box">
              <div>
                <img
                  className="servicesImage"
                  src={service.imageSrc}
                  alt=""
                />
              </div>
              <div>
                <h5 className="serviceHeading">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
