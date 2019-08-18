export function createOrganization(organization) {
  fetch(`http://localhost:8000/organizations`, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(organization)
  })
    .then(res => res.json())
    .then(data => {
      //If you need the response...
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
}
