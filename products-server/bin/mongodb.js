const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomas:TomasTomas@cluster0.i4tai.mongodb.net/Cluster0?retryWrites=true&w=majority', 
    
    {userNewUrlParser: true}, 

    function(error){
        if ( error ) {
            throw error;
        }
        else{
            console.log('Connected to MongoDB');
        }
    } );

module.exports = mongoose;