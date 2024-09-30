# Apparel Submission MVP

This project is a minimal viable product (MVP) platform that allows users to submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. It includes both a frontend built with React and a backend built with Express and MySQL for handling submissions.

## Features

### Frontend:
- **Apparel Submission Form:** Users can submit the name, condition (new, used, worn-out), and desired disposal method (disposal, recycling, donation) of their apparel.
- **Form Validation:** Ensures that all required fields are completed before submitting.
- **User Feedback:** Displays success or error messages based on the submission result.

### Backend:
- **MySQL Integration:** Stores submissions in a MySQL database.
- **Data Validation:** Ensures that required fields (name, condition, method) are provided.
- **CORS Support:** Allows cross-origin requests from the frontend to the backend.
- **Session Management:** Manages user sessions using `express-session`.
- **Error Handling:** Captures and logs errors on both the frontend and backend for debugging.

## Technologies Used

- **Frontend:** React, Axios, HTML/CSS
- **Backend:** Express.js, MySQL, JWT, bcrypt
- **Database:** MySQL
- **Other:** body-parser, cors, cookie-parser, express-session

## Installation and Setup

### Prerequisites
- **Node.js**: Make sure you have Node.js installed on your machine.
- **MySQL**: A MySQL database is required to store the submissions.
  
### Backend Setup

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/apparel-submission-mvp.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd apparel-submission-mvp/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file to store your database credentials (or edit the credentials directly in the `mysql.createPool()` section of `index.js`):
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=mvp
   JWT_SECRET=MVP
   ```
5. Start the MySQL server and create the `mvp` database:
   ```sql
   CREATE DATABASE mvp;
   USE mvp;
   CREATE TABLE submissions (
     id INT AUTO_INCREMENT PRIMARY KEY,
     Name VARCHAR(255) NOT NULL,
     condition VARCHAR(255) NOT NULL,
     method VARCHAR(255) NOT NULL
   );
   ```
6. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Usage

1. Open the browser and navigate to `http://localhost:3000`.
2. Fill out the apparel submission form with the required information:
   - Apparel Name (e.g., cotton, plastic)
   - Condition (New, Used, Worn-out)
   - Method (Disposal, Recycling, Donation)
3. Submit the form.
4. Upon submission, the backend will process the data, save it in the database, and return a success or error message that is displayed on the frontend.

## Future Improvements

- User authentication and registration.
- Option to upload images of apparel.
- More detailed condition categories for apparel.
- Analytics dashboard for tracking submissions.

## License

This project is licensed under the MIT License.
