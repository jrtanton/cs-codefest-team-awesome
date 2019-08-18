const schema = {
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
      website: "www.foodbank.com",
      facebook: "www.facebook.com/foodbank",
      twitter: "www.twitter.com/foodbank",
      instagram: "www.instagram.com/foodbank",
      email: "fb@food.com",
      phone: "123-456-7890"
    },
    skills: [{ id: 1, name: "Cooking" }, { id: 2, name: "Administrative" }]
}