const router = require('express').Router()
const { checkAuth, checkAdmin }= require('../middleware')
const { getAllClassrooms,getOneClassroom,getOneClassroomEmployee,updateClassroom,createClassroom,deleteClassroom } = require('../controllers/classroom.controller')

router.get('/',checkAuth, getAllClassrooms)
router.get('/:classroomId', checkAuth,getOneClassroom)
router.get('/:classroomId/employees', checkAuth,checkAdmin,getOneClassroomEmployee) 
router.put('/:classroomId', checkAuth,checkAdmin,updateClassroom)
router.post('/',checkAuth, checkAdmin,createClassroom)
router.delete('/:classroomId', checkAuth,checkAdmin,deleteClassroom) 


module.exports=router