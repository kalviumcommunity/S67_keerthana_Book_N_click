const Booking = require('../Model/BookingSchema')
const Photographer = require('../Model/PhotographerSchema')
const {Router} = require('express')
const Bookingrouter = Router();

Bookingrouter.post("/booking",async(req,res)=>{
    try{
    const {user,photographer,project,eventDate} = req.body;
    if (!user || !photographer || !eventDate) {
        return res.status(400).json({ message: "User, Photographer, and Event Date are required." });
      }
    const selectdate = new Date(eventDate);
    selectdate.setHours(0,0,0,0)

    const foundphotographer = await Photographer.findById(photographer)
    if (!foundphotographer) {
        return res.status(404).json({ message: "Photographer not found." });
      }

    const isavailable = foundphotographer.availability.some((date)=>{
      const availableDate = new Date(date);
      availableDate.setHours(0,0,0,0)
      return availableDate.getTime() === selectdate.getTime();
    })
    if (!isavailable) {
        return res.status(400).json({ message: "Photographer is not available on the selected date." });
      }

      const newBooking = new Booking({
        user,
        photographer,
        project,
        eventDate,
      });
      await newBooking.save();

    res.status(201).json({ message: "Booking created successfully!", data: newBooking });
    } catch (err) {
        res.status(500).json({ message: "Error creating booking", error: err.message });
      }

})


Bookingrouter.put("/booking/:id",async(req,res)=>{
  try{
    const updated = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if (!updated) {
      return res.status(404).json({ message: "Booking not found" });
    }
    
    res.json({ message: "Booking updated", data: updatedBooking });
  }catch (err) {
    res.status(500).json({ error: err.message });
  }


})



module.exports = Bookingrouter