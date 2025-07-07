import React from "react";

import { Button } from "../components/ui/button";
import CompanionCard from "../components/CompanionCard";
import CompanionsList from "../components/CompanionsList";
import { recentSessions } from "../constants";
import CTA from "../components/CTA";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brain Explorer"
          topic="Neura the Brain Explorer"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="124"
          name="Countsy The Number Wizard"
          topic="Countsy The Number Wizard"
          subject="Derivatives and Integrals"
          duration={35}
          color="#e5d0ff"
        />
        <CompanionCard
          id="125"
          name="Verba the Language Master"
          topic="Verba the Language Master"
          subject="Language"
          duration={45}
          color="#BDE7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full "
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
