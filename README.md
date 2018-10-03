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
3. Now you should be able to see the app on port 3000
```
http://localhost:3000/
```



I also hosted the app on surge. Click [here](http://forex-currency-app.surge.sh/) to see it!