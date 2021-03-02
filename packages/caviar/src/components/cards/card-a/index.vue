<template>
    <section class="card-a" ref="carda">
        <div class="info">
            <time>
                <slot name="time">
                    <span><IconTime v-bind="iconConf" v-if="time"></IconTime> 发布于 {{ time && dayjs(time).fromNow() }}</span>
                </slot>
            </time>
            <div class="title row-1">
                <slot name="title">
                    <h3>{{ title.length && title }}</h3>
                </slot>
            </div>
            <div class="meta">
                <slot name="meta">
                    <ul>
                        <li v-if="hot"><Fire v-bind="iconConf"></Fire> {{ hot }} 热度</li>
                        <li v-if="commentNum"><Comment v-bind="iconConf"></Comment> {{ commentNum }} 条评论</li>
                        <li v-if="category.length"><SeoFolder v-bind="iconConf"></SeoFolder> {{ category }}</li>
                    </ul>
                </slot>
            </div>
            <div class="content row-3">
                <slot>{{ content }}</slot>
            </div>
            <div class="btn" v-if='!hide'>
                <slot name="btn">
                    <More v-bind="iconConf" :size="36"></More>
                </slot>
            </div>
        </div>
        <div class="cover">
            <slot name='cover'>
                <img :src="img" />
            </slot>
        </div>
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

const types = {
    left: (width) => {
        return {
            textAlign: 'left',
            direction: 'row',
            cardHeight: width * 0.38 + 'px',
            cardWidth: '100%',
            coverHeight: '100%',
            coverWidth: width * 0.55 + 'px',
            padding: '1.7rem'
        }
    },
    right: (width) => {
        return {
            textAlign: 'right',
            direction: 'row-reverse',
            cardHeight: width * 0.38 + 'px',
            cardWidth: '100%',
            coverHeight: '100%',
            coverWidth: width * 0.55 + 'px',
            padding: '1.7rem'
        }
    },
    vertical: (width) => {
        return {
            textAlign: 'left',
            direction: 'column-reverse',
            cardHeight: '100%',
            cardWidth: '100%',
            coverHeight: width * 0.6 + 'px',
            coverWidth: '100%',
            padding: '1rem 1.5rem'
        }
    }
}

export default defineComponent({
    name: 'CardA',
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
        const carda = ref()
        const hide = ref(false)

        const resize = () => {
            const width = carda.value.clientWidth || carda.value.scrollWidth
            let fn = types[props.type]
            if (width < 800 || props.type === 'vertical') {
                fn = types['vertical']
                hide.value = true
            } else {
                hide.value = false
            }
            const type = fn(width)
            carda.value.style.setProperty('--card-a-height', type.cardHeight)
            carda.value.style.setProperty('--card-a-width', type.cardWidth)
            carda.value.style.setProperty('--card-a-cover-height', type.coverHeight)
            carda.value.style.setProperty('--card-a-cover-width', type.coverWidth)
            carda.value.style.setProperty('--card-a-info-padding', type.padding)
            carda.value.style.setProperty('--card-a-align', type.textAlign)
            carda.value.style.setProperty('--card-a-direction', type.direction)
        }
        onMounted(() => {
            if (props.type === 'none') {
                return
            }
            resize()
            window.addEventListener('resize', resize)
        })
        return {
            iconConf,
            dayjs,
            carda,
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
.card-a {
    height: var(--card-a-height,100%);
    width: var(--card-a-width,100%);
    flex-direction: var(--card-a-direction, row);
    max-width: 850px;
    box-sizing: border-box;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #dddddd;
    cursor: pointer;
    .info {
        text-align: var(--card-a-align, left);
        padding: var(--card-a-info-padding, 1.7rem);
        flex: 1;
        box-sizing: border-box;
        time {
            color: #888888;
            font-size: 12px;
        }
        h3 {
            padding: 0;
            margin: 0.5rem 0;
            text-shadow: 0 0 1px #888888;
            letter-spacing: 1px;
        }
        .meta {
            color: #888888;
            font-size: 12px;
            ul {
                padding: 0;
                margin: 0.3rem 0 0.5rem;
                list-style-type: none;
                li {
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
        .content {
            margin: 0.5rem 0;
            font-size: 16px;
        }
    }
    .cover {
        height: var(--card-a-cover-height,100%);
        width: var(--card-a-cover-width,100%);
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
