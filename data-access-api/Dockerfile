# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files
COPY . .

# Expose the port 3005
EXPOSE 3005


# Start the app
CMD ["npm", "start"]