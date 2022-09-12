FROM node:12-alpine3.14 
WORKDIR /reacting 
COPY /reacting/package.json /reacting 
RUN npm i && npm cache clean --force
COPY . /reacting

CMD node index.js 
EXPOSE 9000
		
CMD node index.js -p $PORT
