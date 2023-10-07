//# root
const main = (req, res) => {
  res.status(200).json({
    name: "Devify",
    description: "The Intuitive Fake API for Your Apps.",
    messege: "Welcome to Devify",
    version: "1.0.0",
    author: "Kadek Nova",
    launched: 2023,
    resources: {
      products: 50,
      users: 40,
      books: 20,
      auth: null,
    },
  });
};

export default main;
