import mongoose from 'mongoose'

export const dbConection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://acernas1:aW4BSFluT0FxnviX@cluster0.yuxjmzz.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('Connected to the database')
  } catch (error) {
    console.error(error)
  }
}
