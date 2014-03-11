#!/bin/bash -x

for F in specs/*spec.js ; do
	node_modules/protractor/bin/protractor protractor.conf.js --specs $F
done

# EOF