FROM node:12.11.1-alpine

ARG PSI_API_TOKEN
COPY . /psi-runner/
WORKDIR psi-runner

RUN npm ci && npm run build


CMD ["node", "build/index.js"]
