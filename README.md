# Highlander App
This app was made using React Native

## Running

First you need to install all dependencies, so please execute npm command on cloned repo dicretory

```shell
npm install
```

Then you can use NPM to run this app indise of Expo container

```shell
# for ios
npm run ios

# for android
npm run android
```

## Dependency

This project depends on [highlander-server](https://github.com/marconvcm/highlander-server), so, you can both, running it point to 
production instance on Heroku (you don't need make any changes) or configure as you want in you local development setup.

The `api.js` contains the URL where apps will request for resources

