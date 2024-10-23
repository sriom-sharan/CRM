# Project Documentation

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo-name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-project-directory
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the root directory with the following configuration:
    ```bash
    DATABASE_URL=mongodb+srv://<your-mongodb-url>
    PORT=8000
    EMAIL="abc...@gmail.com"
    PASS="yourGoogleApppassword"
    ```

5. Start the application:
    ```bash
    npm start
    ```

6. Connect to the API using Postman or a browser at `http://localhost:8000`.

---

## API Endpoints

| HTTP Verbs | Endpoints      | Action                                  | Parameters |
| ---------- | -------------- | --------------------------------------- | ---------- |
| GET        | /api/reports   | Retrieve a report with lead and campaign info | `toEmail` (required) - Send the report to the specified email |
| GET        | /api/leads     | Retrieve all lead data                  | None       |
| GET        | /api/campaigns | Retrieve all campaign data              | None       |

---

## Example Usage with Postman

- **Retrieve Reports:**
    - **GET**: `http://localhost:8000/api/reports`
    - **Body Parameter (required)**: `toEmail` (If you want to send the report via email)
    - Response: An email with an attachment.


- **Retrieve Leads:**
    - **GET**: `http://localhost:8000/api/leads`
    - Response: A list of all leads.

- **Retrieve Campaigns:**
    - **GET**: `http://localhost:8000/api/campaigns`
    - Response: A list of all campaigns.

---

## Dependencies

- **[NodeJS](https://nodejs.org/)**: Cross-platform runtime environment for running JavaScript on the server.
- **[ExpressJS](https://expressjs.com/)**: A web application framework for Node.js, providing a robust set of features to develop web and mobile applications.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database for storing data in flexible, JSON-like documents.
- **[Mongoose](https://mongoosejs.com/)**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema-based data modeling.
- **[Nodemailer](https://nodemailer.com/)**: A module to send emails from Node.js applications.
