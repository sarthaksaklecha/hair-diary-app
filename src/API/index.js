import axios from "axios";

const data = (dispatch) => {
    axios.post("http://devapi.quinn.care/graph",{
    "requestobjects": [
      {
        "posts": {
          "operationtype": "read",        
          "id": {
            "return": true
          },
          "userid": {
            "searchvalues" : ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
            "return": true
          },
          "iscalendarentry": {
              "searchvalues" : ["true"],
            "return": true
          },        
          "media": {
            "return": true //contains image url
          },
          "rating": {
            "return": true
          },
          "text": {
            "return": true
          },
          "privacy": {
            "searchvalues": [
              18
            ],
            "return": true
          },
          "typeofday": {
            "return": true
          },
  
          // Don't change anything above ^^	
          //editable variables start below //
  
          "calendardatetime": { // Date Time of a particular post
            "return": true  , // please note: there can be multiple posts on a single day
            "sort" : "ascending" // you can sort fetched dates by ascending/descending.
          },
          "maxitemcount": "50",   //you can ask between 1 to 50 posts (max) at a time.
          "continuationtoken": null, //replace with the continuation token from response to get the next set
        }
      }
    ]
  }).then(d =>{ 
      dispatch({type:"SET", payload:d.data.responseobjects[0].posts})
    })
  .catch(console.log);
  }
  export default data;