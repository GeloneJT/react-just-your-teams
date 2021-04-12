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
    </form>
  );
}
