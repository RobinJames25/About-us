import "../components/css/services.css";

const Services = () => {
    return(
        <div>
            <header className="services-header">
        <h1>Coast Jobs Services</h1>
      </header>

      <main>
        {/* Career Overview */}
        <section className="career-services" aria-label="Career Services Overview">
          <h2>Career Services</h2>
          <p>
            At Coast Jobs, we offer impactful career services designed to help you stand out and land your dream job.
          </p>
        </section>

        {/* CV Review Section */}
        <section className="services-row" aria-label="CV Reviews and Writing">
          <div className="services-box">
            <h3>CV Reviews and Writing</h3>
            <div className="services-content">
              <div className="text">
                <p>
                  Your CV or Resume may be the reason you're getting <span className="highlight">Zero</span> interview invites. For a friendly fee of
                  <span className="highlight"> 1000ksh</span>, Coast Job can review your CV and write you a professional ATS Compliant CV that will get you noticed.
                </p>
                <p>
                  Write to us at
                  <a href="mailto:jobs@coastjobs.co.ke"> jobs@coastjobs.co.ke</a> with the subject line <strong>"CV Review"</strong>.
                </p>
              </div>
              <img src="./images/Background.jpg" alt="CV Writing Service Illustration" width="300" />
            </div>
          </div>
        </section>

        {/* Mock Interviews Section */}
        <section className="services-row" aria-label="Mock Interviews and Preparation">
          <div className="services-box">
            <h3>Mock Interviews & Interview Preparation</h3>
            <div className="services-content">
              <img src="./images/Background.jpg" alt="Mock Interview Coaching Session Image" width="300" />
              <div className="text">
                <p>
                  Do you have jitters during interviews?<br />
                  Do you feel that you don't sell yourself well during interviews?<br />
                  Do you need Mock practice interviews?
                </p>
                <p>
                  If the answer to any of the questions is YES email us at
                  <a href="mailto:jobs@coastjobs.co.ke"> jobs@coastjobs.co.ke</a> with the subject line <strong>"Mock Interviews"</strong> for a Session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Talks Section */}
        <section className="services-row" aria-label="Career Talks and Workshops">
          <div className="services-box">
            <h3>Career Talks and Workshops</h3>
            <div className="services-content">
              <div className="text">
                <p>
                  Are you an NGO, Youth Center, or a Government Agency and want to conduct a career talk or workshop?
                </p>
                <p>
                  Coast Jobs brings Real Stories, Real Advice and Real Inspiration for our Youths and Job Seekers.
                  Send us an email at
                  <a href="mailto:jobs@coastjobs.co.ke"> jobs@coastjobs.co.ke</a>
                </p>
              </div>
              <img src="./images/Background.jpg" alt="Career Workshop Presentation Image" width="300" />
            </div>
          </div>
        </section>

        {/* Internships & Placements Section */}
        <section className="services-row" aria-label="Internships and Job Placement">
          <div className="services-box">
            <h3>Work & Internship Placement</h3>
            <div className="services-content">
              <img src="./images/Background.jpg" alt="Internship and Placement Program Visual" width="300" />
              <div className="text">
                <p>
                  We partner with NGO's and Institutions to place youths and students to jobs, Internships and attachment. Write to us <br />
                  <a href="mailto:jobs@coastjobs.co.ke">jobs@coastjobs.co.ke</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
    )
}

export default Services