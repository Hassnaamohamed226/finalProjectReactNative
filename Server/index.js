/* const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const PORT = 4000;
const socketIO = require("socket.io")(http, {
	cors: {
		origin: "http://localhost:19006",
	},
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const generateID = () => Math.random().toString(36).substring(2, 10);
let chatRooms = [];

socketIO.on("connection", (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);

	socket.on("createRoom", (name) => {
		socket.join(name);
		chatRooms.unshift({ id: generateID(), name, messages: [] });
		socket.emit("roomsList", chatRooms);
	});

	socket.on("findRoom", (id) => {
		let result = chatRooms.filter((room) => room.id == id);
		// console.log(chatRooms);
		socket.emit("foundRoom", result[0].messages);
		// console.log("Messages Form", result[0].messages);
	});

	socket.on("newMessage", (data) => {
		const { room_id, message, user, timestamp } = data;
		let result = chatRooms.filter((room) => room.id == room_id);
		const newMessage = {
			id: generateID(),
			text: message,
			user,
			time: `${timestamp.hour}:${timestamp.mins}`,
		};
		console.log("New Message", newMessage);
		socket.to(result[0].name).emit("roomMessage", newMessage);
		result[0].messages.push(newMessage);

		socket.emit("roomsList", chatRooms);
		socket.emit("foundRoom", result[0].messages);
	});
	socket.on("disconnect", () => {
		socket.disconnect();
		console.log("🔥: A user disconnected");
	});
});

app.get("/api", (req, res) => {
	res.json(chatRooms);
});

http.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
}); */

/* const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors=require('cors');
const app = express();
const upload = multer({ dest: "uploads/" });
const port=3000;
// Configure MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "hasnaa",
  password: "password",
  database: "healthcare",
  
});
// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
}); 
 
// Configure middleware
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Define routes
 
// User sign up
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Perform validation and insert user into the database
  // ...

  res.sendStatus(200);
});

// User sign in
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  // Perform validation and check user credentials
  // ...

  res.sendStatus(200);
});

// Image upload
 app.post("/upload", upload.single("image"), (req, res) => {
  // Save the image to the database or file system
  // ...

  res.sendStatus(200);
}); 

// Retrieve friends list
app.get("/friends", (req, res) => {
  // Retrieve the user's friends list from the database
  // ...

  res.sendStatus(200);
});

// Send message
app.post("/message", (req, res) => {
  const { sender, receiver, message } = req.body;

  // Save the message to the database
  // ...

  res.sendStatus(200);
});
 
// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
}); */

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "hasnaa",
  password: "password",
  database: "healthcare",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

const upload = multer({ dest: "uploads/" });
app.use(bodyParser.json());
app.use(cors());

// Set up file upload storage
/* const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
	  const ext = path.extname(file.originalname);
	  cb(null, Date.now() + ext);
	},
  });
const upload = multer({ storage });   */

/* app.post('/patient/signup', upload.single('image'), (req, res) => {
	const { username, email, password } = req.body;
	const image = req.filename;
	const query = 'INSERT INTO patients (username, email, password, image) VALUES (?, ?, ?, ?)';
	connection.query(query, [username, email, password, image], (error, results) => {
	  if (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ error: 'Failed to register user' });
		return;
	  }
	  res.json({ success: true });
	});
  }); */
app.post("/patient/signup", (req, res) => {
  const { username, password, email } = req.body;

  const newUser = {
    username,
    password,
    email,
  };

  connection.query("INSERT INTO patients SET ?", newUser, (error, results) => {
    if (error) throw error;

    console.log("New user registered:", newUser);
    res.json({ message: "User registered successfully" });
  });
});
// Upload Image
app.post("/patient/upload", upload.single("image"), (req, res) => {
  const { username } = req.body;
  const image = req.file;

  connection.query(
    "UPDATE patients SET image = ? WHERE username = ?",
    [image, username],
    (error, results) => {
      if (error) throw error;

      console.log("User image uploaded:", username);
      res.json({ message: "Image uploaded successfully" });
    }
  );
});

app.post("/doctor/signup", (req, res) => {
  const {
    username,
    password,
    email,
    specialization,
    appoinments,
    price,
    specialization_image,
  } = req.body;

  const newUser = {
    username,
    password,
    email,
    specialization,
    appoinments,
    price,
    specialization_image,
  };

  connection.query("INSERT INTO doctors SET ?", newUser, (error, results) => {
    if (error) throw error;

    console.log("New user registered:", newUser);
    res.json({ message: "User registered successfully" });
  });
});
// Upload Image
app.post("/doctor/upload", upload.single("image"), (req, res) => {
  const { username } = req.body;
  const { image } = req.file;

  connection.query(
    "UPDATE doctors SET image = ? WHERE username = ?",
    [image, username],
    (error, results) => {
      if (error) throw error;

      console.log("User image uploaded:", username);
      res.json({ message: "Image uploaded successfully" });
    }
  );
});

app.post("/lab/signup", (req, res) => {
  const { username, password, email, address, license } = req.body;

  const newUser = {
    username,
    password,
    email,
    address,
    license,
  };

  connection.query("INSERT INTO labs SET ?", newUser, (error, results) => {
    if (error) throw error;

    console.log("New user registered:", newUser);
    res.json({ message: "User registered successfully" });
  });
});
// Upload Image
app.post("/upload", upload.single("image"), (req, res) => {
  const { username } = req.body;
  const filename = req.file;

  connection.query(
    "UPDATE labs SET image = ? WHERE username = ?",
    [filename, username],
    (error, results) => {
      if (error) throw error;

      console.log("User image uploaded:", username);
      res.json({ message: "Image uploaded successfully" });
    }
  );
});

app.post("/pharmacy/signup", (req, res) => {
  const { username, password, email, address, license } = req.body;

  const newUser = {
    username,
    password,
    email,
    address,
    license,
  };

  connection.query(
    "INSERT INTO pharmacies SET ?",
    newUser,
    (error, results) => {
      if (error) throw error;

      console.log("New user registered:", newUser);
      res.json({ message: "User registered successfully" });
    }
  );
});
// Upload Image
app.post("/upload", upload.single("image"), (req, res) => {
  const { username } = req.body;
  const filename = req.file;

  connection.query(
    "UPDATE pharmacies SET image = ? WHERE username = ?",
    [filename, username],
    (error, results) => {
      if (error) throw error;

      console.log("User image uploaded:", username);
      res.json({ message: "Image uploaded successfully" });
    }
  );
});

// Route for patient login
app.post("/patient/signin", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM patients WHERE username = ? AND password = ?";
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to log in" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    //const user = results[0];
    res.json(results);
  });
});

// Route for doctor login
app.post("/doctor/signin", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM doctors WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to log in" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const user = results[0];
    res.json({ success: true, user });
  });
});

// Route for lab login
app.post("/lab/signin", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM labs WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to log in" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    //const user = results[0];
    res.json(results);
  });
});

// Route for pharmacy login
app.post("/pharmacy/signin", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM pharmacies WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to log in" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const user = results[0];
    res.json(results);
  });
});

// Route for getting the list of doctors
app.get("/doctors", (req, res) => {
	const query = `SELECT * FROM doctors`;
	connection.query(query, (error, results) => {
	  if (error) {
		console.error("Error getting doctors list:", error);
		res.status(500).json({ error: "Failed to get doctors list" });
		return;
	  }
	  res.json(results);
	});
  });

// Route for adding a friend
app.post("/addfriend", (req, res) => {
  const { pat_id, friend_doc_id } = req.body;
  const query = `INSERT INTO friends_of_doctors (pat_id,friend_doc_id) 
  SELECT patients.id_patient, doctors.id_doctor 
  FROM patients JOIN doctors ON doctors.id_doctor = ${mysql.escape(friend_doc_id)} 
  AND patients.id_patient = ${mysql.escape(pat_id)}
	`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error adding friend:", error);
      res.status(500).json({ error: "Failed to add friend" });
      return;
    }
    res.json(results);
  });
});

// Route for getting the list of friends
app.get("/friends/:pat_id", (req, res) => {
  const pat_id = req.params.userId;
  const query = `
	SELECT doctors.username, doctors.image
	FROM doctors
	INNER JOIN friends_of_doctors ON doctors.id_doctor = friends_of_doctors.friend_doc_id
	WHERE friends_of_doctors.pat_id = ?;
	`;
  connection.query(query, [pat_id], (error, results) => {
    if (error) {
      console.error("Error getting friends list:", error);
      res.status(500).json({ error: "Failed to get friends list" });
      return;
    }
    res.json(results)
  });
});

// Route for sending a message
app.post("/message", (req, res) => {
  const { senderId, recipientId, message } = req.body;
  const query =
    "INSERT INTO messages (sender_id, recipient_id, message) VALUES (?, ?, ?)";
  connection.query(
    query,
    [senderId, recipientId, message],
    (error, results) => {
      if (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Failed to sendmessage" });
        return;
      }
      res.json(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const connection = mysql.createConnection({
	host: "localhost",
	user: "hasnaa",
	password: "password",
	database: "healthcare",
  });
  

// Connect to the database
connection.connect((err) => {
	if (err) throw err;
	console.log("Connected to MySQL database");
  });

app.use(bodyParser.json());
app.use(cors());

// Set up file upload storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage });

// Route for user registration
app.post('/signup', upload.single('image'),  (req, res) => {
  const { username, email, password } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    
    const query = 'INSERT INTO users (username, email, password, image) VALUES (?, ?, ?, ?)';
    const result =  connection.query(query, [username, email, password, image]);
   
    res.json({ success: true });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Route for user login
app.post('/signin',  (req, res) => {
	const { email, password } = req.body;
	const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
	connection.query(query, [email, password], (error, results) => {
	  if (error) {
		console.error('Error logging in:', error);
		res.status(500).json({ error: 'Failed to log in' });
		return;
	  }
	  if (results.length === 0) {
		res.status(401).json({ error: 'Invalid credentials' });
		return;
	  }
	  const user = results[0];
	  res.json({ success: true, user });
	});



  
});

// Route for getting user data
app.get('/user/data/:email',  (req, res) => {
 
    const query = 'SELECT users.email, users.username, users.image FROM users WHERE email = ?';
	const email = req.params.email;
    connection.query(query,[email] ,(error, results) => {
		if (error) {
		  console.error('Error getting friends list:', error);
		  res.status(500).json({ error: 'Failed to get friends list' });
		  return;
		}
		if(results.length>0){
			res.send(`Row: ${JSON.stringify(results[0])}`);
		}
		else{
			res.send('row not found');
		}
		
	  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */
