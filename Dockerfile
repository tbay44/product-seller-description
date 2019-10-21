FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3007
CMD ["node", "./server/server.js"]