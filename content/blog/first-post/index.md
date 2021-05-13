---
layout: page
title: '初投稿'
date: '2021-05-03'
---

はじめまして，ヤツバシと申します。とある会社で働く Web 系エンジニアです。

このたび個人ブログを始めることにしました。

## ブログに使用している技術

### フロントエンド

[Jamstack](https://jamstack.org/) にしたくて，仕事で React を使っていたこともあったので，[Gatsby](https://www.gatsbyjs.com/) を選びました。

デザインの勉強もかねて Gatsby themes は使用せず，自前で整えていく予定です。

### コンテンツ管理

記事は Markdown で書いて，ソースコードと一緒に管理しています。

### シンタックスハイライト

Markdown に載せるソースコードのシンタックスハイライトはひとまず [Prism](https://prismjs.com/) を使うことにしました。実際に書くとこんな感じです。

```ts:title=test.ts
import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import global from '../styles/global'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(global)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
```

## ブログの方向性

技術記事をメインに書いていくつもりです。[Qiita](https://qiita.com/yatsbashy) や [Zenn](https://zenn.dev/yatsbashy) も併用する予定ですが，こちらはプライベートに寄った内容になると思います。
