#!/bin/sh

GIT=`which git`
REPO_DIR=/psi-runner/psi-data
cd ${REPO_DIR}
ls -lah
${GIT} checkout master
${GIT} pull
${GIT} add --all .
${GIT} commit -m "Updating data"
${GIT} remote set-url origin "https://dvelasquez:${GITHUB_PERSONAL_API_TOKEN}@github.com/dvelasquez/psi-data.git" > /dev/null 2>&1
${GIT} push
