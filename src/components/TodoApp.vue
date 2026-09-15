<script setup lang="ts">
import { ref, computed } from 'vue';
import TodoList from './TodoList.vue';
import TodoAdd from './TodoAdd.vue';
import TodoFilter from './TodoFilter.vue';
import type { Todo } from '../types/todo';
import { Filter } from '../types/filter';

const todos = ref<Todo[]>([]);
const selectedFilter = ref<Filter>(Filter.ALL);
const filteredTodos = computed(() => {
    if (selectedFilter.value === Filter.ACTIVE) {
        return todos.value.filter(todo => !todo.done);
    } else if (selectedFilter.value === Filter.DONE) {
        return todos.value.filter(todo => todo.done);
    } else {
        return [...todos.value];
    }
});


function addTodo(text: string) {
    const newTodo = { id: todos.value.length + 1, text, done: false };
    todos.value.push(newTodo);
}

function deleteTodo(id: number) {
    todos.value = todos.value.filter(todo => todo.id !== id);
}

function filterTodos(newFilter: Filter) {
    selectedFilter.value = newFilter;
}
</script>

<template>
    <div class="todo-box">
        <h1>TODO LIST</h1>
        <TodoAdd @add-todo="addTodo" />
        <TodoFilter @update-filter="filterTodos" :selectedFilter="selectedFilter" />
        <TodoList :todos="filteredTodos" @delete-todo="deleteTodo" />
    </div>
</template>
