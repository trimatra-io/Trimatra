import React from "react";
import TeamCard from "@/components/about/userteam";

export default function OurTeams() {
  return (
    <section id="OurTeams">
      <div className="text-white  text-3xl text-center font-bold">
        <h1>
          Good Team Work Behind <br />
          Trimatra Studio
        </h1>
        <div className="py-16">
          <TeamCard />
        </div>
      </div>
    </section>
  );
}
