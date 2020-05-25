import Mock from 'mockjs'

const data = Mock.mock({
  'items|50': [{
    user_id: '@id',
    activity_id: '@id',
    application_time: '@datetime',
    finish_case: '@sentence(1, 2)',
    application_content: '@sentence(1, 2)',
    application_material: '@sentence(1, 2)',
    'application_state|1': ['complete', 'draft', 'deleted'],
    note: '@integer(300, 5000)'
  }]
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
  }
]
