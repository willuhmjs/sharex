FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=2121

EXPOSE ${PORT}

RUN npm run build
CMD ["npm", "run", "preview", "--", "--port=$PORT"]
