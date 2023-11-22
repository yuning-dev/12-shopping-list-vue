<template>
    <div :class="$style.modal">
        <div :class="$style.modalContainer">
            <font-awesome-icon icon="fa-solid fa-rectangle-xmark" :class="$style.closeBtn" style="color: #e50b0b" @click="closeModal"/>
            <div :class="$style.modalContent">
                Are you sure you want to delete all shopping list items?
                <div :class="$style.btnContainer">
                    <button :class="[$style.yesBtn, $style.btn]" @click="yesBtnClicked">Yes</button>
                    <button :class="[$style.cancelBtn, $style.btn]" @click="closeModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        yesBtnClicked() {
            this.$emit('deleteAllItems')
        }
    }
}
</script>

<style module src="./ModalWindow.css"></style>