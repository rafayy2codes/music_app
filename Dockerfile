# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Install backend dependencies (if applicable)
# COPY server/package*.json ./server/
# RUN npm install --prefix server/

# Move to the client directory
WORKDIR /app

# Install frontend dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Move back to the root directory
WORKDIR /app

# Expose the ports for the backend and frontend (if applicable)
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
