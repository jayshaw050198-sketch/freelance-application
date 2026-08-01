const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const secret =
  "hfurvsdfksldfsfvbfvlshefvblwervbeifhcbslkefhclsehfclekfhcblwejcblsffdh";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "J123@.145/(0).",
  database: "employee",
});

app.post("/signup", (req, res) => {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Role = req.body.Role;

  db.query("INSERT INTO Userss (Username , Email , Role) VALUES (? , ? , ?)", [
    Username,
    Email,
    Role,
  ]);
  db.query("SELECT * FROM Users WHERE Email  = ?", [Email], (err, result) => {
    if (result) {
      res.json({
        message: "DataDone",
      });
    }
  });
});

app.post("/admin/users/login", async (req, res) => {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Role = req.body.Role;
  if (!Role || !Username || !Email) {
    res.json({
      message: "User Not Exist Please Sign up First",
    });
    return;
  }

  db.query(
    "INSERT INTO ClintPost(Email , Title , Description) VALUES ( ? , ? , ?)",
    [Email, null, null],
  );

  db.query(
    "SELECT * FROM Userss WHERE Email = ?",
    [Email],
    (error, UserEmail) => {
      if (error) {
        return res.send("Error in Server");
      }
      if (UserEmail) {
        const token = jwt.sign(
          {
            Email: Email,
          },

          secret,
          {
            expiresIn: "3s",
          },
        );

        res.cookie("jwtAuthToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        if (UserEmail[0].Role == "Clint") {
          res.json({
            message: "Clint",
          });
        }

        if (UserEmail[0].Role == "Employee") {
          res.json({
            message: "Employee",
          });
        }
      }
    },
  );
});

app.post("/ClintPage", (req, res) => {
  db.query("SELECT * FROM Userss WHERE Role = ?", ["Clint"], (err, result) => {
    if (err) {
      res.send("error");
    }

    if (result) {
      res.json({
        result: result,
      });
    }
  });
});

app.post("/Clint/Profile", (req, res) => {
  const Email = req.body.Email;
  const description = req.body.description;
  const title = req.body.title;
  console.log(Email);

  if (!title) {
    return res.json("not geeting title");
  }

  const countSql = `
  SELECT COUNT(*) AS total
  FROM ClintPosttt 
  WHERE Email = ?
`;

  db.query(countSql, [Email], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const nextPost = result[0].total + 1;

    const insertSql = `
    INSERT INTO ClintPosttt
    (Email, Title, Description, Post)
    VALUES (?, ?, ?, ?)
  `;
    ` `;

    db.query(
      insertSql,
      [Email, title, description, nextPost],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        res.json(
          {
            message:'Done'
          }
        )

        
      },
    );
  });
});

app.post("/Data", (req, res) => {
  const Email = req.body.Email;

  db.query(
    "SELECT * FROM ClintPosttt WHERE Email = ?",
    [Email],
    (err, Data) => {
      if (err) {
        return res.send("error");
        console.log("Error");
      }

      if (Data) {
        res.json({
          Data: Data,
        });
      }
    },
  );
});

app.get('/Clint/Data',(req, res)=>{
  db.query("SELECT * FROM ClintPosttt", (err, ClintPost) => {
          res.json({
            ClintPost: ClintPost,
          });

        });
})

app.listen(3000, () => {
  console.log("Server Started ....");
});
