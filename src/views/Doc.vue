<template>
<div>
    <Topnav />
    <div class="content">
        <aside v-if="menuVisible" class="aside">
            <div class="switch">
                <router-link to="/doc/switch" class="aside__style">switch组件</router-link>
            </div>
            <div class="button">
                <router-link to="/doc/button" class="aside__style">button组件</router-link>
            </div>
        </aside>
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
    inject,
    Ref
} from "vue";
export default {
    components: {
        Topnav
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ("menuVisible");
        return {
            menuVisible
        };
    }
};
</script>

<style lang="scss">
.content {
    display: flex;

    .aside {
        width: 120px;
        border-right: 1px solid gainsboro;
        height: calc(100vh - 50px);

        .aside__style {
            text-decoration: none;
            color: black;
            margin-bottom: 20px;
        }
    }

    .main {
        padding: 20px;
        width: 100%;
        height: calc(100vh - 100px);
        overflow: auto;
    }
}
</style>
