Simple End-to-End Flask/Angular 2 JWT Example
=============================================

Using JSON Web Token (JWT) authentication with Flask and Angular 2.

This repo provides a simple example of using JWT authenticaiton with Angular 2
and a Python Flask server.

Features:
* Python 3.x
* Flask 0.11.x
* Angular release 2.0.2
* angular2-jwt

See [JWT authentication with Flask and Angular 2: a simple end-to-end example](http://keathmilligan.net/jwt-authentication-with-flask-and-angular-2-a-simple-end-to-end-example/) for more info.

## Quick-Start:

*You will need Python 3.x and a recent version of NodeJS*

Clone or download the repo.

### Server

In one terminal window, cd into the **flask-jwt** directory.

#### Create a virtual environment

Create a Python virtual environment with:

```
pyvenv .virtualenv
```

or

```
python -m venv .virtualenv
```

if the `pyvenv` command does not exist on your system.

Now activate the virtual environment. on macOS, Linux and Unix systems, use:

```
source .virtualenv/bin/activate
```

On Windows:

```
.virtualenv\Scripts\activate.bat
```

#### Install necessary Python packages

```
pip install --editable .
```

This will install the packages the project depends on.

#### Start the server

Finally, start the server with:

(macOS/Linux/Unix)
```
export FLASK_APP=sample
flask run
```

(Windows)
```
set FLASK_APP=sample
flask run
```

### Client

In another terminal window, cd into the **angular2-jwt** directory.

### Install packages

```
npm install
```

### Start the dev server

```
npm start
```

See [JWT authentication with Flask and Angular 2: a simple end-to-end example](http://keathmilligan.net/jwt-authentication-with-flask-and-angular-2-a-simple-end-to-end-example/) for a full description of the project.
