const getAllBlog = async (req, res) => {
    res.send('get all blog');
};


const createBlog = (req, res) => {
    console.log(req.body);
    res.send('create a blog');
}

module.exports = {
    getAllBlog,
    createBlog
};