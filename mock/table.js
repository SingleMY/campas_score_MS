import Mock from 'mockjs'

const data = Mock.mock({
  'activities|50': [{
    activity_id: '@id',
    activity_name: '@id',
    activity_des: '@sentence(1, 5)',
    activity_begintime: '@datetime',
    activity_endtime: '@datetime',
    score: '@integer(0, 100)'
  }],
  'items|50': [{
    user_id: '@id',
    activity_id: '@id',
    application_time: '@datetime',
    finish_case: '@sentence(1, 2)',
    application_content: '@sentence(1, 2)',
    application_material: '@sentence(1, 2)',
    'application_state|1': ['complete', 'draft', 'deleted'],
    note: '@integer(300, 5000)'
  }],
  'productions|50': [{
    p_id: '@id',
    admin_id: '@id',
    p_name: '@id',
    p_description: '@sentence(1, 2)',
    p_price: '@sentence(1, 2)',
    p_place: '@sentence(1, 2)',
    p_prodution_date: '@datetime',
    p_validity: '@sentence(1, 2)'
  }],
  'students|50': [{
    user_id: '@id',
    admin_id: '@id',
    user_name: '@id',
    user_password: '@sentence(1, 2)',
    user_major: '@sentence(1, 2)',
    user_class: '@sentence(1, 2)',
    score: '@integer(0, 100)'
  }],
  'businesses|50': [{
    business_id: '@id',
    admin_id: '@id',
    business_name: '@id'
  }],
  'myinfor': {
    admin_id: '@id',
    admin_password: '@id',
    admin_username: '@sentence(1, 2)'
  }
})

export default [
  {
    url: '/score/applylist',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/activity/list',
    type: 'get',
    response: config => {
      const items = data.activities
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/production/list',
    type: 'get',
    response: config => {
      const items = data.productions
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/student/list',
    type: 'get',
    response: config => {
      const items = data.students
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/business/list',
    type: 'get',
    response: config => {
      const items = data.businesses
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/admin/infor',
    type: 'get',
    response: config => {
      const items = data.myinfor
      return {
        code: 200,
        data: {
          items: items
        }
      }
    }
  }
]
