const login =(req,res)=>{
    res.status(200).json({
        login:"controller thrue"
    })
}

const register =(req,res)=>{
    res.status(200).json({
        login:"register thrue"
    })
}

module.exports= {
    login,
    register
}