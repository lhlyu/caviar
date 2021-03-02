<template>
    <section class="card-b" ref="cardb">
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Time, Fire, Comment, SeoFolder, More } from '@icon-park/vue-next'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const iconConf = {
    fill: '#888',
    size: 14,
    strokeWidth: 3,
    strokeLinecap: 'square',
    strokeLinejoin: 'bevel',
    theme: 'outline'
}

// https://qwq.moe/ 结合竖屏
export default defineComponent({
    name: 'CardB',
    components: {
        IconTime: Time,
        Fire,
        Comment,
        SeoFolder,
        More
    },
    props: {
        time: {
            type: [String, Number],
            default: 0
        },
        title: {
            type: String,
            default: ''
        },
        hot: {
            type: Number,
            default: 0
        },
        commentNum: {
            type: Number,
            default: 0
        },
        category: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: () => 'http://api.btstu.cn/sjbz/?lx=dongman&t=' + Math.random()
        },
        type: {
            type: String,
            default: 'left',
            validator: (val: string) => {
                return [
                    'none',
                    'left',
                    'right',
                    'vertical'
                ].includes(val)
            },
        }
    },
    setup(props) {
        const cardb = ref()
        const hide = ref(false)
        return {
            iconConf,
            dayjs,
            cardb,
            hide
        }
    }
})
</script>

<style lang="scss">
.i-icon {
    vertical-align: sub;
}
.row-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.row-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.card-b {

}
</style>
