const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/biiggie', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const biiggieSeed = [
    {
        title: 'Taco Food Truck Startup',
        createdAt: new Date(new Date().setDate(new Date().getDate())),
        deadline: new Date(new Date().setDate(new Date().getDate() + 9)),
        description: 'My Biiggie that I I need help getting my dream taco food truck business off the ground. I serve all types of tacos and have worked very hard renovating an old truck I but. Any help is welcome!',
        images: ['https://mobile-cuisine.com/wp-content/uploads/2015/09/food-truck-branding.jpg']
    }
]