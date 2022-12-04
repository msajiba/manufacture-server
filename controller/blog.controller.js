const getAllBlog = async (req, res) => {
    res.send('get all blog');
};

const createBlog = (req, res) => {
    console.log(req.body);
    res.send('create a blog');
};


const updateBlog = async (req, res) => {
    res.send('update product');
};

const deleteBlog = async (req, res) => {
    res.send('delete product');
};

module.exports = {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
};