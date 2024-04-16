import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={"public/whoweare.png"} alt="whoweare" />
        </div>
        <div className="banner">
          
          <p>
          Welcome to UWeCare, where patient care and comfort are at the heart of everything we do. As a leading healthcare provider, we are committed to delivering exceptional medical services tailored to meet the unique needs of each patient.
          </p>
          
          <p> WHY CHOOSE US?
          </p>
          <p>1) Expert Medical Team: Our team of highly skilled physicians, nurses, and healthcare professionals are dedicated to providing expert care with compassion and integrity.</p>

<p>2) State-of-the-Art Facilities: We invest in the latest medical technology and equipment to ensure accurate diagnosis and effective treatment options.</p>

<p>3) Patient-Centered Care: We prioritize patient comfort and satisfaction, offering personalized treatment plans and attentive support throughout your healthcare journey.</p>

<p>4) Comprehensive Services: From routine check-ups to complex surgical procedures, we offer a wide range of medical services to meet your healthcare needs at every stage of life.</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
