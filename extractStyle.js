const fs = require('fs')
const { extractStyle } = require(`@ant-design/static-style-extract`);

const cssText = extractStyle();
fs.writeFileSync('./src/antd.min.css', cssText);