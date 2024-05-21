# Medium Clone Frontend

This repository contains the frontend codebase for a Medium clone application. The application allows users to sign up, sign in, publish blogs, view individual blogs, and browse a list of blogs.

## Description

The frontend of the Medium clone is built using React.js and utilizes various libraries and components for routing, state management, styling, and data fetching.

### Tech Stack Used

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** For declarative routing in the application.
- **Axios:** For making HTTP requests to the backend API.
- **Tailwind CSS:** A utility-first CSS framework used for styling components.
- **Zod:** For input validation schemas used in forms.
- **@yagyagoel1/medium-common:** A package containing common input validation schemas shared between frontend and backend.

### Features

1. **Signup & Signin:** Users can create a new account or sign in to an existing account.
2. **Publish Blog:** Authenticated users can publish new blog posts with titles and content.
3. **View Blogs:** Users can view individual blog posts and browse a list of all blogs available.
4. **Skeleton Loading:** Skeleton loading screens provide a better user experience during data fetching.
5. **Responsive Design:** The application is designed to be responsive and work well on different screen sizes.

# Backend API Setup and Deployment

## Setup Backend API

1. Set up the backend API server for the Medium clone application.
2. Configure the `BACKEND_URL` in `config.ts` to point to your backend server. This is important for the frontend to communicate with the backend API.

## Starting Development Server

To start the development server for the frontend application, follow these steps:

- npm start
- or
- yarn start


## Contribution

Contributions to this project are welcome! If you have any suggestions, bug fixes, or feature implementations, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
