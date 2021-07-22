FROM node:11.13.0-alpine

# Based on: https://jonathanmh.com/deploying-a-nuxt-js-app-with-docker/
# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# apk is equivalent apt in alpine (https://stackoverflow.com/questions/53389749/getting-apt-get-on-an-alpine-container)

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# installing yarn
RUN npm install -g yarn

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json /usr/src/nuxt-app/
RUN yarn install

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn run build

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "yarn", "start" ]
