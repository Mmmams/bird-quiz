const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const corsOptions = {
  origin: ["https://bird-quiz-mams.netlify.app", "http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ extended: true }));
app.use(require("./routes/routes"));

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.join(__dirname, "..", "client", "build")));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "client", "..", "build", "index.html")
//     );
//   });
// }

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://Mams:password123456@cluster0.nhk5g.mongodb.net/birdsdb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
start();
