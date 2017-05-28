# AYO App

>Dating application built with MEAN stack and Ionic2. 

>These instructions will get you up and running on your local OSX machine for development and testing purposes.


## Prerequisites

Install NodeJS current version at https://nodejs.org/en/

I also installed these 2 applications:
* [iTerm](https://www.iterm2.com/downloads.html) (better terminal)
* [Sublime Text 3](https://www.sublimetext.com/3) (IDE)

But those are just recommendations and you can use any terminal and IDE you want.


## Pull project from GitHub (remote repository)

Create a folder on your computer. I called it Mingle5 and then navigate to that folder and run the following 2 commands in your terminal:
```
git init
git pull https://github.com/mingle5/Mingle5.git
```
Then you will be prompted for your username/password. After entering that, all files from repo will be downloaded into your project folder


## Install NodeJS Dependencies

Using your terminal, navigate to your project folder (if you're not already in it) and run the following command:
```
npm install
```
This will install all the packages listed in the package.json file and install them in a folder called node_modules. This new folder will be ignored by git so that's why you're installing them locally and they're not in the git repository.

>Only issues I encountered was with my version of NodeJS not being at least 6.7.0 but if you're using current version from website, this shouldn't be a problem. Here is a list of versions that are working well (run 'npm version' to see yours):
* npm: '3.10.9',
* node: '6.7.0'


## Build Application

Using your terminal, navigate to your project folder and run:
```
ionic serve
```
* This will run a bulk process script that was set up in the project
* It will compile your typescript to javascript and watch your files for changes
* Keep this process running because it will watch for changes and re-compile changes automatically


## Start server to view application

Using your terminal, navigate to your project folder and run:
```
npm start
```
* This will run the server code (start the NodeJS server).
* Important that you do this in a new terminal window to keep the watch function running in background to re-compile any changes.

Navigate to http://localhost:8100/ in the browser and you will see your app running!

:)