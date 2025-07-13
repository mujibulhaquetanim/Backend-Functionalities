# Use a lightweight Node.js LTS Alpine image for minimal base size
FROM node:current-alpine3.22 AS builder

# Set up working directory
WORKDIR /app

# Preload package metadata for better layer caching
COPY package*.json ./

# Install all dependencies including devDependencies for building
RUN npm install

# Copy source files and config
COPY src/ ./src/
COPY tsconfig.json ./

# Build TypeScript code (output expected in /app/dist)
RUN npm run build

# Create a clean production-only node_modules copy by pruning dev deps
RUN cp -R node_modules prod_node_modules && \
    npm prune --omit=dev --prefix prod_node_modules


# Use the official AWS Lambda Node.js 22 base image
FROM public.ecr.aws/lambda/nodejs:22.2025.07.12.12

# Lambda’s default working directory
WORKDIR ${LAMBDA_TASK_ROOT}

# ✅ Copy only what's necessary for production

# 1. Copy the compiled entry point (assuming it's index.js in dist)
COPY --from=builder /app/dist/index.js ./

# 2. Copy optimized runtime dependencies
COPY --from=builder /app/prod_node_modules ./node_modules

# Set the Lambda handler function
CMD [ "index.handler" ]
