var Index = {
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
      this.$router.push({name: 'index', query: {page: event.target.value}})
    }
  }
};

var routes =[
  {path: '/', component: Index, name: 'index' },
];

var router = new VueRouter({
  routes: routes
});
//
var app = new Vue({
  router: router
}).$mount('#app');

