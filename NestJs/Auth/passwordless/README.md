# Passwordless Authentication

Log in to your account without worrying about your password.

## Description

This project will demonstrate how to get user logged in to their account without the need of any password like traditional authentications. The project used passport strategies like jwt, magicLogin and jwt module to generate the access token.
For simplicity this project didn't implemented any SMTP for sending the magic link to the email server rather it used logger to show the generated link and access key, but you can add any SMTP server replacing the the logger.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

goto: http://[::1]:3000/api after installing for better documentation.

## Support

Nest is an MIT-licensed open source project. You can make PR for any improvement.

## Stay in touch

- Author - [Mujibul Haque Tanim](https://www.linkedin.com/in/mujibulhaquetanim/)
