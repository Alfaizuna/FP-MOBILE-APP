import React, {Component} from 'react';
import axios from 'axios';

// const axios = require('axios');
const linkApi = 'http://192.168.1.4:8080/car';

// doLogin = (userLogin) => {
//     axios
//       .post(linkApi+'/user', userLogin)
//     //   .then(function (response) {
//     //     console.log(response);
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });
// };

loginBackEnd = user => {
  axios.post(linkApi + '/login', user);
};
export default {loginBackEnd};
