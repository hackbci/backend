FROM node:8.9.2

# use nodemon for development
RUN npm install --global nodemon
RUN npm install -g sails

WORKDIR /services_history
# some bash niceties
# ADD .docker/root/.bashrc /root/
COPY package.json ./
#RUN rm -rf node_modules
RUN npm install


EXPOSE 1337
#CMD ["npm", "start"]
CMD ["nodemon", "-L", "/usr/src/bin/www"]
