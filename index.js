const apprun = require('./app')
const port = 3001

apprun.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
