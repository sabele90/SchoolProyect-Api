const Employee = require('../api/models/employee.model')
const ClassRoom = require('../api/models/classroom.model')
const Inventory = require('../api/models/inventory.model')
const Student = require('../api/models/student.model')
const ContactInfo=require('../api/models/contactInfo.model')
const Subject = require('../api/models/subject.model')
function addRelationsToModels() {
	try {
       //add models associations
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels