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
          {
            name: 'images/HL_How-to-Update-Your-CNY-Traditionals_20180117_banner_hex_c87de1.gif',
            text: '<h1>Lunar New Year <br/> Tradition 2.0</h1> <p>Out with the old, in with the new</p><p><a href="#" class="button outline-border">Shop Lifestyle</a></p>',
            class: 'right'
          },
          {name: 'images/Next_New-HP-EN_20171220_banner_hex_edd2c0_2.jpg', text: 'C'},
          {
            name: 'images/WWMW-CNY-Zodiac_20180117_banner_hex_fffe9d.gif',
            text: '<h1>Chinese Zodiac <br/> Horoscope 2018 </h1> <p>Discover your lifestyle and style forecast for the year ahead </p><p><a href="#" class="button outline-border">Shop Women</a></p><p><a href="#" class="button outline-border">Shop Men</a></p>',
            class: 'right font-black'
          }
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
