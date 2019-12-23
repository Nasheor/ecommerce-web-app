# Downloading alpine flavour of node
FROM node:alpine

# Setting up my working directory in the container
WORKDIR '/app'

# Copying the deps file only to prevent reinstalling all dependencies
COPY ./package.json ./

# Installing dependencies in the container
RUN npm install

# Copying the updated files
COPY . .

# Starting the vue application
CMD ["npm", "run", "serve"]