var app = new Vue({
  el: 'slider-wrapper',
  data: {
    images: [
      {
        imgSrc: './images/54.png',
        description: `<h3>Summer Boy</h3>
        <p>Hot item collection, let make a choice now.</p>
        `,
        classDes: 'is-left'},
      {
        imgSrc: './images/154.png',
        description: '<h3>Donnie Karma build on this November</h3> <p>Free shipping from 3 orders item more. </p><a href="#" class="btn outline-border">View detail</a>',
        classDes: 'is-center'},
      {
        imgSrc: './images/824.png',
        description: `<h3>Top Fashion hot Melanie item</h3>
        <p>Sale off 5% from 20 Nov to 29 Nov. </p>
        <a href="#" class="btn outline-border">View detail</a>`,
        classDes: 'is-right'}
    ],
    currentNumber: 0,
    timer: null
  },

  mounted: function() {
    this.startRotation();
  },

  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 6000);
    },

    stopRotation: function() {
      clearInterval(this.timer);
      this.timer = null;
    },

    next: function() {
      (this.currentNumber === this.images.length - 1) ? this.currentNumber = 0 : this.currentNumber += 1 ;
    },

    prev: function() {
      this.currentNumber -= 1
    },

    isActive: function(index) {
      return (index === this.currentNumber) ? true: false;
    }
  }
});
