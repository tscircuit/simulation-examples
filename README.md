# tscircuit simulation examples

A runnable [tscircuit](https://github.com/tscircuit/tscircuit) project for
seeing different SPICE simulation examples.

## Getting Started

```bash
npm install
npm run example:rc-low-pass
```

## Examples

### RC Low-pass AC Sweep

`examples/rc-low-pass/run.ts` runs a simple RC low-pass filter through
[`spicey`](https://www.npmjs.com/package/spicey) and prints the AC sweep table.

```spice
v1 1 0 dc 0 ac 1
r1 1 2 1k
c1 2 0 1u
.ac dec 5 10 100000
.end
```

## Verification

```bash
npm test
npm run typecheck
```
