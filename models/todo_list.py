from odoo import api, fields, models

class OwlTodo(models.Model):
    _name = 'todo_owl.list'
    _description = 'Owl todolist app'

    name = fields.Char(string="Task Name")
    completed = fields.Boolean(default=False)
    color = fields.Char()