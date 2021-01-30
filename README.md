# Go ReactJS Boilerplate

Just another boilerplate project to use ReactJS from a GoLang server.

### Usage

1. Clone the repo
2. Run ```yarn install``` to install the ReactJS dependencies
3. Run ```yarn start``` to start the webpack dev server
4. Run ```go run main.go``` to start the GoLang server

> You can use [reflex](https://github.com/cespare/reflex) or [fresh](https://github.com/gravityblast/fresh) for GoLang hot reload.

#### Runner configuration for GoLang hot reload

```
root:              ./
tmp_path:          ./tmp
build_name:        api
valid_ext:         .go, .tpl, .tmpl, .html
no_rebuild_ext:    .tpl, .tmpl, .html
ignored:           ./vendor, tmp, ./node_modules
build_delay:       600
colors:            1
```

#### Reflex
```
reflex -r '\.go' -s -- sh -c "go run main.go"
```