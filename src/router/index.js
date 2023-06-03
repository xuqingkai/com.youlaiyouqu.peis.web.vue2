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
        meta: { title: '体检登记', icon: 'el-icon-edit-outline' }
      }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/exam/index'),
        meta: { title: '体检记录', icon: 'el-icon-document-copy' }
      }
    ]
  },
  {
    path: '/eleder',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '老年人查体', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/elder/index'),
        meta: { title: '健康体检表', icon: 'el-icon-document' }
      },
      {
        path: 'zhongyi',
        name: 'Table',
        component: () => import('@/views/elder/zhongyi'),
        meta: { title: '中医体质辨识', icon: 'el-icon-document' }
      },
      {
        path: 'zili',
        name: 'Tree',
        component: () => import('@/views/elder/zili'),
        meta: { title: '自理能力评估', icon: 'el-icon-document' }
      },
      {
        path: 'renzhi',
        name: 'Tree',
        component: () => import('@/views/elder/renzhi'),
        meta: { title: '认知功能筛查', icon: 'el-icon-document' }
      },
      {
        path: 'qinggan',
        name: 'Tree',
        component: () => import('@/views/elder/qinggan'),
        meta: { title: '情感状态筛查', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: 'manbing',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'Manbing',
    meta: { title: '慢性病随访', icon: 'el-icon-folder' },
    children: [
      {
        path: 'gaoxueya',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '高血压', icon: 'el-icon-document' }
      },
      {
        path: 'tangniaobing',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '糖尿病', icon: 'el-icon-document' }
      },
      {
        path: 'feijiehe',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '肺结核', icon: 'el-icon-document' }
      },
      {
        path: 'jingshenbing',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '精神病', icon: 'el-icon-document' }
      },
      {
        path: 'naocuzhong',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '脑卒中', icon: 'el-icon-document' }
      },
      {
        path: 'guanxinbing',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '冠心病', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: 'gravida',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'Gravida',
    meta: { title: '孕产妇随访', icon: 'el-icon-folder' },
    children: [
      {
        path: '1st',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '第一次', icon: 'el-icon-document' }
      },
      {
        path: '2nd',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '第二次', icon: 'el-icon-document' }
      },
      {
        path: '3rd',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '第三次', icon: 'el-icon-document' }
      },
      {
        path: '4th',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '第四次', icon: 'el-icon-document' }
      },
      {
        path: '5th',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '第五次', icon: 'el-icon-document' }
      },
      {
        path: 'after',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '产后', icon: 'el-icon-document' }
      },
      {
        path: '42d',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '产后42天', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: 'baby',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'Manbing',
    meta: { title: '新生儿随访', icon: 'el-icon-folder' },
    children: [
      {
        path: 'family',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '家庭访视', icon: 'el-icon-document' }
      },
      {
        path: 'month1',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '1月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month3',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '3月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month6',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '6月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month8',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '8月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month12',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '12月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month18',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '18月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month24',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '24月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month30',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '30月龄', icon: 'el-icon-document' }
      },
      {
        path: 'year3',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '3岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year4',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '4岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year5',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '5岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year6',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '6岁龄', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: 'child',
    name: 'Form',
    component: () => import('@/views/form/index'),
    meta: { title: '儿童体检', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'Menu2',
        meta: { title: '所有记录', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '信息登记', icon: 'user' }
      }
    ]
  },
  {
    path: 'zhiyebing',
    name: 'Form',
    component: () => import('@/views/form/index'),
    meta: { title: '职业病体检', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'Menu2',
        meta: { title: '所有记录', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '信息登记', icon: 'user' }
      }
    ]
  },
  {
    path: 'patient',
    name: 'Form',
    component: () => import('@/views/form/index'),
    meta: { title: '档案管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'Menu2',
        meta: { title: '所有档案', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '新建档案', icon: 'user' }
      },
      {
        path: 'upload',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '上传档案', icon: 'el-icon-setting' }
      },
      {
        path: 'sync',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '同步档案', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    path: 'team',
    name: 'Form',
    component: () => import('@/views/form/index'),
    meta: { title: '团队管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'Menu2',
        meta: { title: '所有团队', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '创建团队', icon: 'user' }
      },
    ]
  },

  {
    path: '/admin',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {title: '机构设置', icon: 'el-icon-folder'},
    children: [
      {
        path: 'orgs',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '所有机构', icon: 'el-icon-setting' }
      },
      {
        path: 'org',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '机构设置' , icon: 'el-icon-setting'}
      },
      {
        path: 'office',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '科室设置', icon: 'el-icon-setting' }
      },
      {
        path: 'org',
        component: () => import('@/views/nested/menu2/index'),
        name: 'user',
        meta: { title: '用户管理', icon: 'el-icon-setting' }
      },
      {
        path: 'exam_type',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '体检类型', icon: 'el-icon-setting' }
      },
      {
        path: 'package',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '套餐设置', icon: 'el-icon-setting' }
      },
      {
        path: 'combo',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '组合设置', icon: 'el-icon-setting' }
      },
      {
        path: 'item',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '项目设置', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    path: 'setting',
    component: () => import('@/views/nested/menu1/index'), // Parent router-view
    name: 'Menu1',
    meta: { title: '系统设置', icon: 'el-icon-folder' },
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
