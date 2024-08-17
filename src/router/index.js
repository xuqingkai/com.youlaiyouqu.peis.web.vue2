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
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard' },
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    meta: { title: '体检管理', icon: 'el-icon-folder' },
    path: '/exam',
    redirect: '/exam/index',
    component: Layout,
    children: [
      {
        name: 'exam.add',
        meta: { title: '体检登记', icon: 'el-icon-edit-outline' },
        path: 'add',
        hidden: true,
        component: () => import('@/views/exam/add')
      },
      {
        name: 'exam',
        meta: { title: '体检记录', icon: 'el-icon-document-copy' },
        path: 'index',
        hidden: true,
        component: () => import('@/views/exam/index')
      },
      {
        name: 'exam.elder.save',
        meta: { title: '老年人登记', icon: 'el-icon-edit-outline' },
        path: 'elder/save',
        component: () => import('@/views/exam/elder/add')
      },
      {
        name: 'exam.elder',
        meta: { title: '老年人体检', icon: 'el-icon-document-copy' },
        path: 'elder/index',
        component: () => import('@/views/exam/elder/index')
      }
    ]
  },
  {
    meta: { title: '老年人查体', icon: 'el-icon-folder' },
    path: '/elder',
    redirect: '/elder/index',
    component: Layout,
    children: [
      {
        name: 'elder.index',
        meta: { title: '健康体检表', icon: 'el-icon-document' },
        path: 'index',
        component: () => import('@/views/elder/index')
      },
      {
        name: 'elder.save',
        meta: { title: '体检表详情', icon: 'el-icon-document' },
        path: 'save',
        hidden: true,
        component: () => import('@/views/elder/save')
      },
      {
        name: 'elder.setting',
        meta: { title: '问卷设置', icon: 'el-icon-document' },
        path: 'setting',
        component: () => import('@/views/elder/setting')
      },
      {
        name: 'elder.savenew',
        meta: { title: '新问卷', icon: 'el-icon-document' },
        path: 'savenew',
        component: () => import('@/views/elder/save-new')
      },
      {
        name: 'elder.savesd',
        meta: { title: '山东卷', icon: 'el-icon-document' },
        path: 'savesd',
        component: () => import('@/views/elder/save-sd')
      },
      {
        name: 'elder.tcm',
        meta: { title: '中医体质辨识', icon: 'el-icon-document' },
        path: 'tcm',
        component: () => import('@/views/elder/tcm/index')
      },
      {
        name: 'elder.tcm.save',
        meta: { title: '中医体质辨识', icon: 'el-icon-document' },
        path: 'tcm/save',
        hidden: true,
        component: () => import('@/views/elder/tcm/save')
      },
      {
        name: 'elder.selfcare',
        meta: { title: '自理能力评估', icon: 'el-icon-document' },
        path: 'selfcare/index',
        component: () => import('@/views/elder/selfcare/index')
      },
      {
        name: 'elder.selfcare.save',
        meta: { title: '自理能力评估', icon: 'el-icon-document' },
        path: 'selfcare/save',
        component: () => import('@/views/elder/selfcare/save'),
        hidden: true
      },
      {
        name: 'elder.cognition',
        meta: { title: '认知功能筛查', icon: 'el-icon-document' },
        path: 'cognition',
        component: () => import('@/views/tree/index')
      },
      {
        path: 'emotion',
        name: 'elder.emotion',
        meta: { title: '情感状态筛查', icon: 'el-icon-document' },
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'chronic',
    meta: { title: '慢性病随访', icon: 'el-icon-folder' },
    path: '/chronic',
    redirect: '/chronic/hypertension',
    component: Layout,
    children: [
      {
        name: 'hypertension',
        meta: { title: '高血压', icon: 'el-icon-document' },
        path: 'hypertension',
        component: () => import('@/views/hypertension/index')
      },
      {
        name: 'hypertension.save',
        meta: { title: '高血压', icon: 'el-icon-document' },
        path: 'hypertension/save',
        hidden: true,
        component: () => import('@/views/hypertension/save')
      },
      {
        name: 'diabetes',
        meta: { title: '糖尿病', icon: 'el-icon-document' },
        path: 'diabetes',
        component: () => import('@/views/diabetes/index')
      },
      {
        name: 'diabetes.save',
        meta: { title: '糖尿病', icon: 'el-icon-document' },
        path: 'diabetes/save',
        hidden: true,
        component: () => import('@/views/diabetes/save')
      },
      {
        name: 'phthisis',
        meta: { title: '肺结核', icon: 'el-icon-document' },
        path: 'phthisis',
        hidden: true,
        component: () => import('@/views/table/index')
      },
      {
        name: 'psychosis',
        meta: { title: '精神病', icon: 'el-icon-document' },
        path: 'psychosis',
        hidden: true,
        component: () => import('@/views/table/index')
      },
      {
        name: 'apoplexy',
        meta: { title: '脑卒中', icon: 'el-icon-document' },
        path: 'apoplexy',
        hidden: true,
        component: () => import('@/views/table/index')
      },
      {
        name: 'coronary',
        meta: { title: '冠心病', icon: 'el-icon-document' },
        path: 'coronary',
        hidden: true,
        component: () => import('@/views/table/index')
      },
      {
        name: 'copd',
        meta: { title: '慢阻肺', icon: 'el-icon-document' },
        path: 'copd',
        hidden: true,
        component: () => import('@/views/table/index')
      }
    ]
  },
  {
    name: 'gravida',
    meta: { title: '孕产妇随访', icon: 'el-icon-folder' },
    path: '/gravida',
    hidden: true,
    component: Layout, // Parent router-view
    children: [
      {
        name: 'gravida.first',
        meta: { title: '第一次', icon: 'el-icon-document' },
        path: 'first',
        component: () => import('@/views/table/index')
      },
      {
        name: 'gravida.2nd',
        meta: { title: '第二次', icon: 'el-icon-document' },
        path: 'second',
        component: () => import('@/views/table/index')
      },
      {
        name: 'gravida.3rd',
        meta: { title: '第三次', icon: 'el-icon-document' },
        path: 'third',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'gravida.4th',
        meta: { title: '第四次', icon: 'el-icon-document' },
        path: 'fourth',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'gravida.5th',
        meta: { title: '第五次', icon: 'el-icon-document' },
        path: 'fifth',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'gravida.after',
        meta: { title: '产后', icon: 'el-icon-document' },
        path: 'after',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'gravida.42d',
        meta: { title: '产后42天', icon: 'el-icon-document' },
        path: 'after_forty_second_days',
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'baby',
    meta: { title: '新生儿随访', icon: 'el-icon-folder' },
    path: '/baby',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'baby.family',
        meta: { title: '家庭访视', icon: 'el-icon-document' },
        path: 'family_visit',
        component: () => import('@/views/table/index')
      },
      {
        name: 'baby.1m',
        meta: { title: '1月龄', icon: 'el-icon-document' },
        path: 'one_months_old',
        component: () => import('@/views/table/index')
      },
      {
        name: 'baby.3m',
        meta: { title: '3月龄', icon: 'el-icon-document' },
        path: 'three_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.6m',
        meta: { title: '6月龄', icon: 'el-icon-document' },
        path: 'six_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.8m',
        meta: { title: '8月龄', icon: 'el-icon-document' },
        path: 'eight_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.12m',
        meta: { title: '12月龄', icon: 'el-icon-document' },
        path: 'twelve_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.18m',
        meta: { title: '18月龄', icon: 'el-icon-document' },
        path: 'eighteen_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.24m',
        meta: { title: '24月龄', icon: 'el-icon-document' },
        path: 'twenty_four_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.30m',
        meta: { title: '30月龄', icon: 'el-icon-document' },
        path: 'thirty_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.3y',
        meta: { title: '3岁龄', icon: 'el-icon-document' },
        path: 'three_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.4y',
        meta: { title: '4岁龄', icon: 'el-icon-document' },
        path: 'four_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.5y',
        meta: { title: '5岁龄', icon: 'el-icon-document' },
        path: 'five_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'baby.6y',
        meta: { title: '6岁龄', icon: 'el-icon-document' },
        path: 'six_years_old',
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'child',
    meta: { title: '儿童体检', icon: 'el-icon-folder' },
    path: '/child',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'child.index',
        meta: { title: '所有记录', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'child.add',
        meta: { title: '信息登记', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'occupation',
    meta: { title: '职业病体检', icon: 'el-icon-folder' },
    path: '/occupation',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'occupation.index',
        meta: { title: '所有记录', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'occupation.add',
        meta: { title: '信息登记', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'student',
    meta: { title: '学生体检', icon: 'el-icon-folder' },
    path: '/student',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'student.index',
        meta: { title: '所有记录', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'student.add',
        meta: { title: '信息登记', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'patient',
    meta: { title: '档案管理', icon: 'el-icon-folder' },
    path: '/patient',
    component: Layout,
    children: [
      {
        name: 'patient.all',
        meta: { title: '所有档案', icon: 'el-icon-setting' },
        path: 'index',
        hidden: true,
        component: () => import('@/views/patient/index')
      },
      {
        name: 'patient.elder',
        meta: { title: '老年人档案', icon: 'el-icon-setting' },
        path: 'elder',
        component: () => import('@/views/patient/elder/index')
      },
      {
        name: 'patient.elder.save',
        meta: { title: '新建档案', icon: 'user' },
        path: 'add',
        component: () => import('@/views/patient/elder/save')
      },
      {
        name: 'patient.upload',
        meta: { title: '上传档案', icon: 'el-icon-setting' },
        path: 'upload',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'patient.sync',
        meta: { title: '同步档案', icon: 'el-icon-setting' },
        path: 'sync',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'team',
    meta: { title: '团队管理', icon: 'el-icon-folder' },
    path: '/team',
    component: Layout,
    children: [
      {
        name: 'team.index',
        meta: { title: '所有团队', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'team.add',
        meta: { title: '创建团队', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'admin',
    meta: { title: '机构设置', icon: 'el-icon-folder' },
    path: '/admin',
    component: Layout,
    children: [
      {
        name: 'region.index',
        meta: { title: '所属区域', icon: 'el-icon-setting' },
        path: 'region',
        component: () => import('@/views/region/index')
      },
      {
        name: 'region.save',
        meta: { title: '所属设置', icon: 'el-icon-setting' },
        path: 'region/save',
        hidden: true,
        component: () => import('@/views/region/save')
      },
      {
        name: 'org.index',
        meta: { title: '所有机构', icon: 'el-icon-setting' },
        path: 'orgs',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'org.save',
        meta: { title: '机构设置', icon: 'el-icon-setting' },
        path: 'org',
        component: () => import('@/views/org/save')
      },
      {
        name: 'office.index',
        meta: { title: '科室设置', icon: 'el-icon-setting' },
        path: 'office',
        component: () => import('@/views/office/index')
      },
      {
        name: 'office.save',
        meta: { title: '科室详情', icon: 'el-icon-setting' },
        path: 'office/save',
        hidden: true,
        component: () => import('@/views/office/save')
      },
      {
        name: 'user.index',
        meta: { title: '用户管理', icon: 'el-icon-setting' },
        path: 'user',
        component: () => import('@/views/user/index')
      },
      {
        name: 'user.save',
        meta: { title: '个人资料', icon: 'el-icon-setting' },
        path: 'user/save',
        component: () => import('@/views/user/save')
      },
      {
        name: 'package',
        meta: { title: '套餐设置', icon: 'el-icon-setting' },
        path: 'package',
        component: () => import('@/views/package/index')
      },
      {
        name: 'package.save',
        meta: { title: '套餐设置', icon: 'el-icon-setting' },
        path: 'package/save',
        hidden: true,
        component: () => import('@/views/package/save')
      },
      {
        name: 'combo',
        meta: { title: '组合设置', icon: 'el-icon-setting' },
        path: 'combo',
        component: () => import('@/views/combo/index')
      },
      {
        name: 'combo.items',
        meta: { title: '组合项目', icon: 'el-icon-setting' },
        path: 'combo/items',
        hidden: true,
        component: () => import('@/views/combo/items')
      },
      {
        name: 'combo.save',
        meta: { title: '组合设置', icon: 'el-icon-setting' },
        path: 'combo/save',
        hidden: true,
        component: () => import('@/views/combo/save')
      },
      {
        name: 'item',
        meta: { title: '项目设置', icon: 'el-icon-setting' },
        path: 'item',
        component: () => import('@/views/item/index')
      },
      {
        name: 'item.save',
        meta: { title: '项目设置', icon: 'el-icon-setting' },
        path: 'item/save',
        hidden: true,
        component: () => import('@/views/item/save')
      }
    ]
  },
  {
    name: 'setting',
    meta: { title: '系统设置', icon: 'el-icon-folder' },
    path: '/setting',
    component: Layout,
    children: [
      {
        name: 'platform.index',
        meta: { title: '平台设置' },
        path: 'platform',
        component: () => import('@/views/nested/menu1/menu1-1')
      },
      {
        name: 'report.index',
        meta: { title: '报表模板' },
        path: 'report',
        component: () => import('@/views/nested/menu1/menu1-3')
      },
      {
        name: 'device.index',
        meta: { title: '终端管理' },
        path: 'device',
        component: () => import('@/views/nested/menu1/menu1-3')
      }
    ]
  },
  {
    name: 'help',
    path: '/help/index',
    meta: { title: '帮助中心', icon: 'el-icon-folder' },
    component: Layout,
    children: [
      {
        name: 'help.index',
        meta: { title: '在线帮助', icon: 'link' },
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/'
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
