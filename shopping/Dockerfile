
# Use Node.js 22
FROM node:22

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3003

# Start the app
CMD ["node", "index.js"]
