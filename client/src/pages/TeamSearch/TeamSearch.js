import React from "react";
import "./TeamSearch.css";


class TeamSearch extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="grid-container">
            <div className="grid-x margin-x align-center">
              <div className="cell medium-6">
                <div className="translucent-form-overlay">
                  <form id="sign-up-form">
                    <h3>Search for Teams</h3>
                    <div className="row columns"></div>
                    <div className="row columns">
                      <label>
                        Sport
                        <select id="sportinput" name="status" type="text">
                          <option value="soccer">Soccer</option>
                        </select>
                      </label>
                    </div>
                    <div className="row columns">
                      <label>
                        League
                        <select id="leagueinput" name="status" type="text">
                          <option value="epl">English Premier League</option>
                        </select>
                      </label>
                    </div>
                    <div className="row columns">
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
                    <button className="primary button expanded">Search</button>
                  </form>
                </div>
              </div>
              <div className="cell medium-6">
                <div className="status-update-input-box">
                  <form id="about-me-button">
                    <div className="row input-box-container">
                      <div className="columns">
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
                    <div className="row medium-collapse user-action-container">
                      <div className="small-12 medium-7 columns">
                        <div className="user-action-box">
                          <div className="action-area">
                            <a
                              href=""
                              className="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabIndex="2"
                              title="Upload a Photo"
                            >
                              <i className="fa fa-picture-o" aria-hidden="true"></i>
                              <span className="show-for-sr">Upload a Photo</span>
                            </a>
                          </div>
                          <div className="action-area">
                            <a
                              href=""
                              className="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabIndex="2"
                              title="Upload a Video"
                            >
                              <i
                                className="fa fa-video-camera"
                                aria-hidden="true"
                              ></i>
                              <span className="show-for-sr">Upload a Video</span>
                            </a>
                          </div>
                          <div className="action-area">
                            <a
                              href=""
                              className="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabIndex="2"
                              title="Check in"
                            >
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              <span className="show-for-sr">Check in</span>
                            </a>
                          </div>
                          <div className="action-area">
                            <a
                              href=""
                              className="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabIndex="2"
                              title="Add a Feeling"
                            >
                              <i className="fa fa-smile-o" aria-hidden="true"></i>
                              <span className="show-for-sr">Add a Feeling</span>
                            </a>
                          </div>
                          <div className="action-area">
                            <a
                              href=""
                              className="action-anchor has-tip bottom"
                              data-tooltip
                              aria-haspopup="true"
                              data-disable-hover="false"
                              tabIndex="2"
                              title="Tag a Friend"
                            >
                              <i className="fa fa-tags" aria-hidden="true"></i>
                              <span className="show-for-sr">Tag a Friend</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="small-12 medium-5 columns">
                        <button className="primary button expanded">Submit</button>
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
            <footer className="social-footer">
              <div className="social-footer-left">
                <a href="#">
                  <img className="logo" src="" />
                </a>
              </div>
              <div className="social-footer-icons">
                <ul className="menu simple">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/?hl=en">
                      <i className="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/?lang=en">
                      <i className="" aria-hidden="true"></i>
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
