# One Valley Coding Challenge

### To Run the Project On Heroku on Chrome Browser
1. Must allow cors with the following extension from
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

2. Go to the following URL: https://fruit-gallery-2021.herokuapp.com/

### To Run the Project Locally
1. cd into oneValley and run npm start
2. Open http://localhost:3000 to view it in the browser.

* Note : In order for the Api to give a response we must allow cors.
Please download and allow cors with the following extension from
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

### Dependencies
npm install react-bootstrap@next bootstrap@5.1.0

### Optimizations
* Another design approach would be to build a node + react based application and make an api to get the API response instead of a purely client based application. This will allow cross-origin API Calls.

* Currently, I am building the gallery_data object which contains the info about the fruit and the specific image url/route.
Once I have this gallery_data object build, then I build the UI based on this.
To make this optimized, we can start rendering to the UI in parallel to parsing through the fruit data we get from the API and keep fetching the images on the go.



