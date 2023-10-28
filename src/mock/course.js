const Mock = require ( 'mockjs' )

Mock.mock ( '/myapi/course' , 'get' , {
  code : '0' ,
  message : '' ,
  'data|200-300' : [ {
    'CourseName' : '@ctitle(5, 20)' ,
  } ]
} )
