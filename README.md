## What is Nanachi-stalker
This is a node.js fullstack web application that stalks nanachi

## This is what Nanachi looks like
<img src="https://s.put.re/YHhnnwi.jpg" alt="nanachi thinking" width="200px">

## How to install and host on your server (Ubuntu 18.04)
Install node.js if you haven't installed node.js yet

```bash
# https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
``` 


First of all you need to download this repo
```bash
$ git clone https://github.com/claudianus/nanachi-stalker.git
$ cd nanachi-stalker
```

At this moment you must rename or copy '.env.example' file to '.env' and modify the values in the file to suit your environment

```bash
$ cp .env.example .env
$ vim .env
```

Then install dependencies

```bash
$ npm install
```

and start the app (server)

```bash
# start the server but if you're in production pm2(http://pm2.keymetrics.io/) is recommended
$ npm start
```

That's it
