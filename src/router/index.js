import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    meta: { title: '后台'},
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/exam',
    component: Layout,
    children: [
      {
        path: 'add',
        name: 'Form',
        component: () => import('@/views/exam/add'),
        meta: { title: '建档登记', icon: 'form' }
      }
    ]
  },
  {
    path: '/eleder',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '老年人查体', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'exam',
        name: 'Table',
        component: () => import('@/views/exam/index'),
        meta: { title: '体检信息', icon: 'table' }
      },
      {
        path: 'wenzhen',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '全科问诊', icon: 'table' }
      },
      {
        path: 'zhongyi',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '中医体质辨识', icon: 'table' }
      },
      {
        path: 'zili',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '自理能力评估', icon: 'tree' }
      },
      {
        path: 'renzhi',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '认知功能评估', icon: 'tree' }
      },
      {
        path: 'qinggan',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '情感状态评估', icon: 'tree' }
      }
    ]
  },
  {
    path: '/manbing',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '慢病管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'gaoxueya',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '高血压', icon: 'table' }
      },
      {
        path: 'tangniaobing',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '糖尿病', icon: 'tree' }
      },
      {
        path: 'feijiehe',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '肺结核', icon: 'tree' }
      },
      {
        path: 'jingshenbing',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '精神病', icon: 'tree' }
      },
      {
        path: 'naocuzhong',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '脑卒中', icon: 'tree' }
      }
    ]
  },

  {
    path: '/patient',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '档案信息', icon: 'form' }
      }
    ]
  },

  {
    path: '/admin',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '系统设置',
      icon: 'nested'
    },
    children: [
      {
        path: 'orgs',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '所有单位' }
      },
      {
        path: 'org',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '单位设置' }
      },
      {
        path: 'office',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '科室设置' }
      },
      {
        path: 'org',
        component: () => import('@/views/nested/menu2/index'),
        name: 'user',
        meta: { title: '用户管理' }
      },
      {
        path: 'exam_type',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '体检类型' }
      },
      {
        path: 'package',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '套餐设置' }
      },
      {
        path: 'combo',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '组合设置' }
      },
      {
        path: 'item',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '项目设置' }
      },
      {
        path: 'setting',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '其他设置' },
        children: [
          {
            path: 'index',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: '平台设置' }
          },
          {
            path: 'report',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: '报表模板' }
          },
          {
            path: 'device',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: '终端管理' }
          }
        ]
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '在线帮助', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
