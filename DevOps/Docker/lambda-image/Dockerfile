# Stage 1: Build Stage
# Using a specific Node.js LTS version on Alpine for a smaller and reproducible builder image
FROM node:lts-alpine3.21 AS builder

# Set work directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
# This means if only your source code changes, npm install won't run again.
COPY package*.json ./
# Install only production dependencies for the final image.
# Development dependencies are needed for 'npm run build' but will be omitted from /app/node_modules
# before copying to the final stage, if specified by '--omit=dev'.
# Or, if 'npm run build' needs ALL dependencies, then 'npm install' can be used here,
# and then a separate 'npm install --omit=dev --prefix /app/prod_node_modules'
# can be done to create a production-only node_modules to copy.
# For simplicity here, we'll install all then omit dev ones from the final copy.
RUN npm install

# Copy all source files and tsconfig for compilation
COPY src/ ./src/
COPY tsconfig.json ./

# Run the build command (assuming 'npm run build' compiles TypeScript to 'dist')
# This will output compiled JS files to /app/dist
RUN npm run build

# Stage 2: Production Stage (using AWS Lambda Node.js base image)
# This is crucial for Lambda deployment and must be an AWS Lambda runtime image.
FROM public.ecr.aws/lambda/nodejs:22.2025.07.12.12

# Set Lambda's default working directory to where your code will live
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy only the necessary compiled files and production node_modules from the builder stage

# 1. Copy the compiled JavaScript files from the 'dist' folder.
# Your index.js will be directly in the Lambda root.
COPY --from=builder /app/dist ./

# 2. Copy the production node_modules. This is crucial for your app's dependencies.
# We assume 'npm install' in stage 1 installed all, and we're relying on the
# final build to only use prod dependencies or that 'npm install --omit=dev'
# was sufficient. If you need a strict production-only node_modules, you might
# create a separate, filtered node_modules folder in stage 1.
COPY --from=builder /app/node_modules ./node_modules

# Set the Lambda handler
# Assuming your main handler function is named 'handler' and is exported from 'dist/index.js'
# Since 'dist' content is copied to the root, the path becomes 'index.handler'.
CMD [ "index.handler" ]