FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4173

ENV API_KEY=YOUR_API_KEY

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]
