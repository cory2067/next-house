# Next House

Website for Next House, residence hall at MIT.

Live site at [http://next.mit.edu][live-site]!

Development site [here][dev-site]!

# Setup

- Install [Jekyll][jekyll] and its dependencies (install ruby, then
    `gem install jekyll`)
- Clone the repo, `cd` into repo
- `bundle install`

# Development

Run `bundle exec jekyll serve` to build the site and run it locally.

If it complains, you may need to run `bundle install` and then `bundle
exec jekyll serve`.

# Deployment

Run `./deploy`, which is a bash script that will build the site and then sync with athena. This will prompt you for your Athena login info. It should work under any account that has write access to the Next locker.

# License

TBD

[live-site]: http://next.mit.edu
[dev-site]: https://cory2067.github.io/next-house
[jekyll]: https://jekyllrb.com/
