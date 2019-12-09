#!/usr/bin/env node
const fs = require("fs")
const https = require("https")
const http = require("http")
const path = require("path")
const args = process.argv.slice(2)

if (args.length === 2) {
    const url = new URL(args[0])
    const filename = args[1]
    const isHttps = url.protocol === "https:"
    const _http = isHttps ? https : http
    const ws = fs.createWriteStream(path.resolve(process.cwd(), filename))
    _http.get(url, res => res.pipe(ws))
} else {
    console.log("usage: download \"https://www.xxx.com/aaa.jpg\" a.jpg")
}
