const {
    prompt
} = require('inquirer')
const {
    writeFile
} = require('fs')
const {
    listTable
} = require(`${__dirname}/../utils`)
const {
    resolve
} = require('path')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

const question = [{
    type: 'input',
    name: 'project',
    message: 'Project name:',
    validate(val) {
        if (val !== '') {
            return true
        }
        return 'Project name is required!'
    }
}]

module.exports = prompt(question).then(({
    project
}) => {
    const spinner = ora('Downloading imooc-es-cli...')

    spinner.start()

    download(`github:xiecheng328/imooc-es-parser`, `./${project}`, (err) => {
        if (err) {
            console.log(chalk.red(err))
            process.exit()
        }
        spinner.stop()
        console.log(chalk.green('New project has been initialized successfully!'))
    })
})