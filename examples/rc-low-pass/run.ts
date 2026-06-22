import { pathToFileURL } from "node:url"
import { formatAcResult, simulate } from "spicey"

export const rcLowPassNetlist = `
* RC low pass AC sweep

v1 1 0 dc 0 ac 1
r1 1 2 1k
c1 2 0 1u
.ac dec 5 10 100000

.end
`

export const runRcLowPassSimulation = () => {
  const result = simulate(rcLowPassNetlist)
  return formatAcResult(result.ac).trim()
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(runRcLowPassSimulation())
}
