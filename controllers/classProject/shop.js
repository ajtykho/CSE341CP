const Product = require('../../models/product');
const Cart = require('../../models/cart');

exports.getProducts =  (req, res, next) => {
    Product.fetchAll(products => {
    res.render('pages/classProjectshop/shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
      });
          
    });
};

exports.getProduct =  (req, res, next) => {
    const prodId = req.params.id;
    Product.findById(prodId, product => {
      res.render('pages/classProjectshop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('pages/classProject/shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
          
    });
};

exports.getCart = (req, res, next) => {
  res.render('pages/classProjectshop/shop/cart', {
    path: '/cart',
    pageTitle: "Your Cart"
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  })
  res.redirect('/cart');
};


exports.getOrders = (req, res, next) => {
  res.render('pages/classProjectshop/shop/orders', {
    path: '/orders',
    pageTitle: "Your Orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('pages/classProjectshop/shop/checkout', {
    path: '/checkout',
    pageTitle: "Checkout"
  });
};