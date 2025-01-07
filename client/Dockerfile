# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite's default development port
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
