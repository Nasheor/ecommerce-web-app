<template>
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>Simple Ecommerce Site</v-toolbar-title>
      <v-btn class="ml-3" v-if="this.logStatus" @click="showCart">
        <span>Checkout</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon v-if="this.logStatus" @click="logout">
        <span>Out</span>
      </v-btn>
    </v-app-bar>
</template>

<script src="./AppDrawer.js"></script>
<style scoped lang="scss" src="./AppDrawer.scss"></style>
