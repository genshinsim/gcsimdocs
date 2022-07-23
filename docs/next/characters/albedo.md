---
title: Albedo
---

## Known issues

- Burst does not generate randomly and instead rely on a param to specify number of hits.
- Burst ticks missing precise frame count

## Frames

## Params

| Ability | Tag     | Description                                                                                   |
| ------- | ------- | --------------------------------------------------------------------------------------------- |
| Burst   | `bloom` | Number of burst hits. Defaults to 2. Size of hit is circle with radius 2 centering on player. |

## Custom fields

_if more one field is available, then either will work_

| Field                                     | Description                                                        |
| ----------------------------------------- | ------------------------------------------------------------------ |
| `.albedo.skill` <br /> `.albedo.elevator` | Evaluates to 1 if Albedo skill is currently active                 |
| `.albedo.c2stacks`                        | Current number of C2 stacks                                        |
| `.mods.<character>.albedo-a4`             | Whether or not Albedo A4 buff is active on the specified character |
