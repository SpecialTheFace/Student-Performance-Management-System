const Mock = require ( 'mockjs' )

Mock.mock ( '/myapi/student' , 'get' , {
  code : '0' ,
  message : '' ,
  'data|5' : [ {
    'id|+1':0,
    'Name' : '@cname' ,
    'DateOfBirth' : '@date("1990-01-01", "2005-12-31")' ,
    'Gender|1' : [ '男' , '女' ] ,
    'Address' : '@county(true)' ,
    'PhoneNumber' : /1[3456789]\d{9}/ ,
    'Email' : Mock.Random.email () ,
    'AdmissionDate' : '@date("2000-01-01", "2023-12-31")'
  } ]
} )
