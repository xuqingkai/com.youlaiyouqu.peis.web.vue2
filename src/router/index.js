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
    meta: { title: '后台' },
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
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/exam',
    component: Layout,
    redirect: '/exam/index',
    name: 'exam',
    meta: { title: '体检管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'add',
        name: 'exam/add',
        component: () => import('@/views/exam/add'),
        meta: { title: '体检登记', icon: 'el-icon-edit-outline' }
      },
      {
        path: 'index',
        name: 'exam/index',
        component: () => import('@/views/exam/index'),
        meta: { title: '体检记录', icon: 'el-icon-document-copy' }
      },
      {
        path: 'elder/add',
        name: 'exam/elder/add ',
        component: () => import('@/views/exam/elder/add'),
        meta: { title: '老年人登记', icon: 'el-icon-edit-outline' }
      },
      {
        path: 'elder/index',
        name: 'exam/elder/index',
        component: () => import('@/views/exam/elder/index'),
        meta: { title: '老年人体检', icon: 'el-icon-document-copy' }
      }
    ]
  },
  {
    path: '/elder',
    component: Layout,
    redirect: '/example/table',
    name: 'elder',
    meta: { title: '老年人查体', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        name: 'elder/index',
        component: () => import('@/views/elder/index'),
        meta: { title: '健康体检表', icon: 'el-icon-document' }
      },
      {
        path: 'tcm',
        name: 'elder/tcm',
        component: () => import('@/views/tree/index'),
        meta: { title: '中医体质辨识', icon: 'el-icon-document' }
      },
      {
        path: 'selfcare',
        name: 'elder/selfcare',
        component: () => import('@/views/tree/index'),
        meta: { title: '自理能力评估', icon: 'el-icon-document' }
      },
      {
        path: 'cognition',
        name: 'elder/cognition',
        component: () => import('@/views/tree/index'),
        meta: { title: '认知功能筛查', icon: 'el-icon-document' }
      },
      {
        path: 'emotion',
        name: 'elder/emotion',
        component: () => import('@/views/tree/index'),
        meta: { title: '情感状态筛查', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: '/manbing',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'manbing',
    meta: { title: '慢性病随访', icon: 'el-icon-folder' },
    children: [
      {
        path: 'hypertension',
        name: 'manbing/hypertension',
        component: () => import('@/views/table/index'),
        meta: { title: '高血压', icon: 'el-icon-document' }
      },
      {
        path: 'diabetes',
        name: 'manbing/diabetes',
        component: () => import('@/views/table/index'),
        meta: { title: '糖尿病', icon: 'el-icon-document' }
      },
      {
        path: 'phthisis',
        name: 'manbing/phthisis',
        component: () => import('@/views/table/index'),
        meta: { title: '肺结核', icon: 'el-icon-document' }
      },
      {
        path: 'psychosis',
        name: 'manbing/psychosis',
        component: () => import('@/views/table/index'),
        meta: { title: '精神病', icon: 'el-icon-document' }
      },
      {
        path: 'apoplexy',
        name: 'manbing/apoplexy',
        component: () => import('@/views/table/index'),
        meta: { title: '脑卒中', icon: 'el-icon-document' }
      },
      {
        path: 'coronary',
        name: 'manbing/coronary',
        component: () => import('@/views/table/index'),
        meta: { title: '冠心病', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: '/gravida',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'gravida',
    meta: { title: '孕产妇随访', icon: 'el-icon-folder' },
    children: [
      {
        path: '1st',
        name: 'gravida/1st',
        component: () => import('@/views/table/index'),
        meta: { title: '第一次', icon: 'el-icon-document' }
      },
      {
        path: '2nd',
        name: 'gravida/2nd',
        component: () => import('@/views/table/index'),
        meta: { title: '第二次', icon: 'el-icon-document' }
      },
      {
        path: '3rd',
        name: 'gravida/3rd',
        component: () => import('@/views/tree/index'),
        meta: { title: '第三次', icon: 'el-icon-document' }
      },
      {
        path: '4th',
        name: 'gravida/4th',
        component: () => import('@/views/tree/index'),
        meta: { title: '第四次', icon: 'el-icon-document' }
      },
      {
        path: '5th',
        name: 'gravida/5th',
        component: () => import('@/views/tree/index'),
        meta: { title: '第五次', icon: 'el-icon-document' }
      },
      {
        path: 'after',
        name: 'gravida/after',
        component: () => import('@/views/tree/index'),
        meta: { title: '产后', icon: 'el-icon-document' }
      },
      {
        path: '42d',
        name: 'gravida/42d',
        component: () => import('@/views/tree/index'),
        meta: { title: '产后42天', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: '/baby',
    component: () => import('@/views/table/index'), // Parent router-view
    name: 'baby',
    meta: { title: '新生儿随访', icon: 'el-icon-folder' },
    children: [
      {
        path: 'family',
        name: 'baby/family',
        component: () => import('@/views/table/index'),
        meta: { title: '家庭访视', icon: 'el-icon-document' }
      },
      {
        path: 'month1',
        name: 'baby/month1',
        component: () => import('@/views/table/index'),
        meta: { title: '1月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month3',
        name: 'baby/month3',
        component: () => import('@/views/tree/index'),
        meta: { title: '3月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month6',
        name: 'baby/month6',
        component: () => import('@/views/tree/index'),
        meta: { title: '6月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month8',
        name: 'baby/month8',
        component: () => import('@/views/tree/index'),
        meta: { title: '8月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month12',
        name: 'baby/month12',
        component: () => import('@/views/tree/index'),
        meta: { title: '12月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month18',
        name: 'baby/month18',
        component: () => import('@/views/tree/index'),
        meta: { title: '18月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month24',
        name: 'baby/month24',
        component: () => import('@/views/tree/index'),
        meta: { title: '24月龄', icon: 'el-icon-document' }
      },
      {
        path: 'month30',
        name: 'baby/month30',
        component: () => import('@/views/tree/index'),
        meta: { title: '30月龄', icon: 'el-icon-document' }
      },
      {
        path: 'year3',
        name: 'baby/year3',
        component: () => import('@/views/tree/index'),
        meta: { title: '3岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year4',
        name: 'baby/year4',
        component: () => import('@/views/tree/index'),
        meta: { title: '4岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year5',
        name: 'baby/year5',
        component: () => import('@/views/tree/index'),
        meta: { title: '5岁龄', icon: 'el-icon-document' }
      },
      {
        path: 'year6',
        name: 'baby/year6',
        component: () => import('@/views/tree/index'),
        meta: { title: '6岁龄', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: '/child',
    name: 'child',
    component: () => import('@/views/form/index'),
    meta: { title: '儿童体检', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'child/index',
        meta: { title: '所有记录', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'child/add',
        meta: { title: '信息登记', icon: 'user' }
      }
    ]
  },
  {
    path: '/occupation',
    name: 'occupation',
    component: () => import('@/views/form/index'),
    meta: { title: '职业病体检', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'occupation/index',
        meta: { title: '所有记录', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'occupation/add',
        meta: { title: '信息登记', icon: 'user' }
      }
    ]
  },
  {
    path: '/patient',
    name: 'patient',
    component: () => import('@/views/form/index'),
    meta: { title: '档案管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'patient/index',
        meta: { title: '所有档案', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'patient/add',
        meta: { title: '新建档案', icon: 'user' }
      },
      {
        path: 'upload',
        component: () => import('@/views/nested/menu2/index'),
        name: 'patient/upload',
        meta: { title: '上传档案', icon: 'el-icon-setting' }
      },
      {
        path: 'sync',
        component: () => import('@/views/nested/menu2/index'),
        name: 'patient/sync',
        meta: { title: '同步档案', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/form/index'),
    meta: { title: '团队管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree/index'),
        name: 'team/index',
        meta: { title: '所有团队', icon: 'el-icon-setting' }
      },
      {
        path: 'add',
        component: () => import('@/views/nested/menu2/index'),
        name: 'team/add',
        meta: { title: '创建团队', icon: 'user' }
      }
    ]
  },

  {
    path: '/admin',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'admin',
    meta: { title: '机构设置', icon: 'el-icon-folder' },
    children: [
      {
        path: 'orgs',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/orgs',
        meta: { title: '所有机构', icon: 'el-icon-setting' }
      },
      {
        path: 'org',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/org',
        meta: { title: '机构设置', icon: 'el-icon-setting' }
      },
      {
        path: 'office',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/office',
        meta: { title: '科室设置', icon: 'el-icon-setting' }
      },
      {
        path: 'user',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/user',
        meta: { title: '用户管理', icon: 'el-icon-setting' }
      },
      {
        path: 'exam_type',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/exam_type',
        meta: { title: '体检类型', icon: 'el-icon-setting' }
      },
      {
        path: 'package',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/package',
        meta: { title: '套餐设置', icon: 'el-icon-setting' }
      },
      {
        path: 'combo',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/combo',
        meta: { title: '组合设置', icon: 'el-icon-setting' }
      },
      {
        path: 'item',
        component: () => import('@/views/nested/menu2/index'),
        name: 'admin/item',
        meta: { title: '项目设置', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    name: 'Setting',
    path: '/setting',
    meta: { title: '系统设置', icon: 'el-icon-folder' },
    children: [
      {
        path: 'index',
        name: 'SettingIndex',
        meta: { title: '平台设置' },
        component: () => import('@/views/nested/menu1/menu1-1')
      },
      {
        name: 'SettingReport',
        path: 'report',
        meta: { title: '报表模板' },
        component: () => import('@/views/nested/menu1/menu1-3')
      },
      {
        name: 'SettingDevice',
        path: 'device',
        meta: { title: '终端管理' },
        component: () => import('@/views/nested/menu1/menu1-3')
      }
    ]
  },
  {
    path: '/help',
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
