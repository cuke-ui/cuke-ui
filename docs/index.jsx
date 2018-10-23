---
banner:
  name: 'cuke-ui'
  desc: '黄瓜UI : 一个即插即用的 React UI 组件库'
  btns: 
    - { name: '开 始', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/cuke-ui/cuke-ui', primary: true }
  caption: '当前版本: v0.0.17'
features: 
  - { name: '低效', desc: '个人开发的一个 UI 库, 代码质量很差, 导致编码1分钟, debug 2小时' }
  - { name: '诱人', desc: '黄瓜 ui, 即插即用, 一个充满画面感的库' }
  - { name: '感人', desc: '作者下了班没事做自己写着玩的,一个字母一个字母的敲,累死我了,起到了学习的作用,好感动' }
  - { name: '开源', desc: '深度借鉴了 Ant-Design 和 dragon-ui, 感谢这些大佬' }

footer:
  copyRight:
    name: 'Jinke Li'
    href: 'https://github.com/lijinke666'
  links:
    个人博客:
      - { name: '李金珂的小屋', href: 'https://www.lijinke.cn/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/cuke-ui/cuke-ui' }
      - { name: 'Github Issue', href: 'https://github.com/cuke-ui/cuke-ui/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />