FROM node:16.3-alpine3.11 
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "npm", "run", "production" ]