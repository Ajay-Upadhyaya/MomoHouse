import React from "react";
import AllergySection1 from "../Allergy Advice Components/AllergySection1";
import Ingredients from "../Allergy Advice Components/Ingredients";
import AllergySection3 from "../Allergy Advice Components/AllergySection3";

function AllergyAdvice() {
  return (
    <div>
      <AllergySection1 />
      <Ingredients />
      <AllergySection3 />
    </div>
  );
}

export default AllergyAdvice;
