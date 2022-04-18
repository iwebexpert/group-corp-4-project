FROM node:16.14.2 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install --silent

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app

# ENV URL_DOMAIN http://127.0.0.1:3000
# ENV URL_DOMAIN_LOGIN http://127.0.0.1:3001

ARG URL_DOMAIN
ARG URL_DOMAIN_LOGIN
ENV URL_DOMAIN $URL_DOMAIN
ENV URL_DOMAIN_LOGIN $URL_DOMAIN_LOGIN

RUN npm run build

FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
