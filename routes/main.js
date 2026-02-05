const express = require("express"); 
const router = express.Router();


// AUTHENTICATION STARTS HERE 
router.get('/onboard', (req,res)=>{
    res.render("auth/auth")
});

// STATIC PAGES STARTS HERE
router.get('/', (req,res)=>{
    res.render("static/index")
})

router.get('/about-us', (req,res)=>{
    res.render("static/about")
})

router.get('/our-team', (req,res)=>{
    res.render("static/team")
})

router.get('/contact-us', (req,res)=>{
    res.render("static/contact")
})

router.get('/projects', (req,res)=>{
    res.render("static/project")
});

router.get('/careers', (req,res)=>{
    res.render("static/career")
});

router.get('/media', (req,res)=>{
    res.render("static/media")
});

router.get('/service', (req,res)=>{
    res.render("static/service")
});

router.get('/user-dashboard', (req,res)=>{
    res.render("dashboard/user/user-dashboard")
});

router.get('/gallery', (req,res)=>{
    res.render("gallery")
})


module.exports = router;