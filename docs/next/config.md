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

`if` statement takes the following format:

```
if <condition> {

} else {

}
```

`<condition>` can be any expression that evalutes into a number. `condition` is considered false if it evaluates to 0 and true otherwise.

### `while` statement

`while` statement takes the following format:

```
while <condition> {

}
```

`<condition>` can be any expression that evalutes into a number. `condition` is considered false if it evaluates to 0 and true otherwise.

`while` will repeat the block for as long as condition evalutes true.

#### Infinite loop special caution

Be careful when using infinite loops. gcsim does not have a way to detect infinite loops. An infinite loop that never exits will cause the simulation to hang with no noteable error.

The exception to this is if there is an action (or `wait(x)`) inside an infinite loop, for example:

```
while 1 {
    xiangling attack;
}
```

This is ok because any time a character action (or wait) is executed, the evaluation of the script is paused and the simulation takes over. Since the simulation itself has an exit condition (i.e. duration), this infinite loop will properly be terminated once the simulation reaches its exit condition.

However, the following will cause the simulation to hang forever because script execution is never paused, so the simulator never gets a chance to check its exit conditions:

```
while 1 {
    print("hi)
}
```

`wait` is a special case in that it behaves just like a character action. So the following will exit properly according to the simulations exit conditions:

```
while 1 {
    wait(1);
}
```

Also be careful of infinite loops that seems like it contains a character action but may not actually ever evaluate it. For example:

```
while 1 {
    if 0 {
        //this block will never be reached!!
        xiangling attack;
    }
}
```

In this example the `xiangling attack;` can never be reached, causing the script to never actually pause and therefore the simulation will never reach its exit conditon.

### `switch` statement

`switch` statement takes the following format:

```
switch <expr> {
    case <expr>:
        //do action here
    case <expr>:
        //do action here
        fallthrough;
    case <expr>:
        //will continue from above
    default:
        //default case
}
```

A case is executed if the switch expression equals the case expression. There is no `break;` at the end of each case. By default, once a case finishes evaluating, the switch statement will exit. The exception to this is if a fallthrough is present. This will cause the case immediately below the current case to be executed as well.

The `default` case is executed if none of the cases equals the switch expression. If no `default` is present, the switch will simply exit.

### `apl` statement

### Functions
