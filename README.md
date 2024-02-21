# Portfolio

Portfolio with React.js

## Instructions for environment & development

### Environments

- Node.js

### Install yarn

Open command prompt and type the command as follows.

```bash
npm install --global yarn
```

### Install NPM Packages

Install NPM Packages for this project. Open Command Prompt on this project directory. And then run the following command.

```bash
yarn
```

## Development

### Run as Development mode

```bash
npm start
```

### Deploy on Github pages

```bash
./deploy.github.pages.sh
```

### Run as Production mode

Install `serve` npm. Please, should use only once. Because it's only for serving built files.

```bash
npm install --global serve
```

And run the below bash.

```bash
cd frontend
rm -fR ./build/
npm run build
serve -s build
```

You can visit and test via http://localhost:3000
