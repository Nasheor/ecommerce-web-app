<template>
    <v-app>
        <AppDrawer />
        <v-content>
            <div v-if="logStatus===false">
                <Login />
            </div>
            <div v-else>
                <Product />
                <div  @click="changeCheckoutStatus" >
                    <v-overlay v-if="checkoutStatus">
                        <Checkout />
                    </v-overlay>
                </div>
            </div>
        </v-content>
    </v-app>
</template>

<script src="./App.js"></script>
<style scoped lang="scss" src="./App.scss"></style>