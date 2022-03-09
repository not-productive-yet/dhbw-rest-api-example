FROM node:17-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g nodemon && npm install 
COPY src ./src
EXPOSE 3000
ENTRYPOINT ["npm", "start"]