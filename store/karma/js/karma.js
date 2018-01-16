
const appVue = new Vue({
  router,
  el: '#app-wrapper',
  data: {
    images: listImage,
    dataMenu: dataMenu,
    slimShirts: newArr,
    toggleVar: false,
    sMenu: null,
    currentNumber: 0,
    timer: null,
    imgZoom: '',
    modalToggle: false,
    message: '',
    showMessage: false,
    cartObj: JSON.parse(localStorage.getItem('cart-storage')) || [],
    showCart: false,
    showUserForm: false,
    showSearch: false,
    cartTotalPrice: 0
  },

  mounted: function() {
    this.startRotation();
    this.totalPrice();
    options = {alwaysShowTracks: true};
    var scrollBar = window.Scrollbar;
    scrollBar.initAll(options);
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

    getCart: function() {
      this.cartObj = JSON.parse(localStorage.getItem('cart-storage'));
    },

    setCart: function() {
      localStorage.setItem('cart-storage', JSON.stringify(this.cartObj));
    },

    closeModal: function() {
      this.modalToggle = false;
    },

    addTocart: function(item) {
      item.isLoading = true;
      this.showMessageFnc(item);
      this.totalPrice();
    },

    totalPrice: function() {
      var tmp = 0;
      this.cartObj.map(function(item) {
        tmp += (item.price * parseInt(item.qty));
      });
      this.cartTotalPrice = Math.round(tmp);
    },

    refreshCart: function() {
      this.totalPrice();
    },

    findItemInCart: function(item) {
      const items = this.cartObj.find(it => it.name == item.name);
      if (this.cartObj.indexOf(items) !== -1) {
        return {
          result: true,
          items: items
        };
      }
      return {
        result: false
      };
    },

    showMessageFnc: function(item) {
      setTimeout(() => {
        this.message = `${item.name} added to cart successfully.`;
        item.isLoading = false;
        this.showMessage = true;
        item.qty = 1;

        var checkItemInCart = this.findItemInCart(item);
        (checkItemInCart.result == true) ? this.cartObj[this.cartObj.indexOf(checkItemInCart.items)].qty += 1 : this.cartObj.push(item);

        if (this.cartObj.length === 0) {
          this.cartObj.push(item);
        }

        this.setCart();
        this.getCart();
        this.totalPrice();
      }, 3000)
    },

    showSub: function(data) {
      switch (data) {
        case 'sale':
          this.dataMenu = dataMenu;
          break;
        case 'shirts':
          this.dataMenu = dataMenuShirts
          break;
        case 'suits':
          this.dataMenu = dataMenuSuits;
          break;
        default:

      }
      return this.sMenu = true;
    },

    closeSub: function() {
      return this.sMenu = false;
    },

    clearMessage: function() {
      this.showMessage = false;
    },

    clearCart: function() {
      this.cartObj = [];
    },

    removeCartItem: function(item) {
      const tmp = this.findItemInCart(item);
      (tmp.result == true) ? this.cartObj.splice(this.cartObj.indexOf(tmp.items), 1): void(0);
      this.setCart();
      return this.totalPrice();
    },
  }
});
