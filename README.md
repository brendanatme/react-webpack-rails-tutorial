
# Rails React Starter

Fork of the clever and complex https://github.com/shakacode/react-webpack-rails-tutorial

We've stripped away some of the boilerplate unwanted for a starting point, including:

- node.js web server
- bootstrap
- (most of the) demo application(s)
- react intl

And we've added a starting point for app development, including:

- basic `frontend` controller connecting Rails data to redux store
- fonts in Rails asset pipeline

## Installation

Start by following all the installation instructions here: https://github.com/shakacode/react-webpack-rails-tutorial
-- make sure your machine is completely setup.

## Notes on Development

Instead of running `rails server` and the like, this project uses `foreman` to manage running a rails server and webpack at the same time. You can use the foreman commands, or use the convenience scripts we've added:

## Development commands

- Dev w/hot reload: `rails runner scripts/start`
- Dev w/o hot reload: `rails runner scripts/start-dev`

Then view `localhost:5000` in a browser.

>Note: if `rails runner` commands aren't working, try with `bundle exec` in from. Ex: `bundle exec rails runner scripts/start`

## Compiling assets

1. run a dev w/o hot reload first. This tells webpack to compile files we'll need in the rails pipeline
2. stop running the above process once files are created
3. run `rake assets:precompile`. This puts asset files we need (like webfonts) into the public dir
4. run a dev with or without hot reload now. You're good to go
