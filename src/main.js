// import { project } from './project';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#showBeer").click(function() {

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.punkapi.com/v2/beers/random";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#beerName h3').text(`You should try ${ body[0].name }`);
      $('#beerName h4').text(`You should try ${ body[0].tagline }`);
    }, function(error) {
      $('#beerName h3').text(`There was an error loading your request: ${error.responseText}.  Please try again.`);
    });
  });
});

//     $.get("https://api.punkapi.com/v2/beers/random").then(function(response) {
//       $('#beerName h3').text(`You should try ${ response[0].name }`);
//       $('#beerName h4').text(`You should try ${ response[0].tagline }`);
//     }).fail(function(error) {
//       $('#beerName h3').text(`There was an error loading your request: ${error.responseText}.  Please try again.`);
//     });
//   });
// });
