export default {
  'POST /user/login'(req, res){
    setTimeout(() => {
      res.json({
        success: true,
        token: '873794hduw64943',
        msg: '登录成功'
      });
    }, 200);
  },
  'POST /user/register'(req, res){
    setTimeout(() => {
      res.json({
        success: true,
        mobile: '172569463',
        token: '873794364943',
        username: ''
      });
    }, 200);
  },
  'POST /user/code'(req, res){
    setTimeout(() => {
      res.json({
        mobile: '172569463',
      });
    }, 200);
  },

  'POST /join'(req, res){
    setTimeout(() => {
      res.json({
        success: true,
        msg: '报名成功'
      });
    }, 200);
  },
  
  'GET /api/users': { users: [1,2] },
  'GET /api/getList':{
      'action': [
        '设置训练数据 特征1',
        '设置特征2'
      ],
      'event': [
        '设置特征1',
        '设置特征2',
        '设置训练数据 特征3',
      ],
      'outward': [
        '设置特征1',
        '设置特征2',
        '设置训练数据 特征1',
        '设置训练数据 特征3',
      ],
      'sound': [
        '设置特征1',
        '设置特征2',
        '设置训练数据 特征1',
      ],
      'pen': [
        '设置特征1',
        '设置特征2',
        '设置训练数据 特征3',
      ],
      'data': [
        '设置特征1',
        '设置特征2'
      ]
  }
};
