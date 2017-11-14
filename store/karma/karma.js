var app = new Vue({
  el: 'slider-wrapper',
  data: {
    images: ['./images/54.png', './images/154.png', './images/824.png'],
    currentNumber: 0,
    timer: null
  },

  mounted: function() {
    this.startRotation();
  },

  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 2000);
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
