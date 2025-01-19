import {defaultValueCtx, Editor, rootCtx} from "@milkdown/kit/core"
import {commonmark} from "@milkdown/kit/preset/commonmark"
import {history} from "@milkdown/kit/plugin/history"
import {upload} from "@milkdown/kit/plugin/upload"

import "./reset.css"
import "./app.css"

const markdown = `# Milkdown Vanilla Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vanilla Typescript**.`

Editor.make()
    .config((ctx) => {
        ctx.set(rootCtx, "#app")
        ctx.set(defaultValueCtx, markdown)
    })
    .use(commonmark)
    .use(upload)
    .use(history)
    .create()
