# Akinaprematur-v2

An AI driven guessing game where the AI acts as the guesser and user provides the game topics.

## Table of Contents

- [Akinaprematur-v2](#akinaprematur-v2)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Demo](#demo)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Prerequisites 2](#prerequisites-2)
    - [Setup Instructions](#setup-instructions)
  - [Screenshots](#screenshots)
    - [Homepage](#homepage)
  - [Akinaprematur-v2 API Documentation](#akinaprematur-v2-api-documentation)
    - [1. POST /login](#1-post-login)
    - [2. POST /register](#2-post-register)
    - [3. GET /profile](#3-get-profile)
    - [4. GET /thread](#4-get-thread)
    - [5. POST /message](#5-post-message)
  - [Contact Information](#contact-information)

## Introduction

Have you ever heard of [Akinator](https://en.akinator.com/)? It's a game about A Genie who can guess any character, animals or any thing in your mind. I always fascinated by how the way it works since i was a child.

As in the middle of 2024, AI development is at its peak, how [ChatGPT from OpenAI](https://chat.openai.com/) response our prompt in a matter of seconds, it's almost like ChatGPT has every knowledge in this world. So, when i try to find a good way to use the AI in one of my projects, then i remember [Akinator](https://en.akinator.com/), What if we put ChatGPT to act as the Akinator? After a little of tinkering, Akinaprematur was developed.

### Demo

- Deployed Demo: <https://akinaprematur-8ac8c.web.app/>

## Features

- User authentication and authorization.
- Guessing Game
- CRUD in User Account functionality.

## Tech Stack

- **Frontend:** React, Vite, Axios, Tailwind CSS, Google Sign-In, Firebase
- **Backend:** Node.js, Express, Sequelize, Supabase, JWT, Bcrypt.js Jest, Supertest, OpenAI
- **Database:** PostgreSQL

## Installation

### Prerequisites

- Node.js
- Supabase
- OpenAI API

### Prerequisites 2

Set up your .env file with the following variables:

```env
JWT_SECRET=your_jwt_secret
PORT=your_port
OPENAI_API_KEY=your_openAI_api_key
ASSISTANT_ID=your_openAI_assistant_id
DATABASE_URL=your_supabase_database_url
```

### Setup Instructions

```bash
git clone https://github.com/daditsan/akinaprematur-v2.git
cd akinaprematur-v2
cd server
npm install
npm run dev
cd ..
cd client
npm run dev
```

Access the website at <http://localhost:5173>

## Screenshots

### Homepage

![Homepage](Homepage.png)

## Akinaprematur-v2 API Documentation

List of available endpoints:

- `POST /login`
- `POST /register`

Routes below need Authentication:

- `GET /profile`
- `PUT /profile`
- `DELETE /account`  

- `GET /thread`
- `POST /message`  

### 1. POST /login

Description:

- Login into the system

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

Response (200 - OK)

```json
{
  "access_token": "string"
}
```

Response (400 - Bad Request)

```json
{
  "message": "Email cannot be empty!"
}

```

OR

```json
{
  "message": "Password cannot be empty!"
}
```

Response (401 - Unauthorized)

```json
{
  "message": "Email or Password is incorect"
}

```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

### 2. POST /register

Description:

- Registering account to get access to the system.

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
}
```

Response (200 - OK)

```json
{
  "id": "integer",
  "email": "string"
}
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

### 3. GET /profile

Description:

- Fetch user's profile data without the password field.

Request:

- header:

```json
{
  "Authorization": "Bearer <your access token>"
}
```

Response (200 - OK)

```json
[
  {
    "username": "string",
    "email": "string",
  }
]    
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

### 4. GET /thread

Description:

- Fectch a threadId from the OpenAI, which will managed the conversation with the User.

Request:

- header:

```json
{
  "Authorization": "Bearer <your access token>"
}
```

Response (200 - OK)

```json
[
  {
    "threadId": "string",
  }
]    
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

### 5. POST /message

Description:

- This will be User's message to the AI. User needs to provide the threadId.

Request:

- header:

```json
{
  "Authorization": "Bearer <your access token>"
}
```

- body:

```json
{
  "threadId": "string",
  "message": "string",
}
```

Response (200 - OK)

```json
[
  {
    "threadId": "string",
  }
]    
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

## Contact Information

For any questions or concerns, reach out to me at <dityaisanda@gmail.com>
Thank you.
