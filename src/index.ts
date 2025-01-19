import {Crepe} from "@milkdown/crepe"
import "@milkdown/crepe/theme/common/style.css"

import "./reset.css"
import "@milkdown/crepe/theme/frame.css"
import "./theme.css"

const defaultValue = `
# Cobble

A Markdown-enabled rich text editor. This text is editable! Try it!

Hint: type \`/table\` to insert a table, and \`/image\` to insert an image.
`

const crepe = new Crepe({
    root: document.getElementById("app"),
    defaultValue,
    featureConfigs: {
        placeholder: {
            text: "",
        },
    },
})
crepe.create()
