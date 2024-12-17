/** @odoo-module **/
import { Todolist } from '../components/todo_list/todo_list';
import { registry } from '@web/core/registry';

registry.category('actions').add('todo.action_todo_list_js', Todolist);
