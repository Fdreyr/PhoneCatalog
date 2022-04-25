FROM node:16
WORKDIR /app

COPY ["package.json","package-lock.json", "./"]
COPY ["packages", "./packages/"]

RUN npm install && npm run build
CMD npm run start