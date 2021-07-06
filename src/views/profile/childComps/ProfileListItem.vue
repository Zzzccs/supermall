<template>
    <div class="ProfileListItem">
        <!-- <img :src="listItemData.img" alt=""> -->
        <img src="../../../assets/img/profile/iconfont-zan.svg" alt="">
        <span>{{listItemData.text}}</span>
    </div>
</template>

<script>
export default {
    props: {
        listItemData: {
            type: Object,
        }
    }
}
</script>

<style>
    .ProfileListItem {
        display: flex;
        height: 40px;
        border-bottom:1px solid rgb(223, 217, 217);
        align-items:center;
    }
    .ProfileListItem>img {
        height: 20px;
        width: 20px;
        margin: 5px 10px;

    }
</style>