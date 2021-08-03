# OpenVegeMap

Find vegetarian and vegan restaurants in your city

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
The map displays every node or way that has a `diet:` tag.

There are several ways to contribute:

* Add data directly on [OpenStreetMap](https://www.openstreetmap.org/edit).
    You need to use the [`diet:vegan` and `diet:vegetarian` tags](https://wiki.openstreetmap.org/wiki/Key:diet).
* We provide a [simple web editor](https://editor.openvegemap.netlib.re/) that allows you to edit existing restaurants.
* The [StreetComplete](https://github.com/westnordost/StreetComplete/) Android app asks info about vegetarian and vegan restaurants.
