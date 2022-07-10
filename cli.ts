import { Command } from "./deps.ts";

await new Command()
  .name("jmo")
  .version("0.0.1")
  .parse(Deno.args);
