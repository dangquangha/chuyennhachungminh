// Render sẵn HTML của trang vào dist/index.html để nội dung hiện ngay, không chờ JS.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'dist/index.html')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = await readFile(htmlPath, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Không tìm thấy <!--app-html--> trong dist/index.html')

await writeFile(htmlPath, template.replace('<!--app-html-->', render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('✓ prerendered dist/index.html')
