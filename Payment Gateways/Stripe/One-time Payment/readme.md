# Stripe One-time Payment with Express and Static HTML

This project demonstrates how to handle one-time payments using Stripe with an Express backend and a static HTML frontend. The frontend is integrated with Stripe's CDN script, and the logic is implemented in `Client.ts`. The project uses TypeScript and pnpm, with Webpack for bundling and transpiling TypeScript to JavaScript.

## Features

- Express server to handle backend logic
- Static HTML frontend integrated with Stripe CDN
- Stripe payment processing
- TypeScript for type safety
- Easy to understand code + descriptive comments added for each step
- Webpack for bundling and transpiling
- pnpm for package management

## Prerequisites

- Node.js
- Stripe Account
- pnpm

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mujibulhaquetanim.git
   cd backend-functionalities
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up your environment variables in a `.env` file:

   ```env
   PORT=your-port
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_Publishable_KEY=your-stripe-publishable-key
   ```

## Running the Project

1. Transpile and bundle the TypeScript code:

   ```bash
   pnpm webpack
   ```

2. Start the Express server:

   ```bash
   pnpm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## License

This project is licensed under the MIT License.
