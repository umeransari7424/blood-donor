import React from "react";

function Donation() {
  return (
    <div className="donation">
      <div className="container text-center py-5">
        <div className="row py-3" >
          <div>
            <h1 className="why">WHY DONATE BLOOD</h1>
            <p>You are not useless, know your worth by donating blood.</p>
          </div>
        </div>
        <div className="row text-start py-3">
          <div className="col-md-6 pt-5">
            <h1>Why do we need you to give blood</h1>
            <p>
              We need new blood donors from all the background to ensure there
              is right blood available for patients who needs it.
            </p>
            <div>
            <h1 className="text-start">We need:</h1>
            <ul className="text-start">
              <li>Atleast 400 donors to meet the present demand</li>
              <li>
                Around 1350 donors a year to replace those who can no longer
                donate
              </li>
              <li>
                3000 new donors with priority blood types such as O negative
                every year
              </li>
              <li>
                More young people to start giving blood so we can make sure we
                have enough blood in the future
              </li>
            </ul>
          </div>
          </div>
          <div className="col-md-6">
            <img src="/Assets/question.png" alt="blood" className="img-fluid" />
          </div>
         
        </div>
        <div className="row  py-3">
          <div>
            <h1 className="why">CAN YOU DONATE BLOOD</h1>
            <p>
              Giving blood saves lives. The blood you give is a lifeline in an
              emergency and for people who need longterm treatments.
            </p>
          </div>
        </div>
        <div className="row text-start py-5">
          <div className="col-md-6 donate2">
          <div>
            <h1>Who can give blood</h1>
            <p>Find out if you are able give blood for the first time.</p>
          </div>
          <div>
            <h1 className="text-start">On this page:</h1>
            <ul className="text-start">
              <li> Who can donate</li>
              <li>Who cant donate</li>
              <li>Who might have to wait to donate</li>
              <li>Female donors</li>
              <li>How often can I give blood?</li>
            </ul>
          </div>
          </div>
          <div className="col-md-6 ">
            <img src="/Assets/who.jpg" alt="blood" className="img-fluid" />
          </div>
        </div>
        <div className="row text-start py-5">
        <div className="col-md-6 ">
            <img src="/Assets/patient.jpg" alt="blood" className="img-fluid" />

          </div>
          <div className="col-md-6 donate">
          <div>
            <h1>Who can donate blood</h1>
            <p>To donate blood you will need to :</p>
          </div>
          <div>
            <h1 className="text-start"></h1>
            <ul className="text-start">
              <li>Be generally fit and well</li>
              <li>Be aged between 17 and 65</li>
              <li>Weigh between 7 stone 12 lbs (50kg) and 25 stone (158kg)</li>
              <li>
                Have suitable veins (we will check these before you donate)
              </li>
              <li>
                Meet all donor eligibility criteria (we will check this with you
                before you donate)
              </li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Donation;
