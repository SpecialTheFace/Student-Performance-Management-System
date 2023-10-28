const Mock = require ( 'mockjs' )

Mock.mock ( '/myapi/teachers' , 'get' , {
  code : '0' ,
  message : '' ,
  'data|200-350' : [ {
    'Name' : '@cname' ,
    'Gender|1' : [ '男' , '女' ] ,
    'Address' : '@county(true)' ,
    'PhoneNumber' : /1[3456789]\d{9}/ ,
    'Email' : Mock.Random.email ()
  } ]
} )
