import React from "react";
import { teamSchedule } from "@/src/lib/team";

function TeamSecond() {
  return (
    <section className="team-day">
      <div className="_container">
        <div className="team-day__intro">
          <h2>Our day begins, not with coffee, but with...</h2>
          <p>
            At most companies, the workday ends at 7:00 PM. But for our team,
            the pursuit of excellence never stops. We&apos;re always searching
            for new opportunities, networking across time zones, and delivering
            the best results for our clients.
          </p>
        </div>
        <div className="team-day__list">
          {teamSchedule.map((item) => (
            <article key={item.time} className="team-slot">
              <div className="team-slot__meta">
                <p className="team-slot__time">{item.time}</p>
                <h3>{item.title}</h3>
              </div>
              <p className="team-slot__content">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSecond;
