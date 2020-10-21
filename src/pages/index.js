import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-3">
          I am currently enrolled in a post-baccalaureate program at Oregon State University to obtain a 
          second bachelor's in Computer Science to transition into software engineering.</p>
          <p className="lead mb-5">
          My journey into software development began as a Corporate Investigations and Internal Audit Manager at a non-profit.  During my time in that role I identified opportunities for 
          efficiencies across multiple departments. My insatiable appetite for learning led me to acquire new skills in programming, providing 
          me the ability to develop tools and convert those opportunities into reality. In addition I was heavily involved in multiple 
          software implementation projects exposing me to the software development life cycle from a customer standpoint. 
          These experiences realized my passion for software. 
          </p>
          <div className="social-icons d-flex flex-row justify-content-center">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Oregon State University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2021 - December 2022 (Expected)</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of California, San Diego</h3>
              <div className="subheading mb-3">Bachelor of Art</div>
              <div>Philosophy</div>
              <div>Minor: Law & Society</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Secrets</h3>
              <div className="subheading">Anonymous Secrets Posts</div>
              <p>Express, OAuth 2.0, Mongoose</p>
              <a className="btn btn-dark" href="http://secretsdemo.herokuapp.com/" target="_blank">Live Demo Here!</a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Taskmaster</h3>
              <div className="subheading">To-Do List</div>
              <p>Express, MongoDB, EJS</p>
              <a className="btn btn-dark" href="http://taskmastertodo.herokuapp.com/" target="_blank">Live Demo Here!</a>
            </div>
          </div>

          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Corporate Investigations & Internal Audit Manager</h3>
              <div className="subheading mb-3">Goodwill Industries of Orange County</div>
              <ul>
                <li>Developed a forklift license renewal tracker with Visual Basic for Applications (VBA) to send automated
emails notifying supervisors of upcoming recertification dates for employees in their department.</li>
                <li>Instituted the first iteration of an online training program in 2018 allowing the organization to analyze
learning metrics. Employee engagement increased by at least 60%.</li>
                <li>Produced, filmed, and edited videos, which were then uploaded onto YouTube to promote employee
engagement and widespread access to material. Videos edited with Adobe Premiere Pro.</li>
                <li>Created tutorials, how-to guides, and documentation to facilitate an environment for self-learning and
professional development.</li>
                <li>Collaborated with IT and Human Resources departments to leverage existing software in order to create
new processes in various parts of the company, eliminating the need for additional expenditures, which
resulted in a savings of $20,000 in 2019.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2015 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i><br></br>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git-square"></i>
            </li>
          </ul>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            When I'm not working or studying, I find bliss when laying down in my bed listening to music on vinyl.
            I love live music and that feeling when you stumble upon an amazing band on Spotify.  I am Arctic Monkey's self-proclaimed #1 fan.  Don't @ me.
            If i'm not submerged in sounds, you'll often find me at the movie theater watching the latest blockbuster or indie flick.  
          </p>
          <p className="mt-3">On the weekends I might enjoy a drink or two with my mates, but not too much.  Moderation is 🔑.</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
