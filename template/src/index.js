function plugin (Vue, options = {}) {
 // todo
}

plugin.version = '__VERSION__';

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
