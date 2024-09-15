FROM node:20.15.1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN ls -R /app | grep -v 'node_modules'

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/src/app.js" ]
