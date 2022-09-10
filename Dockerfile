FROM node:12-alpine3.14 
WORKDIR /server 
COPY /server/package.json /server 
RUN npm i && npm cache clean --force
COPY . /server

CMD node index.js 
EXPOSE 9000
		
CMD node index.js -p $PORT
