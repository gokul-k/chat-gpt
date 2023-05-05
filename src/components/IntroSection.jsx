import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing Yoda
        <BotResponse response=" - Your Offer AI assistant" />
      </h1>
      <h2>
        PayU Offer Engine helps you create offers in way you never imagined before. All you need to do is tell Yoda what you want. No more worries on offers and promotions, cause Yoda has you covered.
        <br />
      </h2>
      Features:
      <ul>
        <li>Creating Offers of your choice</li>
        <li>Opt in for recommended offers for your customers</li>
        <li>Check performance of your live offers</li>
        <li>Boost efficiency of your offers with AI generated insights</li>
      </ul>
      <p>
        Say goodbye to multiple clicks and operational burden, whether you need information or create an offer, type it in for Yoda.
      </p>
    </div>
  );
};

export default IntroSection;
