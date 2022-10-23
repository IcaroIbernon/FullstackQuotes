# Fullstack application React+Express

This repository contains a monorep to a fullstack application build using:
 - React
 - Vite.js
 - Express
 - Prisma.io
 - SQLite3
 - Dnd-kit
 - Zustand
 - TailwindCSS
 - Others
 
# Running Instructions


## Preparing database
Database of choice is SQLite3 to have a easy local database inside the repository.
Prisma is the ORM of choice because make most os the databases work in a just plug in like.

 - cd back
 - npm install
 - npx prisma migrate dev 
	>To clean the database just delete the file e run this command again
## Preparing backend

The cors middleware is active on express, its not recommended to use like this on a real case.
- cd back
 - npm install
 - npm run dev 

## Preparing Frontend
The bundler of choice is vite.js make the application a little smaller than most of the other options.
- cd front
- npm install
- npm run dev