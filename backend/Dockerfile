FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 5000

# Set up database, seed it, and start the development server
CMD ["sh", "-c", "npx prisma db push && npx prisma db seed && npm run dev"]
