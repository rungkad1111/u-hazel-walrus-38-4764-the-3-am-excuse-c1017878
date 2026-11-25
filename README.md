# The 3 AM Excuse

[![The 3 AM Excuse](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rungkad1111/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rungkad1111/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line under 200 characters: the most creative excuse a hardware wallet gives for refusing to sign a transaction at 3 AM.

## Entry

> At 3 AM my secure element is dreaming in private keys, and your memecoin isn't in a single one of them.

## How it works

`main.ts` (Node 22, standard library only) writes the excuse to `/output/entry.txt`. It validates the gate at runtime: 1–200 characters, a single line, not only whitespace — and fails loudly instead of shipping an invalid entry.

## Run

```sh
node main.ts
cat /output/entry.txt
```
