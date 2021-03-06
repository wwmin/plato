export default {
  icon: 'demo',
  title: '示例',
  name: 'demo',
  hidden: true,
  component: resolve => require(['views/demo'], resolve),
  subRoutes: {
    '/form': {
      icon: 'form',
      title: 'form',
      name: 'demo/form',
      component: resolve => require(['views/demo/form'], resolve)
    },
    '/chart': {
      icon: 'chart',
      title: 'chart',
      name: 'demo/chart',
      component: resolve => require(['views/demo/chart'], resolve)
    },
    '/misc': {
      icon: 'misc',
      title: 'misc',
      name: 'demo/misc',
      component: resolve => require(['views/demo/misc'], resolve)
    }
  }
}
