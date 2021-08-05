# WhatWay
---

## Goal:

An App that can help you plan a walking route

# Getting Started

## pre-requisites 
Node installed which can be installed [here](https://nodejs.org/en/download/) 

Docker installed which can be installed [here](https://www.docker.com/) 

run `npm install`



## whatway-client
run `npm run client`


## whatway-server
run `npm run server`


## docker
run `docker-compose network create app-network`

run `docker-compose up -d`


---
# Choices

## Ionic Capacitor
I chose Ionic Capacitor as it is a very good all around package, and out of the box two way binding it allowed me to get a simple application to communicate with the server up relatively quickly. It also as a hybrid application will render as a website, as an iOS application and an Android application. It has a lot of built in components as well meaning I didn't have to worry about importing a nice looking component library as out of the box it's pretty.

## NodeJS
I used NodeJS as my server again for swiftness of building, it is relatively quick to set up from scratch. Node also has one of the quickest boot up times, I've worked with it A lot on personal projects and use it with serverless applications as the minimal framework with express required to get a REST API up means it's lightweight and fast.

## Docker
I chose to build up docker images and co-ordinate them using docker-compose to show how simple it is to get a full fledge environment up and running, allowing them to communicate in one place. This should be relatively easy to expand on, ideally we would use a proper CI/CD pipeline to build this as shortcuts had to be taken especially around building the app within the dockerfile. That would be split out and would reference the artifact.

## Nginx
Nginx is the stand out choice for me here, having used apache to host applications before it being a nightmare to set up, the only real positive of apache is it has a larger community. Nginx scales better and is a lot more lightweight. The main goal here was to build as light weight of a framework as possible.

---
# Tools

## Swagger docs
Swagger documentation can be found at /api-docs

