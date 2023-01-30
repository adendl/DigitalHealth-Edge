# Use an official Node.js runtime as the base image
FROM node:14

# Create a new directory for the application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the app
CMD ["npm", "start"]