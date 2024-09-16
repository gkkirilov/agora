<script setup>
import { h, computed } from 'vue'
import TerminologyDialog from './TerminologyDialog.vue'

const props = defineProps({
    text: String,
})

const parsedContent = computed(() => {
    if (!props.text) return []

    const termRegex = new RegExp(`\\b(${Object.keys(terminologyDefinitions).join('|')})\\b`, 'gi')
    
    const parts = props.text.split(termRegex)

    return parts.map(part => {
        const lowercasePart = part.toLowerCase()
        const term = Object.keys(terminologyDefinitions).find(t => t.toLowerCase() === lowercasePart)
        if (term) {
            return h(TerminologyDialog, {
                term: part, // Use the original casing from the text
                definition: terminologyDefinitions[term]
            })
        }
        return part
    })
})
</script>

<template>
    <span>
        <template v-for="(part, index) in parsedContent" :key="index">
            <component :is="part" v-if="typeof part !== 'string'" />
            <template v-else>{{ part }}</template>
        </template>
    </span>
</template>
