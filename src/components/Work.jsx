import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import game from "../assets/game.png"
import news from "../assets/newsApp.png"
import wheather from "../assets/wheather.jpg"
import food from "../assets/foodizz.png"
import port from "../assets/random.jpg"
import todo from "../assets/todo.png"
import padhai from "../assets/padhai.png"
const Work = () => {
  return (
    <div id="work">
      <h2>PROJECTS.</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
           
           <div className="workItem">
                <img src= {padhai}  alt="study" />
                <aside>
                  <h3>PadhAI</h3>
                  <p> A web app designed for providing end to end assistance to college students..  </p>
                  <a href="https://allinone-two.vercel.app/" target="blank">
                    View Demo
                  </a>
                </aside>
              </div>

           <div className="workItem">
                <img src= {game}  alt="game" />
                <aside>
                  <h3>NARUTOvsTHANOS</h3>
                  <p> NARUTOvsTHANOS is a web game  using basic html,css and js </p>
                  <a href="https://rajkamalsingh5.github.io/NARUTOvsTHANOS2.0/" target="blank">
                    View Demo
                  </a>
                </aside>
              </div>

           <div className="workItem">
                <img src= {food}  alt="Foodizz" />
                <aside>
                  <h3>Foodizz</h3>
                  <p>Foodizz is a fullstack website made by a food lover for food lovers..</p>
                  <a target="blank" href="https://foodizz-liart.vercel.app/cart">
                    View Demo
                  </a>
                </aside>
              </div>

              <div className="workItem">
                <img src={port} alt="portfolio" />
                <aside>
                  <h3>Portfolio</h3>
                  <p> portfolio showcasing my project work along with my other skills..</p>
                  <a target="blank" href="/">
                    View Demo
                  </a>
                </aside>
              </div>
              <div className="workItem">
                <img src= {wheather}  alt="WheatherApp" />
                <aside>
                  <h3> WheatherApp</h3>
                  <p>This website is made with html ,css and js using wheather api..</p>
                  <a target="blank" href="https://rajkamalsingh5.github.io/wheatherapp/">
                    View Demo
                  </a>
                </aside>
              </div>

              <div className="workItem">
                <img src= {news}  alt="newsApp" />
                <aside>
                  <h3>KhabarBarabar-A NewsApp</h3>
                  <p>KhabarBarabar is a api based website for fetching global news </p>
                  <a href=" https://github.com/rajkamalsingh5/NewsApp.git" target="blank">
                    View Demo
                  </a>
                </aside>
              </div>

              <div className="workItem">
                <img src= {todo}  alt="Todo" />
                <aside>
                  <h3>Todo- Your time saver</h3>
                  <p>A web development project which can save time by managing tasks.</p>
                  <a href="https://todo-chb2.vercel.app/" target="blank">
                    View Demo
                  </a>
                </aside>
              </div>
            
            
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;