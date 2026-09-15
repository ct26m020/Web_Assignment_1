<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-todo'])
const newTodo = ref('');

const addTodo = () => {
    if (newTodo.value.trim() !== '') {
        emit('add-todo', newTodo.value);
        newTodo.value = '';
    }
};
</script>

<template>
    <div class="todo-add">
        <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
        <button @click="addTodo">+</button>
    </div>
</template>
