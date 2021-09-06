# One Valley Coding Challenge

## Notes

For Api to give a response must allow cors.
Can download and allow cors with the following extension from
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

### To Run the Project On Heroku
Go to the following URL:

### To Run the Project Locally
cd into oneValley and run npm start
Open http://localhost:3000 to view it in the browser.


### Optimizations
Currently, I am building the gallery_data object which contains the info about the fruit and the specific image url/route.
Once I have this gallery_data object build, then I build the UI based on this.

To make this optimized, we can start rendering to the UI in parallel to parsing through the fruit data we get from the API and keep fetching the images on the go.



# Dependencies
npm install react-bootstrap@next bootstrap@5.1.0
npm i @material-ui/core