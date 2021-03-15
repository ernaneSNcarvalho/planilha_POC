const { GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('10L0XGUAgDMyE1et8aw1570J9_shO5_LxtXy_JsxmPfs')

const run = async () => {
    
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
   
}

run()