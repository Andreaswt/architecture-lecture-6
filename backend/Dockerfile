FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 5000

ENV TOGGLE_UNFINISHED_FEATURE=true

CMD ["node", "dist/index.js"]
