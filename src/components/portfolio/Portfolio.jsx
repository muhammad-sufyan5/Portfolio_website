import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/p2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.png";
import IMG5 from "../../assets/p5.png";
import IMG6 from "../../assets/p6.png";
import { Zoom, Bounce } from "react-reveal";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Moco Builders Site (UI/UX Design)",
    github: "https://bitbucket.org/bloom-rix/construction-site/src/master/",
    demo: "https://64a7e1d511c85156be1ecd08--classy-monstera-8f5c21.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "SellnBuy E-Commerce Webstore",
    github:
      "https://github.com/muhammad-sufyan5/Mern_Stack/tree/main/SellnBuy(E_Commerce%20Project)",
    demo: "https://64a7e1d511c85156be1ecd08--classy-monstera-8f5c21.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "A Pig Game (Fun Site)",
    github:
      "https://github.com/muhammad-sufyan5/Mern_Stack/tree/main/Project5(Pig%20Game)",
    demo: "https://64c556376d214d0e6ebe1ddb--unique-concha-bf3e4c.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Favorite Universities web App",
    github:
      "https://github.com/muhammad-sufyan5/Mern_Stack/tree/main/University",
    demo: "https://uni-app-green.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Travelling Site",
    github:
      "https://bitbucket.org/bloom-rix/travelling-site/src/master/Trvelling%20Website%20Design/",
    demo: "https://extraordinary-profiterole-1af2c6.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Number Guesser (Fun Site)",
    github:
      "https://github.com/muhammad-sufyan5/Mern_Stack/tree/main/Project3(Guess%20my%20number)",
    demo: "https://64c55b194de7b110f65193b4--helpful-cactus-08c805.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Bounce top duration={1800}>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </Bounce>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <Zoom top duration={1800}>
                  <img src={image} alt={title} />
                </Zoom>
              </div>
              <Zoom duration={1800}>
                <h3>{title}</h3>
              </Zoom>

              <div className="portfolio__item-cta">
                <Bounce left duration={1800}>
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                </Bounce>
                <Bounce right duration={1800}>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </Bounce>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
