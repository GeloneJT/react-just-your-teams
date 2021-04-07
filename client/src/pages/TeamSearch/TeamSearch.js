import React from "react";
import "./TeamSearch.css";


class TeamSearch extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <nav class="top-bar topbar-responsive">
              <div id="topbar-responsive" class="topbar-responsive-links">
                <div class="top-bar-right">
                  <ul class="menu simple vertical medium-horizontal">
                    <li>
                      <button
                        id="userpage"
                        type="button"
                        class="button hollow topbar-responsive-button"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        id="team-search"
                        type="button"
                        class="button hollow topbar-responsive-button"
                      >
                        Update Profile
                      </button>
                    </li>
                    <li>
                      <button
                        id="logout-link"
                        type="button"
                        class="button hollow topbar-responsive-button"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <br />
        <section>
          <div class="grid-container">
            <div class="grid-x margin-x align-center">
              <div class="cell medium-6">
                <div class="translucent-form-overlay">
                  <form id="sign-up-form">
                    <h3>Search for Teams</h3>
                    <div class="row columns"></div>
                    <div class="row columns">
                      <label>
                        Sport
                        <select id="sportinput" name="status" type="text">
                          <option value="soccer">Soccer</option>
                        </select>
                      </label>
                    </div>
                    <div class="row columns">
                      <label>
                        League
                        <select id="leagueinput" name="status" type="text">
                          <option value="epl">English Premier League</option>
                        </select>
                      </label>
                    </div>
                    <div class="row columns">
                      <label>
                        Teams
                        <select id="teamsinput" name="status" type="text">
                          <option value="arsenal">Arsenal FC</option>
                          <option value="aston-villa">Aston Villa FC</option>
                          <option value="brighton">
                            Brighton & Hove Albion FC
                          </option>
                          <option value="burnley">Burnley FC</option>
                          <option value="chelsea">Chelsea FC</option>
                          <option value="crystal-palace">
                            Crystal Palace FC
                          </option>
                          <option value="everton">Everton FC</option>
                          <option value="fulham">Fulham FC</option>
                          <option value="leeds-united">Leeds United</option>
                          <option value="leicester-city">Leicester City</option>
                          <option value="liverpool">Liverpool FC</option>
                          <option value="manchester-city">
                            Manchester City FC
                          </option>
                          <option value="manchester-united">
                            Manchester United FC
                          </option>
                          <option value="newcastle-united">
                            Newcastle United FC
                          </option>
                          <option value="sheffield-united">
                            Sheffield United FC
                          </option>
                          <option value="southampton">Southampton FC</option>
                          <option value="tottenham-hotspur">
                            Tottenham Hotspur
                          </option>
                          <option value="west-bromwich-albion">
                            West Bromwich Albion
                          </option>
                          <option value="west-ham-united">
                            West Ham United FC
                          </option>
                          <option value="wolverhampton-wanderers">
                            Wolverhampton Wanderers
                          </option>
                        </select>
                      </label>
                    </div>
                    <button class="primary button expanded">Search</button>
                  </form>
                </div>
              </div>
              <div class="cell medium-6">
                <div class="status-update-input-box">
                  <form id="about-me-button">
                    <div class="row input-box-container">
                      <div class="columns">
                        <label>
                          {/* <!-- Add a Label here to give this input box a heading --> */}
                          <textarea
                            id="aboutme"
                            rows="5"
                            placeholder="Lets hear about you sports fan!"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div class="row medium-collapse user-action-container">
                      <div class="small-12 medium-7 columns">
                        <div class="user-action-box">
                          <div class="action-area">
                            <a
                              href="#"
                              class="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabindex="2"
                              title="Upload a Photo"
                            >
                              <i class="fa fa-picture-o" aria-hidden="true"></i>
                              <span class="show-for-sr">Upload a Photo</span>
                            </a>
                          </div>
                          <div class="action-area">
                            <a
                              href="#"
                              class="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabindex="2"
                              title="Upload a Video"
                            >
                              <i
                                class="fa fa-video-camera"
                                aria-hidden="true"
                              ></i>
                              <span class="show-for-sr">Upload a Video</span>
                            </a>
                          </div>
                          <div class="action-area">
                            <a
                              href="#"
                              class="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabindex="2"
                              title="Check in"
                            >
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              <span class="show-for-sr">Check in</span>
                            </a>
                          </div>
                          <div class="action-area">
                            <a
                              href="#"
                              class="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabindex="2"
                              title="Add a Feeling"
                            >
                              <i class="fa fa-smile-o" aria-hidden="true"></i>
                              <span class="show-for-sr">Add a Feeling</span>
                            </a>
                          </div>
                          <div class="action-area">
                            <a
                              href="#"
                              class="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabindex="2"
                              title="Tag a Friend"
                            >
                              <i class="fa fa-tags" aria-hidden="true"></i>
                              <span class="show-for-sr">Tag a Friend</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="small-12 medium-5 columns">
                        <button class="primary button expanded">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>
          <div>
            <footer class="social-footer">
              <div class="social-footer-left">
                <a href="#">
                  <img class="logo" src="" />
                </a>
              </div>
              <div class="social-footer-icons">
                <ul class="menu simple">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i class="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/?hl=en">
                      <i class="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i class="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/?lang=en">
                      <i class="" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default TeamSearch;
