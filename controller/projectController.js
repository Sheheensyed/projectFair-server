

exports.addProjectController = async (req, res) => {
    console.log('inside add project controller');

    const {title,language,github,website,overview}=req.body
    console.log(title,language,github,website,overview);
    
    const projectImage=req.file
    console.log(projectImage);
    
    try {
        
    } catch (error) {
        res.status(401).json(`project adding failed due to ${error}`)
    }
    
}