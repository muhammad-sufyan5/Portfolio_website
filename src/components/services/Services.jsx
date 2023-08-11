import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";
const Services = () => {
  return (
    <section id="services">
      <Bounce top duration={1800}>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </Bounce>

      <div className="container services__container">
        
          <article className="service">
            
            <div className="service__head">
            <Zoom duration={1800}>
            <h3>UI/UX Design</h3>
            </Zoom>
              
            </div>
            <Bounce left duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive Web Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Component Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>User Interface (UI) Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>User Experience (UX) Optimization</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Performance Optimization</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Accessibility Implementation</p>
              </li>
            </ul>
            </Bounce>
          </article>
        

        {/* end of UI */}
        
          <article className="service">
            <div className="service__head">
              <Zoom duration={1800}>
              <h3>Web Development</h3>
              </Zoom>
              
            </div>
            <Bounce bottom duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Front-End Development.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Back-End Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive Web Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Cross-Browser Compatibility</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Web Performance Optimization</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Content Management Systems (CMS)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Web Hosting and Deployment</p>
              </li>
            </ul>
            </Bounce>
          </article>
        

        {/* end of web development */}
        
          <article className="service">
            <div className="service__head">
              <Zoom duration={1800}>
              <h3>E-Commerce Solutions</h3>
              </Zoom>
              
            </div>
            <Bounce right duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Product Catalog Management</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Shopping Cart and Checkout Process</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Customer Accounts and Profiles</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Inventory Management</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Shipping and Logistics</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Sales and Promotions</p>
              </li>
            </ul>
            </Bounce>
          </article>
        

        {/* end of Contentn creation */}
      </div>
    </section>
  );
};

export default Services;
