const mainCtrl = {};

mainCtrl.main = (req,res)=>{
    res.json({
        API:"API Grupo 16 UNAB",
        Readme:"https://github.com/cmontesvergara/api_node_mongo"
    });
};

module.exports = mainCtrl