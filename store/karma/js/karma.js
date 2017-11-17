const Foo = {
  template: '<div>foo</div>'
}

const routes = [{
  path: '/foo',
  component: Foo,
}]

const router = new VueRouter({
  routes
});

const appVue = new Vue({
  router,
  el: '#app-wrapper',
  data: {
    images: listImage,
    slimShirts: newArr,
    toggleVar: false,
    currentNumber: 0,
    timer: null,
    imgZoom: '',
    modalToggle: false,
    message: '',
    showMessage: false,
    cartLength: (JSON.parse(localStorage.getItem('cart-storage')) && JSON.parse(localStorage.getItem('cart-storage')).length) || 0
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
      (this.currentNumber === this.images.length - 1) ? this.currentNumber = 0: this.currentNumber += 1;
    },

    prev: function() {
      this.currentNumber -= 1
    },

    isActive: function(index) {
      return (index === this.currentNumber) ? true : false;
    },

    startSlide: function(item) {
      if (item.listImages) {
        item.imageTmp = item.image;
        item.image = item.listImages[0];
      }
    },

    stopSlide: function(item) {
      if (item.imageTmp) {
        item.image = item.imageTmp;
      }
    },

    zoomIn: function(item) {
      this.modalToggle = true;
      this.imgZoom = item.image;
    },

    closeModal: function() {
      this.modalToggle = false;
    },

    addTocart: function(item) {
      item.isLoading = true;
      this.showMessageFnc(item);
      this.clearMessage();
    },

    showMessageFnc: function(item){
      setTimeout(() => {
        this.message = `${item.name} added to cart successfully.`;
        item.isLoading = false;
        this.showMessage = true;
        var arr = JSON.parse(localStorage.getItem('cart-storage')) || [];
        arr.push(item);
        localStorage.setItem('cart-storage', JSON.stringify(arr));
        this.cartLength += 1 ;
      }, 3000)
    },

    clearMessage: function(){
      setTimeout(() => {
        this.showMessage = false;
      }, 7000)
    }
  }
});
