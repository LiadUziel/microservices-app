# Microservices Project: Learning Microservices with Node.js

## Table of Contents

1. [Overview](#overview)
2. [Installation & Launch](#installation--launch)
3. [Services Breakdown](#services-breakdown)
4. [Event Bus Communication](#event-bus-communication)
5. [Learning Objectives](#learning-objectives)
6. [License](#license)

---

## Overview

This is a learning project designed to demonstrate a microservices architecture using Node.js, Express, and React (Vite). The goal is to learn how to manage communication between services, event-driven architecture using an **Event Bus**, and how multiple services can be scaled and integrated in a single project.

### Services in this Project:

- **Posts Service** (Port: 3000) - Manages posts data.
- **Comment Service** (Port: 3001) - Handles comments for posts.
- **Moderation Service** (Port: 3002) - Processes and moderates comments (approves/rejects).
- **Query Service** (Port: 3003) - Queries the full data (posts + comments).
- **Client Service** (Port: 5173) - A React frontend (Vite + TypeScript) for interacting with the system.
- **Event Bus** (Port: 3005) - Central hub for event communication between services.

### Communication

The services communicate via an **Event Bus** running on port 3005, which acts as a central hub for all events. These services emit and listen to events, such as `CommentCreated`, `CommentModerated`, and `CommentUpdated`. The **Event Bus** forwards the events to the relevant services, ensuring decoupled communication.

---

## Installation & Launch

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. For each service, navigate to its folder, install dependencies, and start the service:

   ```bash
   # For each service, run the following:
   cd <service-folder>  # e.g., cd posts, cd comments, etc.
   npm install          # Install dependencies
   npm run dev          # Start the service
   ```

   Services:

   - **Post Service**: Port 3000
   - **Comment Service**: Port 3001
   - **Moderation Service**: Port 3002
   - **Query Service**: Port 3003
   - **Event Bus**: Port 3005
   - **Client Service (React)**: Port 5173

3. Once all services are up and running, you can interact with the system via the **Client Service** at `http://localhost:5173`.

---

## Services Breakdown

### 1. **Posts Service** (Port: 3000)

- **Function:** Handles creating posts, receiving posts, and emitting the `PostCreated` event.
- **Endpoints:**
  - `POST /api/posts`: Create a new post.
  - `POST /api/event`: Receive and handle events (e.g., `PostCreated`).
  - `GET /api/posts`: Retrieve all posts.

### 2. **Comment Service** (Port: 3001)

- **Function:** Allows creating comments on posts, receiving comments, and processes the `CommentCreated` event.
- **Endpoints:**
  - `POST /api/post/:id/comment`: Create a comment on a post.
  - `POST /api/event`: Receive and handle events (e.g., `CommentCreated`, `CommentUpdated`).
  - `GET /api/comments`: Retrieve all comments.

### 3. **Moderation Service** (Port: 3002)

- **Function:** Listens for the `CommentCreated` event, moderates the comment, and emits `CommentModerated` events (approved/rejected).
- **Endpoints:**
  - `POST /api/event`: Receive and handle events (e.g., `CommentModerated`).

### 4. **Query Service** (Port: 3003)

- **Function:** Serves the aggregated data (posts + comments). Listens for `CommentUpdated` events and updates the comment status.
- **Endpoints:**
  - `GET /api/query/full-posts`: Retrieve all posts with comments.
  - `POST /api/event`: Receive and handle events (e.g., `CommentUpdated`).

### 5. **Client Service** (Port: 5173)

- **Function:** A React frontend that allows users to create posts, add comments, and view posts with their status.

### 6. **Event Bus** (Port: 3005)

- **Function:** Central hub for communication between services. It listens for and forwards events, such as `CommentCreated`, `CommentModerated`, and `CommentUpdated`, to the appropriate service.
- **Endpoints:**
  - `POST /api/event`: Create a new event and trigger the event-handling endpoints in the relevant services.
  - `GET /api/event`: Retrieve all events that have been added in the past.

---

## Event Bus Communication

The **Event Bus** on port 3005 acts as a central event hub where services communicate by emitting and listening to events.

### Key Events:

- **`PostCreated`**: Emitted when a new post is created.
- **`CommentCreated`**: Emitted when a new comment is added to a post.
- **`CommentModerated`**: Emitted after a comment is moderated (approved/rejected).
- **`CommentUpdated`**: Emitted when a comment’s status is updated (e.g., when it's approved/rejected).

### Event Handling Flow:

1. A service (e.g., `PostService`) creates an event and triggers it by sending it to the **Event Bus** (`POST /api/event` on port 3005).
2. The **Event Bus** forwards the event to all other services that are subscribed to that type of event.
3. Each relevant service (e.g., `CommentService`, `ModerationService`) processes the event (via `POST /api/event` endpoints).
4. Services may emit new events, which are again passed to the Event Bus for further handling.

---

## Learning Objectives

This project focuses on the following learning goals:

- **Event-driven communication:** Using the Event Bus to facilitate communication between services.
- **Microservices architecture:** How multiple services can operate independently while interacting with each other.
- **Express and React Integration:** Demonstrating how backend services (Express) and frontend (React) can work together in a microservices ecosystem.
- **Scalability:** How services can be scaled and added over time.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
