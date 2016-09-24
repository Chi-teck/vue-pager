var VuePager = {

  template: 'TEMPLATE',

  props: {
    quantity: {
      type: Number,
      default: 7,
      coerce: parseInt
    },
    total: {
      type: Number,
      required: true,
      coerce: parseInt
    }
  },

  computed: {

    current: function () {
      var page = parseInt(this.$route.query.page) || 1;
      return page > this.total ? this.total : page;
    },

    middle: function () {
      return Math.ceil(this.quantity / 2);
    },

    range: function () {
      var range = {};

      range.start = this.current - this.middle + 1;
      if (range.start < 1) {
        range.start = 1;
      }

      range. finish = this.current - this.middle + this.quantity;
      if (range.finish > this.total) {
        range.finish = this.total;
      }

      // Adjust range if at the begin or at the end of the pagination.
      if (range.start == 1) {
        range.finish = Math.min(this.quantity, this.total);
      }
      if (range.finish == this.total) {
        range.start = Math.max(this.total - this.quantity + 1, 1);
      }

      return range;
    },

    previous: function () {
      return this.current - 1;
    },

    next: function () {
      return this.current + 1;
    },

    items: function () {
      var items = [];
      for (var item = this.range.start; item <= this.range.finish; item++) {
        items.push(item);
      }
      return items;
    }

  },

  methods: {
    path: function (page) {
      // Clone query object to preserve other query parameters.
      var query = {};
      for (var param in this.$route.query) {
        if (this.$route.query.hasOwnProperty(param)) {
          query[param] = this.$route.query[param];
        }
      }
      query.page = page;
      return {name: this.$route.name, query: query};
    }
  }

};
