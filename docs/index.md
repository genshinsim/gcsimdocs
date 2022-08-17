---
sidebar_position: 1
---

# Introduction

gcsim is a team dps calculation / combat simulation tool for Genshin Impact. In short, gcsim simulates combat using a priority-based action list for any given team and calculates the overall damage dealt by that team, along with many other additional useful statistics, including:

- Overall damage distribution by character
- Detailed damage distribution for each character by skill
- Energy regeneration
- Reaction count
- Field damage

![sample-output](2022-01-02-20-28-10.png)

**Note that gcsim is still heavily under active development.** We are constantly working refining our knowledge of game mechanics and doing our best to model the game mechanics as accurately as possible. Currently, we believe that the sim is in a useable state for many teams.

That being said, as with any calculations work, you should always make sure to check your results. If you do have any questions or find any issues, please either submit an issue on [Github](https://github.com/genshinsim/gsim) or reach out to us on Discord.

# How does it work

The simulator runs on a text based config file (very similar to WoW SimC). The config file is basically a text file consisting of instructions to the simulator telling it which action it should execute. For example, should it use skill then burst here, or should it add in a couple normal attacks and then use burst. For more information, see [getting started](/get-started) 
