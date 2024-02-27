import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/formDynamic')
    console.log('Connexion a BD exitosa')
  } catch (error) {
    console.error(error)
  }
}
