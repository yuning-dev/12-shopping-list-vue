<template>
    <div :class="$style.wrapper">
        {{ item.content }}
        <div :class="$style.iconsContainer">
            <template v-if="!item.completion">
                <font-awesome-icon icon="fa-regular fa-square" @click="squareIconClicked"/>
            </template>
            <template v-if="item.completion">
                <font-awesome-icon icon="fa-regular fa-square-check" />
            </template>
            <font-awesome-icon icon="fa-regular fa-trash-can" @click="deleteIconClicked"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShoppingItem',
    props: {
        item: Object,
    },
    // data() {
    //     return{

    //     }
    // },
    methods: {
        squareIconClicked() {
            this.$emit('markAsCompleted', this.item.id)
        },
        deleteIconClicked() {
            this.$emit('deleteItem', this.item.id)
        }
    }
}
</script>
<style module src="./ShoppingItem.css"></style>