const log2 =
  (msg: string) =>
  (target: Object, key: string): any =>
    console.log(msg, key, target)

class User2 {
  email = 'poom@hey.com'

  @log2('Hi!')
  getEmail() {
    return this.email
  }
}
