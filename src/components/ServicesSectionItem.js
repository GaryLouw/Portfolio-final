import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styledComponents from "styled-components";
import Ptext from "./Ptext";

const ItemStyles = styledComponents.div`
text-align: center;
.servicesItem__icon{
    svg{
        width: 3rem;
    }
}
.servicesItem__title{
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
}
.para{
    margin-top: 2rem;
}
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  descrip = "Lorem Ipsum is simply dummy trext of the printing and typsetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <Ptext>{descrip}</Ptext>
    </ItemStyles>
  );
}
