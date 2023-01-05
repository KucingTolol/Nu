FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  nodejs \
  unzip \
  python \
  python2 \
  bash \
  git \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN unzip database.zip

RUN npm i -g npm

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
