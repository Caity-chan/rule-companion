module.exports = {
  name: "test",
  execute(message, args, client) {
    yes = args.join(" ");
    yes = yes.split("\n");
    console.log(args)
  }
}