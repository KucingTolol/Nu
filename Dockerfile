FROM node:lts-buster

RUN apt-get update && \

apt-get install -y \

yarn \

python \

python2 \

git \

unzip \

bash \

nodejs \

ffmpeg \

mc \

nano \

neofetch \

chromium \

wget \

graphicsmagick \

imagemagick \

webp && \

apt-get upgrade -y && \

rm -rf /var/lib/apt/lists/*

COPY package.json .

COPY . .

RUN npm i -g npm

RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]
