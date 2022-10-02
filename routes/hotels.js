import express from "express"
import hotel from "../models/hotel.js"
import Hotel from "../models/hotel.js"

const router = express.Router()


// create 

router.post('/', async(req, res) =>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get single hotel 

router.get('/:id', async(req, res) =>{


    try {
        const findHotel = await Hotel.findById(req.params.id)
        res.status(200).json(findHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all hotel 

router.get('/', async(req, res) =>{


    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update 

router.put('/:id', async(req, res) =>{


    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete 

router.delete('/:id', async(req, res) =>{


    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


export default router;