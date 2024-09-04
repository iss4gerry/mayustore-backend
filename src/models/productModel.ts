import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    code: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    averageRating: number;
}

const productSchema: Schema = new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    averageRating: { type: Number, required: false }
});

mongoose.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
    }
})  

const Product = mongoose.model<IProduct>('products', productSchema);

export default Product
