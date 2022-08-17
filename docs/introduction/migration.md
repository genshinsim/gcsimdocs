---
slug: /migration
sidebar_position: 2
---

# Rewrite Migration Guide

## TL;DR

From an end user's perspective, there are a few major changes that will prevent and existing sim from running

- `restart` is removed. Instead, to repeat the rotation, wrap the rotation in a while loop as follows:

```
while 1 {
    # rotation goes in here

}
```

- `wait 10;` has been changed to a function call. They should be replaced with `wait(10);` for the same functionality

- `model=apl` has been removed. APL based sims will no longer run. This will be added back as a functionality at a later date.

## New Features

- The entire config language (now known as gcsl) has been completely revamped to introduce new scripting features such as variables, arithmetic and logic operations, loops and control statement, and functions. **Note that while these language features are available, the are not required for you to write sims**
- Hitlag has been implemented
- Animation system has been reworked to remove the previous bug cause character animation to take longer than actual by 2 frames.
- Almost all characters have had frames completely recounted
