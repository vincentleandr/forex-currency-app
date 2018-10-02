# forex-currency-app

## How to run it via Docker:

You can pull from the Dockerhub:
```
docker pull vincentleander/forexapp
```

Or you can build the image yourself:
1. Build
```
docker build -t vincentleander/forexapp github.com/vincentleandr/forex-currency-app
```

2. Run
```
docker run --name forexapp -d -p 3000:3000 vincentleander/forexapp:latest
```
