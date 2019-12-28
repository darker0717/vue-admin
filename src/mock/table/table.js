import Mock from 'mockjs'
const TableList = Mock.mock({
  "code": 200,
  "list|10": [{
    "id|+1": 1, //也可以用这个@id
    'img': '@image()', //随机图片
    "name": "@name()",
    'age|1-40': 40,
    'sex|1-2': 2,
    'phone': '15176162328',
    "dateTime": "@now()",
    'price': '@integer(100,2000)',
    'turnover': '@integer(100,2000)', //成交率
    "address": "上海市普陀区金沙江路 1518 弄"
  }],
  total: 200,
  msg: "成功"
})
export default TableList;
