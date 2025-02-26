# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy only necessary files for build
COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Production stage
FROM node:22-alpine AS production

WORKDIR /app

# Set NODE_ENV early to ensure production optimizations
ENV NODE_ENV=production

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts && \
    # Clean npm cache to reduce image size
    npm cache clean --force && \
    # Add a non-root user for security
    adduser --disabled-password --gecos "" appuser

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Use non-root user for security
USER appuser

EXPOSE 3000

CMD ["node", "dist/index.js"]