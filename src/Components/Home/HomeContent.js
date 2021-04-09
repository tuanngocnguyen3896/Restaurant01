import React from "react";
import AboutTitle from "../About/AboutTitle";
import OurChef from "../OurChef/OurChef";
import ComingForm from "../ComingSoon/ComingForm";
import ComingCountDown from "../ComingSoon/ComingCountDown";
import ContactContent from "../Contact/ContactContent";
import FoodList from "../Food/FoodList";
import Counting from "../Counting/Counting";
export default function HomeContent() {
  return (
    <div>
      <AboutTitle />
      <FoodList/>
      <Counting/>
      <OurChef />
      <div className="row m-0">
        <div className="col-6 p-0">
          <ComingForm />
        </div>
        <div className="col-6 p-0">
          <ComingCountDown />
        </div>
        <ContactContent/>
      </div>
    </div>
  );
}
