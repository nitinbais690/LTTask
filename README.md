# React-Native Atomic Structure
[![Build Status](https://travis-ci.org/Rulox/react-atomic-structure.svg?branch=master)](https://travis-ci.org/Rulox/react-atomic-structure)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Rulox_react-atomic-structure&metric=alert_status)](https://sonarcloud.io/dashboard?id=Rulox_react-atomic-structure)


Basic Structure for React app following Atomic Design.

This base project allows you to have a basic React App folder structure following the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).
It contains some basic components that you can use. All the components are not (or minimally) stylized. The main objective
of this project is to have a basic structure, that is the reason we are not doing complex styles and/or adding many libs.

Also, each component is a JSX file and a .scss file that is associated to the component. This means, all the 
components for this project should be modular, to make it easy its usage between different apps.

## Tools

Using these package, you will be able to start a new fresh React project with the basic folder and file structures.

This project uses ES6 in the JS side, and Sass for styles. 

## Features

* ES6
* React Navigation
* Mirage
* Atomic design project structure
* Eslint
* Prettier
* @testing-library/react-native
* Path Alias(babel-plugin-module-resolver)


## TODO List
* Edit Dogs Info
* Enhance Design UI
* Validation Before Submit Form

## Requirements
* nodejs >= v16.*
* yarn >= v1.22.18


## Getting started

Clone this repo (Be sure you delete the .git file, or move the files to your own project folder/repository)
```bash
git clone https://github.com/nitinbais690/LTTask.git
```

##### Install npm dependencies
```bash
yarn
```

##### Run the server 
```bash
yarn start
```

## Predefined components
But first, [What is Atomic Design?](http://bradfrost.com/blog/post/atomic-web-design/)

These components are just an idea on how to develop your application following the Atomic Design. Feel free to upgrade/delete them in order to do your own app!

#### Atoms (stateless component)
* Anchor
* Label
* Touchable
* Input
* Loader
* Icons
* Listing


#### Molecules
* Button

#### Organisms
* ListItem
* Form

#### Screens
* List
* AddNew

## Creating your own component

To create a new component, just create a new folder in the atoms/molecules/organisms/templates folder with the
name of your component.

Create now the React component in the jsx file. Also create your .scss file and remember to import it in the component jsx file using `require`.

## NPM Scripts
This project comes with the following scripts to help you.


```bash
yarn start
```
1. Start metro bundler.

```bash
yarn ios 
```
Run application on simulator(iOS).

or 

```bash
yarn android 
```
Run application on emulator(Android).


```bash
yarn test
```
1. Run TestCases.

```bash
yarn lint
```
1. Launch Lint checkers.

```bash
yarn format
```
1. formatting file.

## Contributions
Feel free to create a pull request or create an issue to add features or fix bugs.
