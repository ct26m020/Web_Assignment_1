<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import type { Todo } from '../types/todo';

const emit = defineEmits(['delete-todo']);

const props = defineProps({
    todos: {
        type: Array as () => Todo[],
        required: true,
    },
});

function deleteTodo(id: number) {
    emit('delete-todo', id);
}
</script>

<template>
        <div v-if="todos.length === 0" class="todo-list">
            <span class="error">No todos yet!</span>
        </div>
        <div class="todo-list" v-else>
            <TodoItem  :todo="todo" @delete-todo="deleteTodo" v-for="todo in todos" :key="todo.id"/>
        </div>
</template>
