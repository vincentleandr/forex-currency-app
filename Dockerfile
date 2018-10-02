FROM node:8.11.2

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]