# mymusiclist

**mymusiclist** is a simple full-stack application designed for music enthusiasts to rate songs and share them with others. This repository contains the necessary source code to deploy this application in a local environment. This project uses React for the frontend, PHP for the backend, and Bootstrap for styling.

## Getting Started

### Prerequisites

Ensure that you have XAMPP, Composer, and npm installed. XAMPP is used to host the local php backend. Composer and npm manages dependencies and libraries used by this application.

You can install the latest version of XAMPP from the [official site](https://www.apachefriends.org/download.html).

You can install the latest version of Composer from the [official site](https://getcomposer.org/download/).

You can install the latest version of npm with

```
npm install -g npm
```

### Installation

Clone this repo to a local directory and install mymusicrater’s dependencies according to composer.json and package.json. The project directory should look as follows:

```
|-- root
|   |-- public/
|   |   |-- index.html
|   |   |-- manifest.json
|   |   |-- robots.txt
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |   |-- contactForm.js
|   |   |   |-- frequentQuestions.js
|   |   |   |-- heroSection.js
|   |   |   |-- heroSectionS.js
|   |   |   |-- index.js
|   |   |   |-- navbar.js
|   |   |   |-- topCharts.js
|   |   |-- controllers/
|   |   |   |-- baseController.php
|   |   |   |-- reviewController.php
|   |   |   |-- userController.php
|   |   |-- inc/
|   |   |   |-- bootstrap.php
|   |   |   |-- config.php
|   |   |-- middleware/
|   |   |   |-- privateRoute.js
|   |   |   |-- token.php
|   |   |-- models/
|   |   |   |-- database.php
|   |   |   |-- reviewModel.php
|   |   |   |-- userModel.php
|   |   |-- views/
|   |   |   |-- homeView.js
|   |   |   |-- login.css
|   |   |   |-- loginView.js
|   |   |   |-- reviewView.css
|   |   |   |-- reviewView.js
|   |   |   |-- signup.css
|   |   |   |-- signupView.js
|   |   |-- App.css
|   |   |-- App.js
|   |   |-- index.css
|   |   |-- index.js
|   |   |-- index.php
|   | ...
```

### Usage

Move all the files from `project/src/` into where your `htdocs/` folder is location, which sets up a local backend server. Make sure to configure the port number of Apache Web Server as 8080, as shown below.

![Screenshot_2023-11-04_at_12 17 26_AM](https://github.com/LaughingPenguin/mymusiclist/assets/91140371/37d0f91d-aeee-453b-bbb7-0a9284a2fa4c)


Afterwards, open your browser of choice and type in `localhost:8080/phpmyadmin`. Create a database called `mymusiclist` with two tables, `users` and `ratings`. Make sure that the table structure matches the structure shown below.

![Screenshot_2023-11-04_at_12 31 09_AM](https://github.com/LaughingPenguin/mymusiclist/assets/91140371/1b5ccdd3-2552-4968-9659-6a58e12de4d2)
***********users table***********

![Screenshot_2023-11-04_at_12 30 49_AM](https://github.com/LaughingPenguin/mymusiclist/assets/91140371/b399be2d-d2e5-414d-b38a-52bf8daa2d19)
*************ratings table*************

In `htdocs/inc/bootstrap.php`, replace `require_once PROJECT_ROOT_PATH . "../middleware/token.php";` with

```
require_once PROJECT_ROOT_PATH . "/middleware/token.php";
```

Make sure that `/vendor` is present in your `/htdocs` directory and `/node_modules` is present in the root directory. They are created as part of installing the dependencies specified in package.json and composer.json.

To start mymusiclist, run in the root folder:

```
npm start
```

## Structure

mymusiclist is built with MVC architecture in mind, and uses REST APIs to communicate between the frontend and the backend servers. There are many MVC patterns, but our’s is based on Mozilla’s definition as specified in the [glossary](https://developer.mozilla.org/en-US/docs/Glossary/MVC).

Our REST API endpoints are implemented in the controllers. When the client sends an HTTP request, the request is first processed by `index.php`, which determines the appropriate controller and the appropriate action to enact the request.

## Additional Features

Per the requirements, we implemented react notifications react-hot-toast. On login, signup, creating, updating, and deleting ratings, notifications appear on the top-right corner of the application after execution. Notification messages change based on the status code of HTTP responses or logic checks.  The setup is simple and explained in the [documentation](https://react-hot-toast.com/docs).

## Authors
* Steven Xu
* Ryan Kobayashi

*Work distribution: 50/50*

---

*This site was designed and published as part of the COMP 333 Software Engineering class at Wesleyan University. This is a training exercise.*
