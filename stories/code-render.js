import React from 'react'
import PropTypes from "prop-types"
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
//内置了很多 颜色主题 

//备选主题
import "highlight.js/styles/tomorrow-night-eighties.css"

// import "highlight.js/styles/monokai-sublime.css"
//主题预览 https://highlightjs.org/static/demo/
//react-markdown 和 react-lowlight 一起使用 实现高亮 markdown

//注册支持哪些样式
Lowlight.registerLanguage('js', js);

export default class CodeBlock extends React.PureComponent{
    static displayName = 'CodeBlock'
    static propTypes = {
        literal: PropTypes.string,
        language: PropTypes.string,
        inline: PropTypes.bool
    }
    render() {
        const {language,literal,inline} = this.props
        return (
            <Lowlight
                language={language || 'js'}
                value={literal}
                inline={inline}
            />
        );
    }
}