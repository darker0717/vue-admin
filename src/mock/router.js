import mock from 'mockjs'


const Information = [{
    id: '1',
    name: '数据统计',
    icon: 'el-icon-menu',
    flag: false,
    children: [{
        id: '1-1',
        name: '数据图表',
        path: '/index/index'
      },
      {
        id: '1-2',
        name: '数据统计',
        path: '/data/index'
      }
    ],
  },
  {
    id: '2',
    name: '数据表格',
    icon: 'el-icon-notebook-2',
    children: [{
      id: '2-1',
      name: '数据表',
      path: '/table'
    }]
  },
  {
    id: '3',
    name: '步骤条',
    icon: 'el-icon-guide',
    children: [{
      id: '3-1',
      name: '步骤条',
      path: '/Article/steps'
    }, ]
  },
  {
    id: '4',
    name: '系统设置',
    icon: 'el-icon-guide',
    children: [{
      id: '4-1',
      name: '系统设置',
      path: '/system/set'
    }]
  }
]




export default Information;
