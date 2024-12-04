function greeter(person: string | string[]): string | string[] {
  if (Array.isArray(person)) {
    return person.map(name => "Hello, " + name);
  } else {
    return "Hello, " + person;
  }
}

let user = ["Alice", "Bob", "Charlie"];
console.log(greeter(user));

let singleUser = "Alice";
console.log(greeter(singleUser));