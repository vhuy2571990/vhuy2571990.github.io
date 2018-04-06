const Home = {
  props: {
    value: {
      type: Number,
      default: 10
    },
    propE: {
      type: Array,
      default: function() {
        return [
          {name: 'images/CreativeCallOut_LA-HP_20171220_banner_hex_726b68.jpg', text: 'A'},
          {name: 'images/Next_New-HP-EN_20171220_banner_hex_edd2c0_2.jpg', text: 'C'},
        ]
      }
    }
  },
  template:
  `<div class="wrapper container">
    <template v-for="(item, index) in propE">
      <section>
        <div class="item">
           <span><img :src="item.name" alt="" /></span>
           <div class="description" v-html="item.text" v-bind:class="item.class"></div>
        </div>
      </section>
    </template>
   </div>`
}
