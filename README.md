# Fetch Dogs App 🐾

A web application to help dog lovers search for shelter dogs and find their perfect match! Users can log in, browse dogs by breed, filter and sort results, and select their favorites to generate a match.

https://github.com/user-attachments/assets/71791aee-2f76-41bb-b352-7233ec4f86e1

## Features
- **User Authentication**: Log in with your name and email to access the app.
- **Search Dogs**: Browse available dogs with filters for breed, age, and location.
- **Pagination**: Results are paginated for easy navigation.
- **Sorting**: Sort dogs alphabetically by name (ascending/descending).
- **Favorites**: Add dogs to your favorites list and generate a match.
- **Responsive Design**: Fully responsive for desktop and mobile devices.

---
## Demo
You can view the live application here: [Fetch Your Buddy](https://fetchyourbuddy.vercel.app)

---
## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library
- **Build Tool**: Vite
- **Hosting**: [Vercel]

---
## Installation and Setup
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/dharma-acha/Fetch_Project
   cd fetch-dogs-app

2. Install dependencies:

   npm install

3. Create a .env file in the root directory and add the following:

   VITE_API_BASE_URL=https://frontend-take-home-service.fetch.com

4. Start the development server:

   npm run dev

5. Open your browser and navigate to: http://localhost:5173

### Scripts
Here are the available npm scripts:

1. npm run dev: Start the development server.
2. npm run test: Run unit tests.

### API Reference
This app interacts with the Fetch API. Below are the key endpoints used:

POST /auth/login: Authenticate the user.
GET /dogs/breeds: Fetch all available dog breeds.
GET /dogs/search: Search for dogs with filters and pagination.
POST /dogs: Fetch detailed information about specific dogs.
POST /dogs/match: Generate a match from the favorites list.

## Folder Structure
src/

   ├── components/         # Reusable React components

   ├── context/            # Context API for state management

   ├── pages/              # Page components 

        ├── Login

        ├──Search

        ├──Favorites

        ├──Match

   ├── __tests__/          # Unit tests

   ├── App.jsx             # Main app component

   ├── index.css           # Global styles

   ├── main.jsx            # Entry point

## Testing
This project uses Jest and React Testing Library for unit testing.

Run Tests
To execute tests, run:

npm run test

#### Here are additonal components you can test to enhance your test coverage: 

Additional Features/Components to Test

* Login Component

  Validate form inputs (e.g., name and email).
  Test API call behavior for successful and failed login attempts.
  Ensure proper error messages are displayed for invalid inputs or failed login.

* Search Component

  Test filtering functionality (e.g., filtering by breed or age).
  Test sorting functionality (e.g., ascending/descending by breed or name).
  Verify pagination behavior (e.g., navigating between pages).

* Favorites Component

  Test adding and removing dogs from the favorites list.
  Ensure the favorites list updates correctly in the UI.
  Verify that the correct dog IDs are sent to the /dogs/match endpoint.

## Contact
For any questions or feedback, feel free to reach out:

Email: achadharma333@gmail.com
GitHub: [dharma-acha](https://github.com/dharma-acha)



