import axios from "axios";

export const submitRegistration = registration => {
  console.log(`submitRegistration registration`, registration)
  axios
    .post('https://wunderlist-2.herokuapp.com/api/auth/register', registration)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};
