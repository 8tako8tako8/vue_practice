<template>
    <div>
        <h3>Home</h3>
        <button v-on:click="toUsers">Usersにいく</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: { id: 1 }
            });
        }
    }
}
</script>