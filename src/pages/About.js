import React from "react";
import Button from "../components/Button";
import Ptext from "../components/Ptext";
import AboutImg from "../assets/images/about-page-img.png";
import styledComponents from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutStyles = styledComponents.div`
padding 20rem 0 10rem 0;
.top-section{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.left{
  flex: 3;
}
.right{
  flex: 2;
}
.about__subheading{
  font-size: 2.2rem;
  margin-bottom: 2rem;
  span{
    background-color: var(--deep-dark);
    padding: 0.5rem;
    border-radius: 8px;
  }
}
.about__heading{
  font-size: 3.6rem;
  margin-bottom: 3rem;
}
.about__info{
  margin-bottom: 4rem;
  .para{
    max-width: 100%;
  }
}
.right{
  img{
    border: 2px solid var(--gray-1);
  }
}
.about__info__items{
  margin-top: 15rem;
}
.about__info__item{
  margin-bottom: 10rem;
}
.about__info__heading{
font-size: 3.6rem;
text-transform: uppercase;
}
@media only screen and (max-width: 768px){
  padding: 10rem 0;
  .top-section{
    flex-direction: column;
    gap: 5rem;
  }
  .about__subheading{
    font-size: 1.8rem;
  }
  .about__heading{
    font-size: 2.8rem;
  }
  .about__info__heading{
    font-size: 3rem;
  }
}
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Gary Louw</span>
            </p>
            <h2 className="about__heading">A freelance Web Developer</h2>
            <div className="about__info">
              <Ptext></Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#"></Button>
          </div>
          <div className="right">
            <img src={AboutImg} alt="about img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={["Clapham High School"]} />
            <AboutInfoItem title="Tertiary" items={["IIE Rosebank College"]} />
            <AboutInfoItem title="Certificates" items={[" "]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={["HTML", "CSS", "JavaScript", "REACT", "Angular"]}
            />
            <AboutInfoItem
              title="Backend"
              items={["Node", "Express", "PHP", "C#"]}
            />
            <AboutInfoItem title="Design" items={["Figma"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2020 - 2021"
              items={["Junior Developer at Eventmate SA"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutStyles>
  );
}
