<template>
    <CardA>
        <template #time>发布于: 2021-03-05</template>
        <template #title><h3>自定义</h3></template>
        <template #meta>其他属性</template>
        <template #default>
            夫天地者，万物之逆旅也；光阴者，百代之过客也。而浮生若梦，为欢几何？古人秉烛夜游，良有以也。况阳春召我以烟景，大块假我以文章。会桃李之芳园，序天伦之乐事。群季俊秀，皆为惠连；吾人咏歌，独惭康乐。幽赏未已，高谈转清。开琼筵以坐花，飞羽觞而醉月。不有佳咏，何伸雅怀？如诗不成，罚依金谷酒数。
        </template>
        <template #btn>更多</template>
        <template #cover>
            <img :src="'http://api.btstu.cn/sjbz/?lx=dongman&t=' + Math.random()" />
        </template>
    </CardA>
</template>

<script lang="ts">
import { CardA } from '@lhlyu/caviar'

export default {
    name: 'demo3',
    components: {
        CardA
    },
    setup() {
        return {
        }
    }
}
</script>

<style scoped lang='scss'>
    .card-a{
        transition: all 0.4s linear;
        box-shadow: 0 1px 30px -4px #e8e8e8;
        &:hover{
            transform: translateY(-5px);
        }
    }
</style>
