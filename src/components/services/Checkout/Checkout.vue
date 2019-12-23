<template>  
    <v-container
    dark
    class="container"
    >
        <v-card class="cart-item" v-for="item of items" :key="item.id">
            <ul>
                <li class="text"> Name: {{item.item_name}}</li>
                <li class="text"> Price: {{item.item_price}}</li>
                <li class="text"> Quantity: {{item.item_quantity}}</li>
                <li class="text"> Totla Price: {{item.item_quantity * item.item_price}} </li>
            </ul>
        </v-card>
    </v-container>
</template>

<script src="./Checkout.js"></script>
<style scoped lang="scss" src="./Checkout.scss"></style>