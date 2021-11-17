const mainCtrl = {};

mainCtrl.main = (req,res)=>{
    res.json({
        API:"Soy una API"
    });
};

module.exports = mainCtrl