const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const app = express();
const JWT_SECRET = "MVP"; 

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Madhu@9100',
  database: 'mvp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/", async (request, response) => {
  try{
    const query_result=await pool.query("Select * from mvp.submissions");
    response.send({query_result});
  }
  catch(error){
    console.log("Error in submission :",error);
    response.status(500).send({error: "server issue"});
  }
});

app.post("/submissions", async (request, response) => {
  const { Name, condition, method } = request.body;

  // Ensure all fields are present
  if (!Name || !condition || !method) {
    return response.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    // Insert the submission into the database
    const query = "INSERT INTO mvp.submissions (Name, `condition`, method) VALUES (?, ?, ?)";
    const [result] = await pool.execute(query, [Name, condition, method]);

    // Send success response
    response.status(201).json({
      message: "Submission added successfully",
      submissionId: result.insertId,
    });
  } catch (error) {
    console.log("Error in adding submission:", error);
    response.status(500).send({ error: "Server issue, could not add submission" });
  }
});


app.listen(3001, () => {
  console.log("Server running on port 3001");
});