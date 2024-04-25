# Fetching the latest node image on alpine linux
FROM node:19.5.0-alpine

WORKDIR /app

# Installing dependencies
COPY package.json .

RUN npm install --force

# Copying all the files in our project
COPY . .

# Building our application

EXPOSE 3000

# Starting our application
CMD ["npm","start"]