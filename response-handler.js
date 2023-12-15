// const fs = require('fs').promises
// import fs from 'fs'
import fs from 'fs/promises'

// import path, { dirname} from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// or add export here
export const resHandler = aysnc (req, res, next) => {
    // fs.readFile('my-page.html', 'utf8', (err, data) => {
    //   res.send(data);
    // });

    //Promise based version
    try {
        const data = fs.readFile('my-page.html', 'utf8')
        res.send(data)
    } catch(err) {
        console.log(err)
    }

    // res.sendFile(path.join(__dirname, 'my-page.html'))
}

// module.exports = resHandler
// export default reshandler