const Product = require('../../model/product');

class IndexController {
    async index(req, res, next) {
        try {
            const products = await Product.find();
            res.render('index', { title: 'Products Management', products });
        } catch (error) {
            next(error);
        }
    }

    async addProduct(req, res, next) {
        try {
            const product = new Product({
                productName: req.body.productName,
                productImages: req.body.productImages,
                infor: req.body.infor,
                quantity: req.body.quantity,
                price: req.body.price,
                date: req.body.date,
            });
            await product.save();
            console.log('Product created:', product);
            res.redirect('/'); // Chuyển hướng người dùng về trang index sau khi thêm thành công
        } catch (error) {
            console.error('Error creating product:', error);
            res.json(error);
        }
    }

    async editProduct(req, res, next) {
        try {
            const updatedProduct = {
                productName: req.body.productName,
                productImages: req.body.productImages,
                infor: req.body.infor,
                quantity: req.body.quantity,
                price: req.body.price,
                date: req.body.date,
            };
            await Product.updateOne({ _id: req.params.id }, updatedProduct);
            console.log('Product edited:', updatedProduct);
            res.redirect('/');
        } catch (error) {
            console.error('Error editing product:', error);
            res.json(error);
        }
    }

    async deleteProduct(req, res, next) {
        try {
            await Product.deleteOne({ _id: req.params.id });
            return res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new IndexController;
