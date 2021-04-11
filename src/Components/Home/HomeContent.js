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
      <ContactContent/>
    </div>
  );
}
