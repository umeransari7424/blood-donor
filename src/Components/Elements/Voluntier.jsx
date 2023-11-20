import React from 'react';

const Voluntier = () => {
  return (
    <section className="section-content-block section-client-testimonial">
      <div className="container">
        <div className="testimonial-container text-center">
          <Testimony
            quote="I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else’s life makes me feel great!"
            author="Brandon Munson"
            position="CTO, Fulcrum Design, USA"
          />
          <Testimony
            quote="I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind."
            author="Brandon Munson"
            position="CTO, Fulcrum Design, USA"
          />
          <Testimony
            quote="I wish I could tell you my donor how grateful I am for your selfless act. You gave me new life. We may be coworkers or schoolmates or just two in the same community. I'm very grateful to you."
            author="Brandon Munson"
            position="CTO, Fulcrum Design, USA"
          />
        </div>
      </div>
    </section>
  );
};

const Testimony = ({ quote, author, position }) => {
  return (
    <div className="col-md-10 col-md-offset-1 col-sm-12">
      <div className="testimony-layout-1">
        <h3 className="people-quote">Donor Opinion</h3>
        <p className="testimony-text">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          {quote}
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </p>
        <h6>{author}</h6>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default Voluntier;
