<template>
    <div style='max-width: 380px'>
        <CardA v-bind="v" type='vertical'></CardA>
    </div>
</template>

<script lang="ts">
import { CardA } from '@lhlyu/caviar'
export default {
    name: 'demo',
    components: {
        CardA
    },
    setup() {
        return {
            v: {
                time: +new Date() - 10000000,
                title: '这是一个测试',
                hot: 12313,
                commentNum: 0,
                category: '测试',
                content:
                    '夫天地者，万物之逆旅也；光阴者，百代之过客也。而浮生若梦，为欢几何？古人秉烛夜游，良有以也。况阳春召我以烟景，大块假我以文章。会桃李之芳园，序天伦之乐事。群季俊秀，皆为惠连；吾人咏歌，独惭康乐。幽赏未已，高谈转清。开琼筵以坐花，飞羽觞而醉月。不有佳咏，何伸雅怀？如诗不成，罚依金谷酒数。'
            }
        }
    }
}
</script>

<style scoped></style>
