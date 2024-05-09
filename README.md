# RichillCapital.Exchange.Web

## Run Development server

```bash
pnpm run dev
```

Then navigate to <http://localhost:9996>.

## Build for Production

```bash
pnpm run build
```

## Running unit tests

Execute the unit tests via [Karma](https://karma-runner.github.io).

```
ng test
```

## Running end-to-end tests

Execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

```bash
ng e2e
```

## Build Docker Image

```bash
docker build -t exchange-web:latest .
```

## Run Docker Container

```bash
docker run -d -it -p 9996:4000 --restart=always --name exchange-web exchange-web:latest
```
