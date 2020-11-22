module.exports = {
  name: "test",
  usage: '`rcc.credits`',
  description: '`rcc.credits`',
  execute(message, args, client) {
    yes = args.join(" ");
    yes = yes.split("\n");
    console.log(args)
  }
}