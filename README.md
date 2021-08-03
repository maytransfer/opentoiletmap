# OpenVegeMap

Find toilets/restrooms/water closets in your area and filter by facility feature (changing table, unisex stalls, etc.).

## Setup

```bash
yarn install
```

## Local server

```bash
python3 -m http.server
```

Then, open your Web browser to `http://localhost:8000/`.

## How to contribute

All the data comes from [OpenStreetMap](https://www.openstreetmap.org/).
The map displays every node or way that has a `toilet:` tag.

There are several ways to contribute:

* Add data directly on [OpenStreetMap](https://www.openstreetmap.org/edit).
    * You need to use the [`toilet:unisex` and `toilet:access` and `toilet:wheelchair` tags](https://wiki.openstreetmap.org/wiki/Key:toilet).
