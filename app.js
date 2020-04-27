const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/item1", (req, res) => {
  var item1 = [
    { name: "Participate",  },
    { name: "Enter your name", },
    { name: "Enter your email", },
    { name: "Add your message",  }
  ];

  res.render("item1", { item1: item1 });
});

router.get("/nav", (req, res) => {
  res.render("nav", {
    nav: [
      {
        name: "About",
        url:
          "https://www.sequencebio.com/about"
      },
      {
        name: "Contact",
        url:
          "https://www.sequencebio.com/contact"
      },
      {
        name: "Faq",
        url:
          "https://blog.sequencebio.com/"
      }
    ]
  });
});
module.exports = router;

router.get("/ref", (req, res) => {
  res.render("ref", {
    ref: [
      {
        name: "Go to get more information",
        url:
          "https://www.nlgenomeproject.ca/"
      }
    ]
  });
});

module.exports = router;
