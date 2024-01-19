<script setup lang="ts">
import { MenuData } from './menu.data';


</script>

<template>
    <div>
        <NuxtLink class="flex items-center py-1 rounded-lg px-3 w-full hover:bg-gray-700 hover:shadow
        transition-all mb-2"
        v-for="item in MenuData"
        :key="item.name"
        :to="item.url"
        >
            <Icon :name="item.icon" class="mr-3"/>
            <span class=" text-lg">{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>