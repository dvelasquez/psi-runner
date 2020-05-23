#!/bin/sh

GIT=`which git`
REPO_DIR=$(pwd)/psi-data
cd ${REPO_DIR}
${GIT} pull
${GIT} add --all .
${GIT} commit -m "Updating data"
${GIT} remote set-url origin "https://dvelasquez:${GITHUB_PERSONAL_API_TOKEN}@github.com/dvelasquez/psi-data.git" > /dev/null 2>&1
${GIT} push
