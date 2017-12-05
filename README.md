# Workyard's Take Home Project



Hey there, I'm Sam. I'm a web developer at Workyard and a medium pace bowler for the Killara Bingles Cricket Club. I'll be guiding you through this take home project.

![alt text](http://res.cloudinary.com/small-change/image/upload/v1512434876/Photo_on_5-12-17_at_11.47_am_n7qew1.jpg)

## The Mission

The mission, should you choose to accept, is to build a "Post a Project" modal in React. We'll POST your new projects to Workyard's staging API. After the project is successfully posted, we'll show all your new projects in a list of very simple cards.

## Getting started on your machine

The first step is to fork this repo so that a fork exists on your own GitHub account. After you have forked the repo, clone your forked version down onto your machine.

Install the repo's dependencies:

`npm install`

Then start a local server:

`npm start`

You should be able to see the app on port 8000! Woooo.

![alt text](http://res.cloudinary.com/small-change/image/upload/v1512441119/Template_qyjvzq.png)

## So why are we doing this?

This is a tangible way for you to show us:

* That you know react and redux.
* That you're comfortable asking for help when you get stuck and can communicate technical concepts clearly.
* That you're excellent at making web apps look like the designs given to you.
* That you're able to stick to coding conventions in an existing codebase.

## Well what are Workyard's coding conventions?

* ***Skinny components, fat helpers.*** Put as much complexity as possible into helper files.
  * This make components much easier to read.
* Make mapStateToProps full of helper calls, leave render() as skinny as possible.
  * This make components much easier to read.
* ***Classes over function.*** Strong preference for react components to be classes connected to the store as opposed to functions.
  * When needs change, refactoring react functions into classes becomes a pain. It's easier to just make components extendable the first time around.
* ***Component, reducers, actions, scss & css files are camel case*** with the first letter capitalised e.g. Home.js, ProjectActions.js
* ***ClassNames are lowercase*** with hypens e.g. "home-container"
* Styles are done in scss files. We use create-react-app which automatically transpiles Example.scss into a new file in the same directory called Example.css . You can then import Example.css into any component you need.


## The Mission Specs

If you have Sketch, you can download the designs here: https://drive.google.com/a/wurble.com.au/file/d/1X569xGMtO_rYW5BBI2-frOxaacaQZm1K/view?usp=sharing

If you don't have Sketch, here are some images of what we'll be building:

#### The Home page (no projects) ####
![alt text](http://res.cloudinary.com/small-change/image/upload/v1512445823/Home_default_gzcp54.png)

#### The Home page (projects posted) ####
![alt text](http://res.cloudinary.com/small-change/image/upload/v1512445825/Home_with_projects_vvarvk.png)

#### The "Post Project" modal (fields empty) ####
![alt text](http://res.cloudinary.com/small-change/image/upload/v1512445822/Post_Project_Modal_empty_dngcrt.png)

#### The "Post Project" modal (all fields filled) ####
![alt text](http://res.cloudinary.com/small-change/image/upload/v1512445822/Post_Project_Modal_valid_input_state_xaqlq6.png)
