#!/bin/sh

GIT=`which git`

${GIT} config --global user.email "danilo.velasquez@gmail.com"
${GIT} config --global user.name "Danilo Velasquez"
${GIT} remote set-url origin "https://dvelasquez:${GITHUB_PERSONAL_API_TOKEN}@github.com/dvelasquez/psi-runner.git" > /dev/null 2>&1
${GIT} config submodule.psi-data.url "https://dvelasquez:${GITHUB_PERSONAL_API_TOKEN}@github.com/dvelasquez/psi-data.git" > /dev/null 2>&1
${GIT} submodule update --init --recursive

REPO_DIR=/psi-runner/psi-data
cd ${REPO_DIR}
ls -lah
${GIT} checkout master
${GIT} pull
${GIT} add --all .
${GIT} commit -m "Updating data"
${GIT} remote set-url origin "https://dvelasquez:${GITHUB_PERSONAL_API_TOKEN}@github.com/dvelasquez/psi-data.git" > /dev/null 2>&1
${GIT} push
