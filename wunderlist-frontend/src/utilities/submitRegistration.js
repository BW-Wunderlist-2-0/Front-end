import axios from "axios";

export const submitRegistration = registration => {
  console.log(`submitRegistration registration`, registration)
  axios
    .post('https://wunderlist-two.herokuapp.com/api/auth/register', registration)
    .then(res => console.log(res))
    .catch(err => console.log(err))


};
