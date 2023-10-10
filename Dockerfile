# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the app
CMD [ "node", "src/app.js" ]
