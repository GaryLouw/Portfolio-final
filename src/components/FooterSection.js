import React from "react";
import styledComponents from "styled-components";
import FooterColumn from "./FooterColumn";
import Ptext from "./Ptext";

const FooterStyles = styledComponents.div`
padding-top: 10rem;
background-color: var(--deep-dark);

.container{
    display: flex;
    gap: 3rem;

}
.footer__col1{
    flex: 2;
}
.footer__col2,
.footer__col3,
.footer__col4{
    flex: 1;
}
.footer__col1__title{
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
.copyright{
    background-color: var(--deep-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para{
        margin-left: 0;
    }
}
@media onluy screen and (max-width: 768px){
    .container{
        flex-direction: column;
        gap: 0rem;
        & > div{
            margin-top: 5rem;
        }
    }
    .footer__col1 .para{
        max-width: 100%;
    }
    .copyright{
        .container{
            div{
                margin-top: 0;
            }
        }
    }
}
`;

export default function FooterSection() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Gary Louw</h1>
          <Ptext>
            A freelance web designer and developer from Pretoria, Gauteng South
            Africa. I always make websites that have unique designs and also has
            a good performance rate.
          </Ptext>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: "+27672972034",
                path: "tel:+27672972034",
              },
              {
                title: "glouw79@gmail.com",
                path: "malito:glouw79@gmail.com",
              },
              {
                title: "Pretoria, Gauteng, South Africa",
                path: "https://google.com/maps/",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social Links"
            links={[
              {
                title: "GitHub",
                path: "https://github.com/GaryLouw/",
              },
              {
                title: "LinkedIn",
                path: "https://linkedin.com/in/gary-duncan-louw/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>Copyright 2022 - Gary Louw | by Web Cipher</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
