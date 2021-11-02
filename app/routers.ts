const carController = require('./controller/car');

module.exports = (app: express) => {
    app.get('/car', carController.getCarById)
    app.post('/car', carController.createCar)
    app.put('/car', carController.updateCar)
    app.get('/cars', carController.getAllCars)

    /*
    // ############# user endpoints (used for front-ends)
    // gets order adjustments, used in FE
    app.get('/order/adjustment/:id', adjustment.getadjustmentDetailsAuth)

    // gets order by id xxx1234
    app.get('/order/:id', order.getOrderDetailsAuth)

    // gets orders by buyer ua id
    app.get('/orders/buyer', order.getBuyerOrdersAuth)

    // gets orders by buyer ua id
    app.get('/orders/buyer/status/count', order.getBuyerOrderStatusTotals)

    // creates a new cancel fee and attempts to charge the user's default credit card using the transactions service.
    app.post('/v1/orders/:id/fees/cancel', cancelFee.createCancelFee)

    // ############# system endpoints (used for backend services)

    // creates order, using auction/buyer/seller .. etc
    // app.post('/order', order.createOrder)

    // add an order, specially used in magento to cache orders.
    app.post('/mage/order', order.saveMageOrder)

    // gets order adjustments
    app.get('/system/order/adjustment/:id', adjustment.getadjustmentDetails)

    // get list of adjustments used in grids.
    app.get('/system/order/adjustments', adjustment.getadjustmentsByParams)

    // gets order by id xxx1234
    app.get('/system/order/:id', order.getOrderDetails)

    // gets orders by buyer ua id
    app.get('/system/orders/buyer/:uaId', order.getBuyerOrders)

    // get list of orders used in grids.
    app.get('/system/orders', order.getOrdersByParams)

    // get list of orders used in grids for dsk.
    app.get('/system/orders/dsk', order.getOrdersByParamsForDsk)

    // updates order shipping address only, not implemented yet..
    // app.put('/order/shipping/address/:id', order.updateShippingAddress)

    // ############# endpoints serves both FE and Backend

    // upload document to an order
    app.post('/v1/docs', decodeToken, multer(fileOptions).single('doc'), document.uploadFile)
    // update document for an order
    app.put('/v1/docs/:docId', decodeToken, multer(fileOptions).single('doc'), document.uploadFile)
    // get all buyer's documents across all orders.
    app.get('/v1/docs/buyer/list', decodeToken, document.getBuyerDocumentsList)
    // get all documents for an order
    app.get('/v1/docs/:orderId/list', decodeToken, document.getDocumentsList)
    // get single document info
    app.get('/v1/docs/:orderId/:docId', decodeToken, document.getDocument)
    // inactivate document for an order
    app.delete('/v1/docs/:orderId/:docId', decodeToken, document.inactivateDocument)
     */
}
