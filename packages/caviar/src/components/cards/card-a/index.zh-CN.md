---
map:
    path: /components/cards/card-a
---

## 卡片A

### 引入

`import { CardA } from '@lhlyu/caviar'`

### 例子

<demo src="./demo/demo1.vue"
language="vue"
title="基础用法"
desc="">
</demo>

<demo src="./demo/demo2.vue"
language="vue"
title="上下结构"
desc="">
</demo>

<demo src="./demo/demo3.vue"
language="vue"
title="使用插槽"
desc="">
</demo>

### props

| 字段         | 类型              | 默认值                                                             | 说明                                   |
|:----------|:---------------|:---------------------------------------------------------------|------------------------------------:|
| time       | string,number | 0                                                               | 创建时间                                 |
| title      | string          | ''                                                              | 标题                                   |
| hot        | number          | 0                                                               | 热度                                   |
| commentNum | number          | 0                                                               | 评论数                                  |
| category   | string          | ''                                                              | 分类                                   |
| content    | string          | ''                                                              | 内容/摘要                                |
| img        | string          | () => 'http://api.btstu.cn/sjbz/?lx=dongman&t=' + Math.random() | 封面                                   |
| type       | string          | left                                                            | 主题类型: none,left,right,vertical |

### slot

| 字段      | 说明   |
|:-------|----:|
| time    | 创建时间 |
| title   | 标题   |
| meta    | 属性   |
| default | 内容   |
| btn     | 按钮   |
| cover   | 封面   |

### css变量(设置前提: props.type = 'none')

| css变量                 | 说明      |
|:---------------------|-------:|
| --card-a-height       | 卡片的高度   |
| --card-a-width        | 卡片的宽度   |
| --card-a-cover-height | 封面的高度   |
| --card-a-cover-width  | 封面的宽度   |
| --card-a-info-padding | 内容块填充大小 |
| --card-a-align        | 文本的对齐方向: left,right,center |
| --card-a-direction    | 布局的方向：row,row-reverse,column,column-reverse   |
