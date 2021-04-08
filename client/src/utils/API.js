import axios from "axios";


//hardcoded place holders for sportsradar calls
const BASEURL =
  "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/soccer-t3/eu/en/teams/sr:competitor:";

// const teamId = 48;

const scheduleUrl = "/schedule.json?api_key=";

const APIKEY = "tjvrmmgbecfp8t6k4n7njuys";

export default {
    schedule: function(query) {
        console.log("SCHEDULE SEARCH: " + query)
        return axios.get(BASEURL + query.id + scheduleUrl + APIKEY);
    }
};
//above needs to be applied as props.schedule

const resultUrl = "/results.json?api_key=";

// const teamName = "Everton";

// export default {
//     results: function() {
//         return axios.get(BASEURL + teamName + resultUrl + APIKEY);
//     }
// };
//above needs to be applied as props.result
