# Development

Set env variables, in `env` file

```env
VITE_APP_TORNEO_API_BASE_URL
IS_BETA
```

`VITE_APP_TORNEO_API_BASE_URL` is the base url of backend while `IS_BETA` can be set to `true` or `false` depending on the version. `IS_BETA` is used to change some variables in manifest (app name, description, etc)

Install packeges with `yarn`

```sh
yarn install
```

Enter in dev mode

```sh
yarn dev
```

# PWA assets

See [PWA Vite Plugin](https://vite-pwa-org.netlify.app/) and see [PWA assets generator](https://vite-pwa-org.netlify.app/assets-generator/).

To change all assets, use [PWA builder](https://www.pwabuilder.com/imageGenerator) the put the icons under `public/pwa-assets`
