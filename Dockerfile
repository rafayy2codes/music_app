# Use a Node.js LTS (Long Term Support) version as the base image
FROM node:lts

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to work directory
COPY package.json package.json 
COPY package-lock.json package-lock.json

# Install dependencies
RUN npm install

# Copy the entire project directory to work directory
COPY . .

# Expose the port that the application uses (usually 3000 for Vite development server)
EXPOSE 5173

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
