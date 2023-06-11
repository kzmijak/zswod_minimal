# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY . .

# Build the production-ready React app
RUN yarn build

# Set the command to run when the container starts
CMD ["yarn", "start"]