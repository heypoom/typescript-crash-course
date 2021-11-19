const log = (msg: string) => (func: Function) => {
  console.log(msg, func.name)
}

@log('Hello')
class User {
  email = 'poom@hey.com'
}
