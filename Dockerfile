# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install your Node.js project dependencies
RUN npm install

# Copy the rest of your application source code to the working directory
COPY . .

# Build your TypeScript code
RUN npm run build

# Expose the port on which your Node.js app will run (adjust as needed)
EXPOSE 8000

# Start your application using Nodemon
CMD ["npm", "start"]