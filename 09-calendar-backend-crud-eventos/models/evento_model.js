const {Schema, model} = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required:true
    },
    user: {
        // Indica que será una referencia a mongoose
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    }
});



module.exports = model('Evento', EventoSchema);