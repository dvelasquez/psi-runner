FROM node:12.11.1-alpine

RUN apk update && apk add git openssh
ARG PSI_API_TOKEN
ARG GITHUB_PERSONAL_API_TOKEN
ARG ITERATIVE_EXECUTION
ARG IAM_USER_KEY
ARG IAM_USER_SECRET
ARG AWS_PUBLISH
ARG PORT
COPY . /psi-runner/
WORKDIR psi-runner


RUN npm ci
RUN npm run build
EXPOSE 8080

CMD ["node", "build/index.js"]
