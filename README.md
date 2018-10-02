# forex-currency-app

To see it live, click [here!](http://forex-currency-app.surge.sh/)


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



## Alternative way to run it:

To run it locally:
1. Clone
2. npm install
3. npm start