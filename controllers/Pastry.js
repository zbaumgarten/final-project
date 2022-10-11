// depends
const router = require('express').Router()
const pastry = require('../modella/Pastry-Model')

//home page 
router.get('/', (req, res) => {
    res.send('You are home.')
})

//pastries list page
router.get('/pastries', async (req, res) => {
    try {
        const pastries = await pastry.find()

        res.status(200).json(pastries)
    } catch (error) {
        res.status(500).json({ "message": "error accessing pastries" })
    }
})

//individual pastries page
router.get('pastries/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const pastries = await pastry.findOne({ _id })

        res.status(200).json(pastries)
    } catch (error) {
        res.status(500).json({ "message": "error accessing pastry info" })
    }
})

// delete pastry entry
router.delete('/pastries/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const pastries = await pastry.findOneAndDelete({ _id })

        res.status(200).redirect('/pastries')
    } catch (error) {
        res.status(500).json({ "message": "error deleting pastry" })
    }
})

//pastry info edit page
router.get('pastries/:_id/edit', async (req, res) => {
    try {
        const { _id } = req.params
        const pastries = await pastry.findOne({ _id })

        res.status(200).json(pastries)
    } catch (error) {
        res.status(500).json({ "message": "error finding pastry" })
    }
})

router.put('/pastries/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const result = await pastry.findOneAndUpdate({ _id }, req.body, {new:true})

        res.status(202).json(result)
    } catch (error) {
        res.status(500).json({ "message": "error updating pastry" })
    }
})

//pastry add page
router.post('/new_pastry', async (req, res) => {
    try {
        const { pastry, description, originCountry, history, originYear, recipe, image } = req.body

        const createNewPastry = await new pastry({
            pastry,
            description,
            originCountry,
            history,
            originYear,
            recipe,
            image
        }).save()

        res.status(200).json({ 'message': 'New pastry added'})
    } catch (error) {
        res.status(400).json({ "message": "error adding pastry" })
    }
})

module.exports = router