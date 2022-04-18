FROM node:16.14.2
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm install -g @stoplight/prism-cli --silent

COPY . /usr/src/app

EXPOSE 3001
CMD [ "prism", "mock", "-h", "0.0.0.0", "-p", "3001", "./api/v1.openapi.yaml" ]
