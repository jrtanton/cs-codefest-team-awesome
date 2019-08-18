export function login(email) {
  return fetch(`http://localhost:8000/volunteers/`, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ email })
  })
    .then(res => res.json())
    .then(data => {
      return data;
      //If you need the response...
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
}
