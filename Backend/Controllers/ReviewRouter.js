const Review = require('../Model/ReviewSchema')
const {Router} = require('express')

const reviewRouter = Router();

reviewRouter.post("/review",async(req,res)=>{
    try{
        const{project,user,rating,comment} = req.body;
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5 stars." });
          }
          const newReview = new Review({
            project,
            user,
            rating,
            comment,
          });
      
          await newReview.save();
          res.status(201).json({ message: "Review submitted successfully", data: newReview });
    }catch (err) {
        console.error("Error while posting review:", err.message);
        res.status(500).json({ message: "Failed to submit review", error: err.message });
      }
}
)

reviewRouter.get("/",async(req,res)=>{
  try{
    const review = new Review.find()
    res.json.status(201).json(review)
  }catch(err){
    res.status(500).json({error:err.message})
  }
})


reviewRouter.put('/review/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({ message: "Review updated", data: updatedReview });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = reviewRouter;