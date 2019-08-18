const events = [
  {
    id: 10,
    title: "Food Bank Volunteers Needed",
    description:
      "Various tasks, including sorting donations, creating food bags, cleaning, stocking, and helping admins.",
    time: new Date(),
    location: "1501 Independence Avenue, Bryan, Texas 77803",
    volunteers: [
      {
        id: 1,
        name: "Jarrod",
        email: "jarrod.tanton@gmail.com",
        phone: "1234561234",
        skills: [],
        eventHistory: []
      }
    ],
    organization: {
      id: 12,
      name: "FoodBank",
      description: "A place to feed hungry people",
      email: "fb@food.com"
    },
    skills: [{ id: 1, name: "Cooking" }, { id: 2, name: "Administrative" }]
  },
  {
    id: 14,
    title: "Strongman needed",
    description:
      "A mesquite tree fell over in my yard. I have a chainsaw, a handsaw, and an ax. I need someone who can operate them and chop up this tree. You can keep the wood.",
    time: new Date(),
    location: "1234 Dartmouth Ave",
    volunteers: [
      {
        id: 1,
        name: "Arnold Schwartz",
        email: "jarrod.tanton@gmail.com",
        phone: "1234561234",
        skills: [],
        eventHistory: []
      },
      {
        id: 2,
        name: "Stretch Armstrong",
        email: "jarrod.tanton@gmail.com",
        phone: "1234561234",
        skills: [],
        eventHistory: []
      }
    ],
    organization: {
      id: 16,
      name: "Greg",
      description: "Old Man with a Dog",
      email: "johndoe@gmal.com"
    },
    skills: [{ id: 3, name: "Heavy Lifting" }, { id: 4, name: "Power Tools" }]
  },
  {
    id: 17,
    title: "Moonwalkers needed",
    description:
      "Moonwalkers needed to get the attention of the aliens. NASA's voyager wasn't enough.",
    time: new Date(),
    location: "The Moon",
    volunteers: [
      {
        id: 3,
        name: "The Jackson 5",
        email: "jarrod.tanton@gmail.com",
        phone: "1231231231",
        skills: [],
        eventHistory: []
      }
    ],
    organization: {
      id: 16,
      name: "Greg",
      description: "Old Man with a Dog",
      email: "johndoe@gmal.com"
    },
    skills: [{ id: 5, name: "Dancing" }]
  },
  {
    id: 19,
    title: "CodeFest participants",
    description:
      "Participants needed for CodeFest, College Station's First Hackathon-Style Event to produce solutions to better the community through code. More info at https://cstx.gov/departments___city_hall/it/codefest",
    time: new Date(),
    location: "2275 Dartmouth St. College Station, TX 77840",
    volunteers: [
      {
        id: 1,
        name: "Jarrod",
        email: "jarrod.tanton@gmail.com",
        phone: "1234561234",
        skills: [],
        eventHistory: []
      }
    ],
    organization: {
      id: 12,
      name: "City of College Station CodeFest Team",
      description: "Home of Texas A&M University",
      email: "fb@food.com"
    },
    skills: [{ id: 8, name: "Coding" }, { id: 7, name: "Developers" }]
  }
];

export function getEvents() {
  return fetch(`http://localhost:8000/events`, {
    method: "get"
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
}

export function seedEvents() {
  events.forEach(e => {
    fetch(`http://localhost:8000/events`, {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(e)
    })
      .then(res => res.json())
      .then(data => {
        //If you need the response...
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  });
}
