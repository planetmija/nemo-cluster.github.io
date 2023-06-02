# bwForCluster NEMO Jekyll Web Page

This theme is based on [bulma-clean-theme](https://www.csrhymes.com/bulma-clean-theme/) for [Jekyll](https://jekyllrb.com/).
For configuration of this theme see theme page or [README](https://github.com/chrisrhymes/bulma-clean-theme) on Github.

This theme is based on [Bulma](https://bulma.io) CSS framework. This CSS is easy to use and has a very good
[documentation](https://bulma.io/documentation/) including examples. This way it is pretty easy to customize the web pages.

Jekyll uses Markdown with [kramdown syntax](https://kramdown.gettalong.org/syntax.html), which has some additional features for HTML.

## Local Installation and testing

If you want to run and test Jekyll locally you'll have to clone the repository.

It is necessary to install ruby and maybe some other dependencies. Currently only ruby version 2.x
is supported, so if your system version already provides 3.x you should use rbenv or rvm to install
and configure multiple versions locally (see Troubleshooting).

After ruby is set up and the repository is cloned you can run the following commands:

```shell
bundle install
gem install bulma-clean-theme
#gem update
gem update --system
gem install sass-embedded -v 1.62.1
gem install bulma-clean-theme
bundle exec jekyll serve
```

The website should appear on `localhost:4000`.

### Troubleshooting

Build:

```shell
bundle exec jekyll build --trace --verbose
bundle exec jekyll serve --trace --verbose
```

Installation:

```shell
bundle exec jekyll serve
[...]
jekyll 3.9.0 | Error:  no implicit conversion of Hash into Integer
/usr/lib/ruby/gems/3.0.0/gems/pathutil-0.16.2/lib/pathutil.rb:502:in `read': no implicit conversion of Hash into Integer (TypeError)
        from /usr/lib/ruby/gems/3.0.0/gems/pathutil-0.16.2/lib/pathutil.rb:502:in `read'
[...]
```

Solution:

```shell
rbenv install 2.7.4
rbenv local 2.7.4       # set the Ruby version for this directory
```

## Contributing

If you want to contribute to this website you should fork the repository, even if you are able to commit directly into this repository.

Then you should clone your fork of this repository, make changes, push them to your fork and create a pull request.

After revisiting the code the changes should be _rebased and merged_, if possible (select button).

The original theme will be upgraded from time to time. All changes for the NEMO page will be rebased on top. If you have trouble
pulling upstream changes you'll need to force upstream changes to your local fork.
