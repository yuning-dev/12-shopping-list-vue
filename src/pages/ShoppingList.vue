<template>
    <div :class="$style.wrapper">
        <template v-if="hasModal">
            <ModalWindow @closeModal="hasModal = false" @deleteAllItems="deleteAllItems"/>
        </template>
        <h1 :class="$style.header">Shopping List</h1>
        <div :class="$style.addItemContainer">
            <input :class="$style.addItemInput" type="text" placeholder="Add shopping item here..." v-model="newItem" @keyup.enter="createNewItem" ref="addItemInput"/>
            <button :class="[$style.addMeBtn, $style.btn]" @click="createNewItem">Add me</button>
        </div>
        <section :class="$style.shoppingList">
            <template v-for="item in shoppingItems">
                <ShoppingItem :item="item" @markAsCompleted="markAsCompleted" @deleteItem="deleteItem"/>
            </template>
        </section>
        <button :class="[$style.deleteAllBtn, $style.btn]" v-if="shoppingItems.length > 1" @click="displayModal">Delete all items</button>
    </div>
</template>

<script>
import ShoppingItem from '../components/ShoppingItem.vue'
import ModalWindow from '../components/ModalWindow.vue'

export default {
    name: 'ShoppingList',
    components: {
        ShoppingItem,
        ModalWindow
    },
    data() {
        return {
            newItem: '',
            id: 0,
            shoppingItems: [],
            isCompleted: false,
            hasModal: false,
        }
    },
    methods: {
        createNewItem() {
            if (this.newItem !== '') {
                const item = {
                content: this.newItem,
                id: this.id,
                completion: this.isCompleted
            }
            this.id++
            this.shoppingItems.push(item)
            this.newItem = ''
            this.focusInput()
            }
        },
        focusInput() {
            this.$refs.addItemInput.focus()
        },
        markAsCompleted(id) {
            const itemToMarkAsCompleted = this.shoppingItems.find((item) => {
                if (item.id === id) {
                    return true
                }
                return false
            })
            itemToMarkAsCompleted.completion = true
            console.log(itemToMarkAsCompleted)
        },
        deleteItem(id) {
            const listWithoutItemToBeDeleted = this.shoppingItems.filter((item) => {
                if (item.id !== id) {
                    return true
                }
                return false
            })
            this.shoppingItems = listWithoutItemToBeDeleted
        },
        displayModal() {
            this.hasModal = true
        },
        deleteAllItems() {
            this.shoppingItems = []
            this.hasModal = false
        },
    },
}
</script>

<style module src="./ShoppingList.css"></style>