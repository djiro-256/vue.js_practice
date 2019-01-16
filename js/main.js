var app = new Vue({
    // options
    el: '#app',
    data: {
      message: 'Hello World!',
      url: 'https://jp.vuejs.org/',
      toggle: true,
      languages: ['Javascript', 'Ruby', 'Python'],
    },
    methods: {
      onclick: function() {
        this.message = 'Clicked!'
      }
    }
  })