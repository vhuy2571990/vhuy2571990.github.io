const Foo = {
  template: '<div>foo</div>'
}

const routes = [{
  path: '/foo',
  component: Foo,
},{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
});
