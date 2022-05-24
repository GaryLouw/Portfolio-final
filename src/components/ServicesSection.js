import React from "react";
import styledComponents from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";

const ServiceItemStyles = styledComponents.div`
padding: 10rem 0;
.services__allItems{
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width: 768px){
    .services__allItems{
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
    }
}
`;

export default function ServicesSection() {
  return (
    <ServiceItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem icon={<MdDesktopMac />} title="Website Design" />
          <ServicesSectionItem icon={<MdCode />} title="Web Development" />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}
