const { Router } = require("express");
const router = Router()



router.get("", async (req, res) => {
    res.status(200).send({
        message: "Hello World wlcome to food ordering website"
    });
})

module.exports=router;
