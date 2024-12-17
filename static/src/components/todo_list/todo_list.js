/** @odoo-module **/

import { Component, useState, onWillStart, useRef } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';

export class Todolist extends Component {
  static template = 'todo.Todolist';

  setup() {
    this.state = useState({
      task: { name: '', color: '#FF0000', completed: false },
      taskList: [],
      isEdit: false,
      activeId: false,
    });

    this.orm = useService('orm');
    this.model = 'todo.list';
    this.searchInput = useRef('search-input');

    // This function will get all task from db on Start
    onWillStart(async () => {
      await this.getAllTasks();
    });
  }

  async getAllTasks() {
    this.state.taskList = await this.orm.searchRead(
      this.model,
      [],
      ['name', 'color', 'completed']
    );
  }

  async searchTasks() {
    const text = this.searchInput.el.value;
    console.log(text);

    this.state.taskList = await this.orm.searchRead(
      this.model,
      [['name', 'ilike', text]],
      ['name', 'color', 'completed']
    );
  }

  addTask() {
    this.resetForm();
    this.state.activeId = false;
    this.state.isEdit = false;
  }

  editTask(task) {
    this.state.activeId = task.id;
    this.state.isEdit = true;

    // This will update the state.task and re-render at the t-model in the modal dialog
    this.state.task = { ...task };
  }

  async deleteTask(task) {
    await this.orm.unlink(this.model, [task.id]);
    await this.getAllTasks();
  }

  async saveTask() {
    // if changed by edit, write on old task; else create one
    if (!this.state.isEdit) {
      await this.orm.create(this.model, [this.state.task]);
    } else {
      await this.orm.write(this.model, [this.state.activeId], this.state.task);
    }
    await this.getAllTasks();
  }

  async toggleTask(e, task) {
    await this.orm.write(this.model, [task.id], {
      completed: e.target.checked,
    });
    await this.getAllTasks();
  }

  async updateColor(e, task) {
    await this.orm.write(this.model, [task.id], {
      color: e.target.value,
    });
    await this.getAllTasks();
  }

  resetForm() {
    this.state.task = { name: '', color: '#FF0000', completed: false };
  }
}
