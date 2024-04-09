// importando el esquema Form
import Form from '../models.js'

// clase para manejar los controladores de formularios
export class FormController {
  static async createForm(req, res) {
    try {
      const { data } = req.body
      const newForm = new Form({ data })
      await newForm.save()
      res.status(201).json({ newForm })
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  static async readForm(req, res) {
    try {
      const forms = await Form.find()
      res.status(200).json({ forms })
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  // static async updateForm (req, res) {}

  static async deleteForm(req, res) {
    try {
      const { id } = req.params
      const form = await Form.findOneAndDelete({ _id: id })
      if (!form) {
        return res.status(404).json({ message: 'Form not found' })
      }
      res.status(204).json({ message: 'Form deleted' })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
