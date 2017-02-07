# README

This is the client/SPA portion of Assignment 2. A working `api/cities` endpoint is required.

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

Install nvm/yarn

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

##### Development

Use `bin/yarn` to install webpack dependencies

Apart from `rails server`, `bin/webpack-watcher` should also be started in a separate terminal to compile webpack assets

More info: https://github.com/rails/webpacker

##### Production

```
heroku buildpacks:add --index 1 heroku/nodejs
```

More info: https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app

* ...

* References

https://github.com/ui-router/sample-app-ng1 (working example of ui-router and visualizer)

https://github.com/FountainJS/generator-fountain-webapp (yeoman generator with some webpack config)

https://github.com/seyhunak/twitter-bootstrap-rails (scaffold with bootstrap styling)
