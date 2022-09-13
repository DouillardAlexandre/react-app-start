FROM node:16 as build

RUN mkdir -p /app
WORKDIR /app
COPY . /app

# Install all dependencies
RUN npm install

# Set env vars
#ENV REACT_APP_BUILD_VERSION=`git rev-parse main` 
#ENV REACT_APP_BUILD_DATE=$(date +%Y-%m-%d)-$(date +%T)

EXPOSE 4001
CMD ["npm", "run", "start"]