# Use the official Node.js image as the base image
FROM node:14

RUN mkdir -p /usr/src/app/node_modules

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the app
CMD [ "node", "app.js" ]
