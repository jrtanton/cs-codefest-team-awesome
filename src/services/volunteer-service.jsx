export function createVolunteer(volunteer) {
  fetch(`http://localhost:8000/volunteers`, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(volunteer)
  })
    .then(res => res.json())
    .then(data => {
      //If you need the response...
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
}
