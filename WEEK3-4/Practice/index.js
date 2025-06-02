const express = require("express");
const app = express();

app.use(express.json());

var users = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/getkidneydata", (req, res) => {
  let jhonkidneys = users[0].kidneys;
  let healthykidneys = 0;

  for (let i = 0; i < jhonkidneys.length; i++) {
    if (jhonkidneys[i].healthy == true) {
      healthykidneys++;
    }
  }
  res.json({ healthykidneys: healthykidneys, jhonkidneys: jhonkidneys });
});

app.post("/addkidney", (req, res) => {
  const { kidney } = req.body;
  users[0].kidneys.push(kidney);
  res.json({ message: "Kidney added." });
});

app.put("/update", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({ users });
});

app.delete("/delete", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == false) {
      users[0].kidneys.splice(i, 1);
    }
  }
  res.json({ users });
});

app.listen(3000, () => {
  console.log("Server is running.");
});
