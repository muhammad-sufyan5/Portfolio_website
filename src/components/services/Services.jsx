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
              <h3>API Development and Integration</h3>
            </Zoom>
          </div>
          <Bounce right duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Creating scalable RESTful APIs</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Authentication and Authorization</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Rate Limiting and Throttling</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Error Handling and Validation</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Integration with Third-Party Services</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Versioning and Maintenance</p>
              </li>
            </ul>
          </Bounce>
        </article>

        {/* end of API Development and Integration */}

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

        {/* end of Content creation */}

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
              <h3>Real-Time Features</h3>
            </Zoom>
          </div>
          <Bounce bottom duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>WebSocket Communication</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Real-Time Notifications</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Real-Time Chat and Messaging</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Live Data Streaming</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Push Notifications</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Real-Time Analytics and Dashboards</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Instant Synchronization Across Devices</p>
              </li>
            </ul>
          </Bounce>
        </article>

        {/* end of Real-Time Features */}

        <article className="service">
          <div className="service__head">
            <Zoom duration={1800}>
              <h3>Custom Laravel Development</h3>
            </Zoom>
          </div>
          <Bounce right duration={1800}>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Middleware Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Advanced Eloquent ORM Customizations</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Blade Templating</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Integration of Third-Party APIs</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Artisan Commands</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Authentication Systems</p>
              </li>
            </ul>
          </Bounce>
        </article>

        {/* end of Custom Laravel Development */}
      </div>
    </section>
  );
};

export default Services;
