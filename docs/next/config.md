---
sidebar_position: 1
title: Config File
---

# Config file

The gcsim config file contains all the information necessary for the simulator run a simulation. The config file can be roughly broken down into 3 parts:

- simulator options
- character stats/weapon/artifact block
- the script (gcsl) the simulator needs to execute

## Simulator options

## Character block

## gcsl

gcsim language or gcsl is the script that the simulator will run. This script tells the simulator what actions to executed. The scripting language includes some basic functionalities such as variables, conditionals, and loops.

### Comments

Comments in gcsl can start with either `//` or `#`. Both are valid. There are no block comments in gcsl.

### Character actions

### Primative types and operators

The only primative type is numbers. For purpose of boolean type conditionals, 0 is considered false and anything other than 0 is true.

The following are valid operators:

Math operations

- `+`: plus
- `-`: minus
- `*`: multiply
- `/`: divided

Comparison operators

- `==`: equal
- `!=`: does not equal
- `<`: less than
- `<=`: less than or equal to
- `>`: greater than
- `>=`: greater than or equal to

Logic operators

- `&&`: and
- `||`: or
- `!`: not

The one exception to this is that some system functions maybe take string as inputs. However, these strings cannot be assigned to variables or manipulated otherwise.

### Fields

Fields are special syntax for accessing in sim data during an iteration. Fields always starts with a `.`. For example, `.energy.xiangling` will evaluate to the current energy for `xiangling`.

All fields must evaluate to a number. For fields that are true or false, they will evaluate to 1 if true and 0 if false.

For more details on the available fields, see: [Fields](fields)

### Variables

Variables can only store numbers. Variables must be first declared before they can be used. Declaration starts with a `let` statement:

```
let x = 1;
```

Note that declared variables must also be initialized (i.e. assigned a value). The following is NOT valid:

```
let x; // this will error
```

Once declared, variables can be assigned other values with the assignment operator.

```
let x = 1;
x = 5; // x now has the value 5
```

Variables can be used in expressions:

```
let y = 2;
let x = 3;
let z = x + y; //z is now 5
```

Variable is subject to scoping in blocks such as `if`, `while`, `switch`, `apl` and functions:

```
let x = 1;
if 1 {

}
```

### `if` statement

### `while` statement

### `switch` statement

### `apl` statement

### Functions
