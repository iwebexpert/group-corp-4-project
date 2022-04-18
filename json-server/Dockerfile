FROM node:16.14.2
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent

COPY ./api /usr/src/app/api

# VOLUME [ "/usr/src/app/api" ]

EXPOSE 3000
CMD [ "npm", "start" ]