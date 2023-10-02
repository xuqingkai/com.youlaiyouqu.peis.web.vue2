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
      name: 'Dashboard',
      meta: { title: '首页', icon: 'dashboard' },
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    name: 'Exam',
    meta: { title: '体检管理', icon: 'el-icon-folder' },
    path: '/exam',
    redirect: '/exam/index',
    component: Layout,
    children: [
      {
        name: 'ExamAdd',
        meta: { title: '体检登记', icon: 'el-icon-edit-outline' },
        path: 'add',
        component: () => import('@/views/exam/add')
      },
      {
        name: 'ExamIndex',
        meta: { title: '体检记录', icon: 'el-icon-document-copy' },
        path: 'index',
        component: () => import('@/views/exam/index')
      },
      {
        name: 'ExamElderAdd',
        meta: { title: '老年人登记', icon: 'el-icon-edit-outline' },
        path: 'elder/add',
        component: () => import('@/views/exam/elder/add')
      },
      {
        name: 'ExamElderIndex',
        meta: { title: '老年人体检', icon: 'el-icon-document-copy' },
        path: 'elder/index',
        component: () => import('@/views/exam/elder/index')
      }
    ]
  },
  {
    name: 'Elder',
    meta: { title: '老年人查体', icon: 'el-icon-folder' },
    path: '/elder',
    redirect: '/elder/tcm',
    component: Layout,
    children: [
      {
        name: 'ElderIndex',
        meta: { title: '健康体检表', icon: 'el-icon-document' },
        path: 'index',
        component: () => import('@/views/elder/index')
      },
      {
        name: 'ElderSave',
        meta: { title: '体检表详情', icon: 'el-icon-document' },
        path: 'save',
        component: () => import('@/views/elder/save')
      },
      {
        name: 'ElderTCM',
        meta: { title: '中医体质辨识', icon: 'el-icon-document' },
        path: 'tcm',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'ElderSelfcare',
        meta: { title: '自理能力评估', icon: 'el-icon-document' },
        path: 'selfcare',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'ElderCognition',
        meta: { title: '认知功能筛查', icon: 'el-icon-document' },
        path: 'cognition',
        component: () => import('@/views/tree/index')
      },
      {
        path: 'emotion',
        name: 'ElderEmotion',
        meta: { title: '情感状态筛查', icon: 'el-icon-document' },
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'Chronic',
    meta: { title: '慢性病随访', icon: 'el-icon-folder' },
    path: '/chronic',
    component: Layout,
    children: [
      {
        name: 'ChronicHypertension',
        meta: { title: '高血压', icon: 'el-icon-document' },
        path: 'hypertension',
        component: () => import('@/views/table/index')
      },
      {
        name: 'ChronicDiabetes',
        meta: { title: '糖尿病', icon: 'el-icon-document' },
        path: 'diabetes',
        component: () => import('@/views/table/index')
      },
      {
        name: 'ChronicPhthisis',
        meta: { title: '肺结核', icon: 'el-icon-document' },
        path: 'phthisis',
        component: () => import('@/views/table/index')
      },
      {
        name: 'ChronicPsychosis',
        meta: { title: '精神病', icon: 'el-icon-document' },
        path: 'psychosis',
        component: () => import('@/views/table/index')
      },
      {
        name: 'ChronicApoplexy',
        meta: { title: '脑卒中', icon: 'el-icon-document' },
        path: 'apoplexy',
        component: () => import('@/views/table/index')
      },
      {
        name: 'ChronicCoronary',
        meta: { title: '冠心病', icon: 'el-icon-document' },
        path: 'coronary',
        component: () => import('@/views/table/index')
      }
    ]
  },
  {
    name: 'Gravida',
    meta: { title: '孕产妇随访', icon: 'el-icon-folder' },
    path: '/gravida',
    hidden: true,
    component: Layout, // Parent router-view
    children: [
      {
        name: 'GravidaFirst',
        meta: { title: '第一次', icon: 'el-icon-document' },
        path: 'first',
        component: () => import('@/views/table/index')
      },
      {
        name: 'GravidaSecond',
        meta: { title: '第二次', icon: 'el-icon-document' },
        path: 'second',
        component: () => import('@/views/table/index')
      },
      {
        name: 'GravidaThird',
        meta: { title: '第三次', icon: 'el-icon-document' },
        path: 'third',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'GravidaFourth',
        meta: { title: '第四次', icon: 'el-icon-document' },
        path: 'fourth',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'GravidaFifth',
        meta: { title: '第五次', icon: 'el-icon-document' },
        path: 'fifth',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'GravidaAfter',
        meta: { title: '产后', icon: 'el-icon-document' },
        path: 'after',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'GravidaAfterFortySecondDays',
        meta: { title: '产后42天', icon: 'el-icon-document' },
        path: 'after_forty_second_days',
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'Baby',
    meta: { title: '新生儿随访', icon: 'el-icon-folder' },
    path: '/baby',
    hidden: true,
    component: () => Layout,
    children: [
      {
        name: 'BabyFamilyVisit',
        meta: { title: '家庭访视', icon: 'el-icon-document' },
        path: 'family_visit',
        component: () => import('@/views/table/index')
      },
      {
        name: 'BabyOneMonthsOld',
        meta: { title: '1月龄', icon: 'el-icon-document' },
        path: 'one_months_old',
        component: () => import('@/views/table/index')
      },
      {
        name: 'BabyThreeMonthsOld',
        meta: { title: '3月龄', icon: 'el-icon-document' },
        path: 'three_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabySixMonthsOld',
        meta: { title: '6月龄', icon: 'el-icon-document' },
        path: 'six_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyEightMonthsOld',
        meta: { title: '8月龄', icon: 'el-icon-document' },
        path: 'eight_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyTwelveMonthsOld',
        meta: { title: '12月龄', icon: 'el-icon-document' },
        path: 'twelve_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyEighteenMonthsOld',
        meta: { title: '18月龄', icon: 'el-icon-document' },
        path: 'eighteen_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyTwentyFourMonthsOld',
        meta: { title: '24月龄', icon: 'el-icon-document' },
        path: 'twenty_four_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyThirtyMonthsOld',
        meta: { title: '30月龄', icon: 'el-icon-document' },
        path: 'thirty_months_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyThreeYearOld',
        meta: { title: '3岁龄', icon: 'el-icon-document' },
        path: 'three_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyFourYearOld',
        meta: { title: '4岁龄', icon: 'el-icon-document' },
        path: 'four_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabyFiveYearOld',
        meta: { title: '5岁龄', icon: 'el-icon-document' },
        path: 'five_years_old',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'BabySixYearOld',
        meta: { title: '6岁龄', icon: 'el-icon-document' },
        path: 'six_years_old',
        component: () => import('@/views/tree/index')
      }
    ]
  },
  {
    name: 'Child',
    meta: { title: '儿童体检', icon: 'el-icon-folder' },
    path: '/child',
    hidden: true,
    component: () => Layout,
    children: [
      {
        name: 'ChildIndex',
        meta: { title: '所有记录', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'ChildAdd',
        meta: { title: '信息登记', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'Occupation',
    meta: { title: '职业病体检', icon: 'el-icon-folder' },
    path: '/occupation',
    hidden: true,
    component: () => Layout,
    children: [
      {
        name: 'OccupationIndex',
        meta: { title: '所有记录', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'OccupationAdd',
        meta: { title: '信息登记', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'Patient',
    meta: { title: '档案管理', icon: 'el-icon-folder' },
    path: '/patient',
    component: () => import('@/views/form/index'),
    children: [
      {
        name: 'PatientIndex',
        meta: { title: '所有档案', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'PatientAdd',
        meta: { title: '新建档案', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'PatientUpload',
        meta: { title: '上传档案', icon: 'el-icon-setting' },
        path: 'upload',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'PatientSync',
        meta: { title: '同步档案', icon: 'el-icon-setting' },
        path: 'sync',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'Team',
    meta: { title: '团队管理', icon: 'el-icon-folder' },
    path: '/team',
    component: () => Layout,
    children: [
      {
        name: 'TeamIndex',
        meta: { title: '所有团队', icon: 'el-icon-setting' },
        path: 'index',
        component: () => import('@/views/tree/index')
      },
      {
        name: 'TeamAdd',
        meta: { title: '创建团队', icon: 'user' },
        path: 'add',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },

  {
    name: 'Admin',
    meta: { title: '机构设置', icon: 'el-icon-folder' },
    path: '/admin',
    redirect: '/admin/index',
    component: Layout,
    children: [
      {
        name: 'Orgs',
        meta: { title: '所有机构', icon: 'el-icon-setting' },
        path: 'orgs',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'Org',
        meta: { title: '机构设置', icon: 'el-icon-setting' },
        path: 'org',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'Office',
        meta: { title: '科室设置', icon: 'el-icon-setting' },
        path: 'office',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'User',
        meta: { title: '用户管理', icon: 'el-icon-setting' },
        path: 'user',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'ExamType',
        meta: { title: '体检类型', icon: 'el-icon-setting' },
        path: 'exam_type',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'Package',
        meta: { title: '套餐设置', icon: 'el-icon-setting' },
        path: 'package',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'Combo',
        meta: { title: '组合设置', icon: 'el-icon-setting' },
        path: 'combo',
        component: () => import('@/views/nested/menu2/index')
      },
      {
        name: 'Item',
        meta: { title: '项目设置', icon: 'el-icon-setting' },
        path: 'item',
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    name: 'Setting',
    path: '/setting',
    meta: { title: '系统设置', icon: 'el-icon-folder' },
    component: Layout,
    children: [
      {
        name: 'SettingIndex',
        meta: { title: '平台设置' },
        path: 'index',
        component: () => import('@/views/nested/menu1/menu1-1')
      },
      {
        name: 'SettingReport',
        meta: { title: '报表模板' },
        path: 'report',
        component: () => import('@/views/nested/menu1/menu1-3')
      },
      {
        name: 'SettingDevice',
        meta: { title: '终端管理' },
        path: 'device',
        component: () => import('@/views/nested/menu1/menu1-3')
      }
    ]
  },
  {
    name: 'Help',
    path: '/help',
    meta: { title: '帮助中心', icon: 'el-icon-folder' },
    component: Layout,
    children: [
      {
        name: 'HelpIndex',
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
