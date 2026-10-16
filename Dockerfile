FROM node:22-alpine AS builder

WORKDIR /app

# Install build tools (some packages may need them)
RUN apk add --no-cache make python3 g++

# Copy package manifests first for better caching
COPY package*.json ./

# Use package-lock if present, fall back to npm install
RUN sh -c "if [ -f package-lock.json ]; then npm ci --no-audit --progress=false; else npm install --no-audit --progress=false; fi"

# Copy sources and build
COPY . .
RUN npm run build

### Production image: lightweight nginx serving static files
FROM nginx:stable-alpine AS runner

# Copy built static output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with optimized config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
