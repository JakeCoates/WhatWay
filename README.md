# TextClassification
---

## Goal:

An app that classifies text in one of three ways: `URGENT`, `NOT URGENT` or `UNKNOWN`.

The classification depends on the number of words found in the text from the following lists. 
 - If the input text contains more List A words than List B words, the text will be classified as URGENT.
 - If it contains more List B words than List A words, it will be classified as NOT URGENT.
 - Otherwise, it will be classified as UNKNOWN.

### List A
- Alert
- Critical
- Immediate
- Important
- Urgent
- Warning

### List B
- Clear
- Good
- Nothing
- OK
- Quiet


# Getting Started

## pre-requisites 
Node installed which can be installed [here](https://nodejs.org/en/download/) 

Docker installed which can be installed [here](https://www.docker.com/) 

run `npm install`


## modifying lists
Modify the file `classification-lists.json` inside the classification-server folder


## classificationClient
run `npm run client`


## classification-server
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


---
# Improvements

## server
In the server I would add a testing framework and unit tests to validate my work

## client
I would build out some spec files with unit testing

I would develop the colour schemes to not be default ionic

I would implement a dark mode as I removed it as it didn't look nice with default colour scheme

I would wireframe a solution first and demo that solution before implementing

## CI/CD
I would build both parts as part of a pipeline
I would get the app running using Bitrise to build to the individual app stores