import { cac } from 'cac'

const cli = cac('cli-demo')

cli
  .option('-a, --option-a <value>', 'Option A')
  .option('-b, --option-b', 'Option B (boolean)')

cli
  .command('say <message>', 'Say a message')
  .action((message, options) => {
    console.log(`Saying: ${message}`)
    if (options.optionA) {
      console.log(`With option A: ${options.optionA}`)
    }
    if (options.optionB) {
      console.log('With option B enabled')
    }
  })

cli
  .command('greet [name]', 'Greet someone')
  .action((name = 'World', options) => {
    console.log(`Hello, ${name}!`)
    if (options.optionA) {
      console.log(`With option A: ${options.optionA}`)
    }
    if (options.optionB) {
      console.log('With option B enabled')
    }
  })

cli.help()
cli.version('0.0.1')

cli.parse()
