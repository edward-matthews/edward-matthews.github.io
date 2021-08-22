import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import okaidia from 'prism-react-renderer/themes/okaidia';

type PrismLang =
    | 'markup'
    | 'bash'
    | 'clike'
    | 'c'
    | 'cpp'
    | 'css'
    // | 'css-extras'
    | 'javascript'
    | 'jsx'
    // | 'js-extras'
    | 'coffeescript'
    | 'diff'
    | 'git'
    | 'go'
    | 'graphql'
    | 'handlebars'
    | 'json'
    | 'less'
    | 'makefile'
    | 'markdown'
    | 'objectivec'
    | 'ocaml'
    | 'python'
    | 'reason'
    | 'sass'
    | 'scss'
    | 'sql'
    | 'stylus'
    | 'tsx'
    | 'typescript'
    | 'wasm'
    | 'yaml';

interface Props {
    children: string;
    className: string;
}

const CodeBlock: React.FC<Props> = ({ children, className }: Props) => {
    const language = className.replace(/language-/, '') as PrismLang;
    return (
        <Highlight {...defaultProps} theme={okaidia} code={children} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, padding: '20px' }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
