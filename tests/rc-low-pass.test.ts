import assert from "node:assert/strict"
import { runRcLowPassSimulation } from "../examples/rc-low-pass/run.js"

const output = runRcLowPassSimulation()
const lines = output.split("\n").filter(Boolean)

assert.match(lines[0] ?? "", /f\(Hz\)/)
assert.ok(lines.length > 5, "expected multiple AC sweep rows")
assert.match(output, /10\.0000/)
assert.match(output, /100000/)
assert.doesNotMatch(output, /NaN/)

console.log("rc-low-pass simulation smoke test passed")
