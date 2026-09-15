<script setup lang="ts">
import { Filter } from '../types/filter';

defineProps<{
  selectedFilter: Filter;
}>();

const emit = defineEmits(['update-filter']);

const updateFilter = (filter: Filter) => {
    emit('update-filter', filter);
};
</script>

<template>
    <div class="todo-filter">
        <button @click="updateFilter(Filter.ALL)" :class="{ active: selectedFilter === Filter.ALL }">All</button>
        <button @click="updateFilter(Filter.ACTIVE)" :class="{ active: selectedFilter === Filter.ACTIVE }">Active</button>
        <button @click="updateFilter(Filter.DONE)" :class="{ active: selectedFilter === Filter.DONE }">Done</button>
    </div>
</template>