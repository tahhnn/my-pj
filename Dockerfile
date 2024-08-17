# Stage 1: Build Angular app
FROM node:latest AS build

WORKDIR /project

COPY package.json ./
RUN rm -f package-lock.json
RUN rm -rf node_modules
RUN npm install

COPY . .

RUN npm install -g npm@8
RUN npm install -g @angular/cli@18.1.0

RUN ng build

FROM nginx:alpine

COPY --from=build /project/dist/my-pj/* /usr/share/nginx/html/

COPY certs /etc/nginx/ssl

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
