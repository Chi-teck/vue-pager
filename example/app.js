var Index = Vue.extend({
  template: '#index',
  components: {
    'pager': VuePager
  },
  data: function () {
    return {
      quantity: 7,
      total: 30
    }
  },
  computed: {
    current: function () {
      return this.$route.query.page
    }
  },
  methods: {
    changePage: function (event) {
      this.$router.go({name: 'index', query: {page: event.target.value}})
    }
  }
});

new VueRouter()
  .map({
    '/': {
      component: Index,
      name: 'index'
    }
  })
  .start(Vue.extend({}), '#app');
