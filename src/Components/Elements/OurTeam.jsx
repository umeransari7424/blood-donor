import React from 'react';

const OurTeam = () => {
  return (
    <section className="section-content-block section-secondary-bg section-our-team">
      <div className="container wow fadeInUp">
        <div className="row section-heading-wrapper">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">Our Volunteers</h2>
            <p className="section-subheading">
              The volunteers who give their time and talents help to fulfill our mission.
            </p>
          </div>
        </div>

        <div className="row">
          <TeamMember
            name="ALEXANDER GARY"
            role="Co-Founder"
            imageSrc="/Assets/team_9.jpg"
            // socialLinks={[
            //   { icon: 'fa-facebook', title: 'Facebook' },
            //   { icon: 'fa-twitter', title: 'Twitter' },
            //   { icon: 'fa-google-plus', title: 'Google Plus' },
            //   { icon: 'fa-linkedin', title: 'Linkedin' },
            // ]}
          />

          <TeamMember
            name="MELISSA MUNOZ"
            role="Founder"
            imageSrc="/Assets/team_6.jpg"
            // socialLinks={[
            //   { icon: 'fa-facebook', title: 'Facebook' },
            //   { icon: 'fa-twitter', title: 'Twitter' },
            //   { icon: 'fa-google-plus', title: 'Google Plus' },
            //   { icon: 'fa-linkedin', title: 'Linkedin' },
            // ]}
          />

          <TeamMember
            name="JOHN ABRAHAM"
            role="Manager"
            imageSrc="/Assets/team_7.jpg"
            // socialLinks={[
            //   { icon: 'fa-facebook', title: 'Facebook' },
            //   { icon: 'fa-twitter', title: 'Twitter' },
            //   { icon: 'fa-google-plus', title: 'Google Plus' },
            //   { icon: 'fa-linkedin', title: 'Linkedin' },
            // ]}
          />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="col-lg-4 col-md-offset-0 col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
      <div className="team-layout-1">
        <figure className="team-member">
          <a href="#" title={name}>
            <img src={imageSrc} alt={name} />
          </a>
        </figure>
        <article className="team-info">
          <h3>{name}</h3>
          <h4>{role}</h4>
        </article>
        <div className="team-content">
          <div className="team-social-share text-center clearfix">
            {/* {socialLinks.map((link, index) => (
              <a key={index} className={`fa ${link.icon} rectangle`} href="#" title={link.title}></a>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
