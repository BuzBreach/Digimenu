FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Start Next.js in development mode for easy local network access and fast updates
CMD ["npm", "run", "dev"]
