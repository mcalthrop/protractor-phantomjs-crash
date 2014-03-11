protractor-phantomjs-crash
==========================

How to crash PhantomJS using Protractor


## Rationale

On a separate project, I've been having some issues where `phantomjs` crashes when run with `protractor` – this project
shows how to consistently reproduce these crashes.

## Related Issues

* https://github.com/angular/protractor/issues/557
* https://github.com/detro/ghostdriver/issues/328

## Setup

``` sh
$ npm install
$ node_modules/protractor/bin/webdriver-manager update
```

And make sure `java` is installed and on your `PATH`.

## Execution

In one terminal window, start the webdriver manager:
``` sh
$ node_modules/protractor/bin/webdriver-manager start
```

And in another terminal window, run the test specs

``` sh
$ node_modules/protractor/bin/protractor protractor.conf.js
```

## Results

Executing the above consistently produces a `phantomjs` crash on the following systems:

* Mac OS/X 10.9.2 (Mavericks)
* Ubuntu Release 12.04
* Gentoo 64-bit (up to date)

In every failure, the cause is `phantomjs` crashing, with an error message that looks like this:
```
PhantomJS has crashed. Please read the crash reporting guide at https://github.com/ariya/phantomjs/wiki/Crash-Reporting and file a bug report at https://github.com/ariya/phantomjs/issues/new with the crash dump file attached: /tmp/40F8D8CD-273B-4A78-8C7F-57E7C4527F02.dmp
```

## Customisation

If you want the test to run in other browsers, uncomment the relevant lines in the `multiCapabilities` section in `protractor.conf.js`.

In the `phantomjs` definition, there is an alternative `'phantomjs.cli.args'` definition that provides more debugging information.

In `test-spec.js`, you can comment-out any individual test by changing `it` to `xit`.

## Troubleshooting

If you get this error:

``` sh
$ node_modules/protractor/bin/webdriver-manager start
execvp(): No such file or directory
seleniumProcess.pid: 10942

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: spawn ENOENT
    at errnoException (child_process.js:988:11)
    at Process.ChildProcess._handle.onexit (child_process.js:779:34)
```

then `java` has not been installed, or is not on your `PATH`.
