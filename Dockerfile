FROM node:14

WORKDIR /usr/src/mevn-dashboard
COPY package.json package.json
RUN npm install -g yarn --force
RUN yarn

ENV NUXT_APP_BASE_URL=http://localhost:3001/api/v1
ENV HOST=0.0.0.0
ENV PORT=3000


COPY . .
EXPOSE 3000
CMD yarn dev

FROM node:14
COPY /usr/src /usr/src
WORKDIR /usr/src/mevn-dashboard
RUN yarn build -- --prod
