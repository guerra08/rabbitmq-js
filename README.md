# rabbitmq-js

Basic usage of RabbitMQ on a NodeJS project.

## Necessary tools

- NodeJS
- Docker with docker-compose

## Usage

Run ```npm install``` to install the required dependencies.

Start the RabbitMQ container by executing ```docker-compose up -d``` on the project root.

Run the ```sender.js``` and ```receiver.js``` programs to send and receive messages through RabbitMQ. You can pass the ```-m, --message``` argument on the sender program to send a specific message.
