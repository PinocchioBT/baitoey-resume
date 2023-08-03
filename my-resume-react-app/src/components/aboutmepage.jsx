import React from "react";
import "./aboutmepage.css"



function About() {
  return (
    <>
      <div className="why-hireme-text">
        <h1>Why Hire Me?</h1>
      </div>
      <div className="my-skills">
        <div className="first skill-wrapper">
          <div className="skill-icon-wrapper">
            <div className="skill-icon">
             <img src="src\image\CommunicativeIcon.png"></img>
            </div>
          </div>
          <div class="topic">
            <p>Communicative</p>
          </div>
          <div class="topic-infor">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo optio tempora accusamus, eius voluptas id?
            </p>
          </div>
        </div>
        <div className="second skill-wrapper">
          <div className="skill-icon-wrapper">
            <div className="skill-icon">
            <img src="src\image\ProfessionalIcon.png"></img>
            </div>
          </div>
          <div class="topic">
            <p>Professional</p>
          </div>
          <div class="topic-infor">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              unde pariatur odio quasi nemo sequi.
            </p>
          </div>
        </div>
        <div className="third skill-wrapper">
          <div className="skill-icon-wrapper">
            <div className="skill-icon">
           <img src="src\image\CollaborativeIcon.png"></img>
            </div>
          </div>
          <div class="topic">
            <p>Colloborative</p>
          </div>
          <div class="topic-infor">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cum
              est doloribus omnis magni similique!
            </p>
          </div>
        </div>
        <div className="fourth skill-wrapper">
          <div className="skill-icon-wrapper">
            <div className="skill-icon">
              <img src="src\image\ClientIcon.png"></img>
            </div>
          </div>
          <div class="topic">
            <p>Client's Favourite</p>
          </div>
          <div class="topic-infor">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique earum laborum? Error, voluptas quis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
