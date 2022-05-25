import React from "react";
import styledComponents from "styled-components";
import Ptext from "./Ptext";

const AboutItemStyles = styledComponents.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 3rem;
position: relative;
.title{
    font-size: 2.2rem;
}
.items{
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
}
.item{
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
}
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    garp: 1rem;
    .items{
        position: initial;
        gap: 1rem;
    }
    .title{
        font-size: 2rem;
    }
}

`;

export default function AboutInfoItem({
  title = "this is title",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext>{item}</Ptext>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
