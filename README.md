# Full-Stack Development Repository

Welcome to my All-in-One repository for Backend Functionalities! This repository serves as a collection of templates, projects, and utilities that I continuously work on, covering various aspects of web development, APIs, databases, DevOps, and more. Below is a breakdown of the key topics and subtopics within this repository.
> **If you find this helpful, please consider giving it a star** 🙂

- If you're solely interested in Golang or Python-based Backend, consider exploring the following: [GoLang](https://github.com/mujibulhaquetanim/GoLang.git) , [Python](https://github.com/mujibulhaquetanim/Project-Py.git)

## Table of Contents

- [APIs](#apis)
- [Authentication](#authentication)
- [Databases](#databases)
  - [Cookies](#cookies)
  - [JsonDB](#jsondb)
  - [ORMs](#orms)
  - [Postgres/CRUD Project](#postgrescrud-project)
  - [Redis](#redis)
  - [SQLite](#sqlite)
  - [Session](#session)
- [DevOps](#devops)
- [Express Backend Template](#express-backend-template)
- [Logger](#logger)
- [Message Pipelines](#message-pipelines)
- [Modules](#modules)
  - [child_process](#child_process)
  - [cluster](#cluster)
  - [fs](#fs)
  - [stream](#stream)
  - [worker_threads](#worker_threads)
- [Monitoring](#monitoring)
- [Payment Gateways](#payment-gateways)
- [Projects](#projects)
  - [ExpressWithTypescript](#expresswithtypescript)
  - [HideApi-RateLimiting-Caching](#hideapi-rate-limiting-caching)
  - [Microservice/E-commerceWithRabbitMQ](#microservicee-commercewithrabbitmq)
  - [MoviesAPI (public)](#moviesapi-public)
  - [Notification System](#notification-system)
  - [StreamingLive](#streaminglive)
- [Proxy](#proxy)
- [Socket.io](#socketio)
- [Swagger](#swagger)
- [Template Engine](#template-engine)
  - [EJS](#ejs)
  - [Jinja](#jinja)
- [Testing](#testing)
- [Validators](#validators)
- [Nest Server](#nest-server)

---

## APIs

Includes various API designs, implementations, and tools. Emphasis on REST, tRPC, gRPC, and GraphQL implementations, and includes best practices for secure, scalable API development.

## Authentication

Authentication techniques include JWT (JSON Web Tokens), OAuth, and session-based authentication. Explores authentication in microservices and multi-tenant applications.

## Databases

This section dives deep into multiple database technologies and patterns.

#### Subtopics

- **[Cookies](#cookies)**: Server-side and client-side cookies handling for persistent user sessions.
- **[JsonDB](#jsondb)**: Use cases and integration of lightweight, file-based JSON databases.
- **[ORMs](#orms)**: Object-Relational Mapping implementations for Node.js applications.
- **[Postgres/CRUD Project](#postgrescrud-project)**: A sample CRUD application built using PostgreSQL as the main database.
- **[Redis](#redis)**: Integration with Redis for caching, message brokering, and session management.
- **[SQLite](#sqlite)**: Lightweight, file-based database management.
- **[Session](#session)**: Handling server-side sessions with different database strategies.

## DevOps

Automation and infrastructure management tools for building, testing, and deploying applications, including Docker and Kubernetes-based deployments.

## Express Backend Template

A highly modular and scalable template for building Express.js backends, with a focus on clean architecture, and best practices.

## Logger

Logging strategies for server-side applications, including structured logging with tools like `winston` and `morgan`, covering error tracking and debugging.

## Message Pipelines

Implementation of message queues and event-driven architectures using Kafka, BullMQ and RabbitMQ. Includes examples of how to set up pipelines for real-time data streaming.

## Modules

Exploration of Node.js core modules, useful for building performant applications with multi-threading, I/O handling, and system-level interactions.

#### Subtopics

- **[child_process](#child_process)**: Managing child processes for parallel execution.
- **[cluster](#cluster)**: Clustering techniques for scaling Node.js applications.
- **[fs](#fs)**: File system operations such as reading and writing files.
- **[stream](#stream)**: Working with Node.js streams for I/O operations.
- **[worker_threads](#worker_threads)**: Utilizing worker threads for multi-threaded execution.

## Monitoring

Setups for monitoring system performance, health checks, and alerts using tools like Prometheus, Grafana, and New Relic.

## Payment Gateways

Integrating payment systems (such as Stripe, PayPal, local payment system) with secure and compliant practices.

## Projects

A showcase of various backend projects.

#### Subtopics

- **[ExpressWithTypescript](#expresswithtypescript)**: An Express.js project scaffolded with TypeScript for type-safe backend development.
- **[HideApi-RateLimiting-Caching](#hideapi-rate-limiting-caching)**: Implementing API security with hiding routes, rate-limiting, and caching for optimization.
- **[Microservice/E-commerceWithRabbitMQ](#microservicee-commercewithrabbitmq)**: A microservices-based e-commerce project with RabbitMQ handling asynchronous messaging.
- **[MoviesAPI (public)](#moviesapi-public)**: A public-facing API project built for movie data retrieval and filtering.
- **[Notification System](#notification-system)**: A modular notification system supporting email, SMS, and push notifications.
- **[StreamingLive](#streaminglive)**: A live video streaming application with real-time communication and broadcasting.

## Proxy

A custom API Gateway built with Express.js to manage microservices. A specific use case involves managing servers for an inventory system and a books server, using the gateway for API routing and load balancing.

## Socket.io

Real-time communication setups using Socket.io, including chat applications, live updates, and WebSocket handling.

## Swagger

API documentation using Swagger for automatically generating interactive API docs for various services.

## Template Engine

Usage of server-side template engines for rendering dynamic HTML pages.

#### Subtopics

- **[EJS](#ejs)**: Embedded JavaScript template engine for rendering HTML on the server-side.
- **[Jinja](#jinja)**: A Python-based template engine, integrated into the server-side with tools like Flask and Django.

## Testing

Testing strategies and setups for both unit and integration tests. Focus on frameworks like Jest, vitest for Node.js.

## Validators

A collection of validation utilities for validating inputs in server-side and API request processing. Includes tools like `express-validator`, `Zod`, `JOI` for request validation.

## Nest Server

A scalable and modular server built using the NestJS framework, designed for building efficient and reliable large-scale server-side applications.

---

## Getting Started

To get started with the repository:

1. Clone the repository:

   ```bash
   git clone https://github.com/mujibulhaquetanim/Backend-Functionalities.git
2. To run a Specific Project or Template, go to the directory:

    ```bash
    cd project-name
3. Install Dependencies:

    ```bash
    pnpm install
4. Run the project:

   ```bash
    pnpm run dev

>Although most of the project script use `dev` or `start`, if that doesn't work, go to the package.json file of that project and see the script for running the project.

---

## Contribution

Feel free to contribute by submitting a pull request or opening an issue. Please follow the guidelines in CONTRIBUTING.md.

## License

This repository is licensed under the MIT License.

---
>Happy coding! If you have any questions or suggestions, feel free to reach out.
