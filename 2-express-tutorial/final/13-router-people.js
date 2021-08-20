const express = require('express')
const router = express.Router()
const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}
= require('./15-router-controller')

// HTTP GET (Default method)
// router.get('/', getPeople)

// This for Axios method
// router.post('/', createPerson)

// router.post('/postman', createPersonPostman)

// router.put('/:id', updatePerson)

// router.delete('/:id', deletePerson)

//Another alternative for above 5
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router