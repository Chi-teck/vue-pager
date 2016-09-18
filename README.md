# Vue.js pagination plugin

The component is meant to work with [vue-router](https://github.com/vuejs/vue-router). Pager markup is compatible with Drupal 8. If you are going to use this outside Drupal check out [this stylesheet](https://github.com/Chi-teck/vue-pager/blob/master/example/seven-pager.css).

## Usage:

```js
Vue.component('pager', VuePager);
```

```html
<pager :total="totalPages"/>
```

