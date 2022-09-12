# @note Dockerfile should approximate the deta config and assume its path 
# design.
# @todo [
#   todo.sh add 'setup npm install' \
#   todo.sh add 'owasp checklist' \
#   todo.sh add 'compare with drives, bases, and micros from deta (e.g., may \
#   need bedquilt, mongodb tools if we're not going to use deta drives \
#   everywhere — is it postgresql?, firebase, etc.)'
# ]

FROM node:12-alpine3.14 
WORKDIR /reacting 
COPY /reacting/package.json /reacting 
RUN npm i && npm cache clean --force
COPY . /reacting

CMD node index.js 
EXPOSE 9000
		
CMD node index.js -p $PORT
