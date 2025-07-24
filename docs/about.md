<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [  
  {
    avatar: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1836059252&spec=100',
    name: 'Jursin',
    title: '网站开发',
    links: [
      { icon: 'github', link: 'https://github.com/Jursin' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1575907920' }
    ]
  },
]
</script>


# 关于
<ArticleMetadata />

<VPTeamMembers size="small" :members="members" />

如有更多建议或希望反馈过时/错误信息，请提交 Issues 或  Pull Requests，或者直接[联系作者](https://blog.jursin.top)。