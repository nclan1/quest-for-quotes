import { Schema, model, models } from 'mongoose';

const QuoteSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    quote: {
        type: String,
        required: [true, 'quote is required.'],
    },
    source: {
        type: String,
        required: [true, 'source is required.'],
    }
});

const Quote = models.quote || model('quote', QuoteSchema);

export default Quote;