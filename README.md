# Medium Full stack clone

This project is a full-stack blogging platform with separate frontend, backend, and common validation schemas. It enables users to sign up, sign in, create, update, and view blog posts. The project leverages modern web technologies for both the frontend and backend, ensuring a seamless user experience and robust functionality.


# Table of Contents

1. [Introduction](#introduction)
2. [Backend](#backend)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Running the Server](#running-the-server)
    - [Routes](#routes)
        - [Signup](#signup)
        - [Signin](#signin)
        - [Blog](#blog)
        - [Blogs](#blogs)
        - [Publish](#publish)
    - [Deployment](#deployment)
3. [Frontend](#frontend)
    - [Installation](#installation-1)
    - [Configuration](#configuration-1)
    - [Running the Application](#running-the-application)
    - [Routes](#routes-1)
        - [Signup](#signup-1)
        - [Signin](#signin-1)
        - [Blog](#blog-1)
        - [Blogs](#blogs-1)
        - [Publish](#publish-1)
4. [Contribution](#contribution)
5. [License](#license)


## Description

This project is composed of three main parts:

1. **Common Package**: Contains shared validation schemas used by both the frontend and backend.
2. **Backend**: A Node.js backend server using Express.js and TypeScript, deployed on Cloudflare using the Hono framework.
3. **Frontend**: A React application that provides the user interface for the platform.

## Technologies Used

### Common Package
- **Zod**: For schema validation.
- **TypeScript**: For type-safe code.

### Backend
- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **TypeScript**: For type-safe code.
- **Hono**: Fast, simple, and small web framework for Cloudflare Workers.
- **Cloudflare Workers**: For serverless deployment.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing in React applications.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the frontend.
- **TypeScript**: For type-safe code.

## Setup

- clone the repo
- npm install
- npm run dev for backend 
- npm run dev for frontend


