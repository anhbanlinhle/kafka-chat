FROM node:16.17.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1111

CMD ["npm", "start"]

# docker-compose up -d --build ${PWD##*/}