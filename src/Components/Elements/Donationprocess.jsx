import React from 'react';

const DonationProcess = () => {
  return (
    <section className="section-content-block section-process">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading">
              <span>Donation</span> Process
            </h2>
            <p className="section-subheading">
              The donation process from the time you arrive center until the time you leave
            </p>
          </div>
        </div>

        <div className="row wow fadeInUp">
          <ProcessStep
            stepNumber="1"
            imageSrc="/Assets/process_1.jpg"
            title="Registration"
            description="You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process."
          />

          <ProcessStep
            stepNumber="2"
            imageSrc="/Assets/process_2.jpg"
            title="Screening"
            description="A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process."
          />

          <ProcessStep
            stepNumber="3"
            imageSrc="/Assets/process_3.jpg"
            title="Donation"
            description="After ensuring and passing the screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes."
          />

          <ProcessStep
            stepNumber="4"
            imageSrc="/Assets/process_4.jpg"
            title="Refreshment"
            description="You can also stay in the sitting room until you feel strong enough to leave our center. You will receive an awesome drink from us in the donation zone."
          />
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ stepNumber, imageSrc, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 py-4" >
      <div className="card  process-layout">
        <figure className="process-img">
          <img src={imageSrc} alt={`process ${stepNumber}`} />
          <div className=" p-2 step">
            <h3>{stepNumber}</h3>
          </div>
        </figure>
        <article className=" p-2 process-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </div>
    </div>
  );
};

export default DonationProcess;
