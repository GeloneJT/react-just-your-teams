import React from "react";

function TeamSearchForm() {
  return (
    <form className="translucent-form-overlay" method="POST">
      <h3>Search for Teams</h3>
      <label>
        Sport
        <select id="sport-input" name="status" type="text">
          <option value="soccer">Soccer</option>
        </select>
      </label>
      <label>
        League
        <select id="league-input" name="status" type="text">
          <option value="epl">English Premier League</option>
        </select>
      </label>
      <label>
        Teams
        <select id="teams-input" name="status" type="text">
          <option value="Arsenal FC">Arsenal FC</option>
          <option value="Aston Villa FC">Aston Villa FC</option>
          <option value="Brighton & Hove Albion FC">
            Brighton & Hove Albion FC
          </option>
          <option value="Burnley FC">Burnley FC</option>
          <option value="Chelsea FC">Chelsea FC</option>
          <option value="Crystal Palace FC">Crystal Palace FC</option>
          <option value="Everton FC">Everton FC</option>
          <option value="Fulham FC">Fulham FC</option>
          <option value="Leeds United">Leeds United</option>
          <option value="Leicester City FC">Leicester City</option>
          <option value="Liverpool FC">Liverpool FC</option>
          <option value="Manchester City FC">Manchester City FC</option>
          <option value="Manchester United FC">Manchester United FC</option>
          <option value="Newcastle United FC">Newcastle United FC</option>
          <option value="Sheffield United FC">Sheffield United FC</option>
          <option value="Southampton FC">Southampton FC</option>
          <option value="Tottenham Hotspur FC">Tottenham Hotspur</option>
          <option value="West Bromwich Albion">West Bromwich Albion</option>
          <option value="West Ham United FC">West Ham United FC</option>
          <option value="Wolverhampton Wanderers FC">
            Wolverhampton Wanderers
          </option>
        </select>
      </label>
    </form>
  );
}
