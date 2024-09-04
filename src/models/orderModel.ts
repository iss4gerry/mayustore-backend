import mongoose, { Document, Schema } from 'mongoose'

export interface IOrder extends Document {
    user_id: number
    cart_items: string[]
}

const orderSchema: Schema = new Schema<IOrder>({
    user_id: Number,
    cart_items: [String]
});

mongoose.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
    }
})  

const Order = mongoose.model<IOrder>('orders', orderSchema)

export default Order
