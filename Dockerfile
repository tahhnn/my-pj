FROM node:latest

WORKDIR /project

COPY package.json ./
RUN npm install

COPY . .

RUN npm install -g @angular/cli@18.1.0

EXPOSE 4202

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]