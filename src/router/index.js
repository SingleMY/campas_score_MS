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
    icon: 'svg-name'             the icon show in the sidebar
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
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/score',
    component: Layout,
    redirect: '/score/apply',
    name: 'Score',
    meta: { title: '积分管理', icon: 'example' },
    children: [
      {
        path: 'apply',
        name: 'Apply',
        component: () => import('@/views/score/apply/index'),
        meta: { title: '积分申请', icon: 'table' }
      },
      {
        path: 'examine',
        name: 'Examine',
        component: () => import('@/views/score/examine/index'),
        meta: { title: '积分审核', icon: 'tree' }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/score/order/index'),
        meta: { title: '积分订单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/activity',
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'nested'
    },
    children: [
      {
        path: '/activity',
        component: () => import('@/views/system/activity'), // Parent router-view
        name: 'Activity',
        meta: { title: '活动管理' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/system/activity/list/index'),
            name: 'Alist',
            meta: { title: '活动列表' }
          },
          {
            path: 'apply',
            component: () => import('@/views/system/activity/apply/index'),
            name: 'Aapply',
            meta: { title: '活动申请' }
          },
          {
            path: 'add',
            component: () => import('@/views/system/activity/add/index'),
            name: 'Aadd',
            meta: { title: '新增活动' }
          }
        ]
      },
      {
        path: '/production',
        component: () => import('@/views/system/production'), // Parent router-view
        name: 'Production',
        meta: { title: '产品管理' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/system/production/list/index'),
            name: 'Plist',
            meta: { title: '产品列表' }
          },
          {
            path: 'apply',
            component: () => import('@/views/system/production/apply/index'),
            name: 'Papply',
            meta: { title: '产品审核' }
          },
          {
            path: 'add',
            component: () => import('@/views/system/production/add/index'),
            name: 'Padd',
            meta: { title: '新增产品' }
          }
        ]
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/student',
    name: 'User',
    meta: {
      title: '用户管理',
      icon: 'nested'
    },
    children: [
      {
        path: '/student',
        component: () => import('@/views/user/student'), // Parent router-view
        name: 'Student',
        meta: { title: '学生信息管理' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/user/student/list/index'),
            name: 'Slist',
            meta: { title: '学生列表' }
          },
          {
            path: 'add',
            component: () => import('@/views/user/student/add/index'),
            name: 'Sadd',
            meta: { title: '新增学生' }
          }
        ]
      },
      {
        path: '/business',
        component: () => import('@/views/user/business'), // Parent router-view
        name: 'Business',
        meta: { title: '商家信息管理' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/user/business/list/index'),
            name: 'Blist',
            meta: { title: '商家列表' }
          },
          {
            path: 'add',
            component: () => import('@/views/user/business/add/index'),
            name: 'Badd',
            meta: { title: '新增商家' }
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: 'info',
        component: () => import('@/views/admin/index'),
        meta: { title: '个人中心', icon: 'link' }
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
