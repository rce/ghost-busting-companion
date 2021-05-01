import React, {useEffect, useRef, useState} from "react"
import {render} from "react-dom"

type Evidence
  = "EMF_FIVE"
  | "SPIRIT_BOX"
  | "GHOSTWRITING"
  | "GHOSTORB"
  | "FINGERPRINTS"
  | "FREEZING"


type Ghost = { name: string, evidence: Evidence[] }
const ghosts: Ghost[] = [
  { name: "henki", evidence: ["SPIRIT_BOX", "FINGERPRINTS", "GHOSTWRITING"] },
  { name: "haamu", evidence: ["FINGERPRINTS", "FREEZING", "SPIRIT_BOX"] },
  { name: "kummitus", evidence: ["EMF_FIVE", "GHOSTORB", "FREEZING"] },
  { name: "räyhähenki", evidence: ["SPIRIT_BOX", "FINGERPRINTS", "GHOSTORB"] },
  { name: "banshee", evidence: ["EMF_FIVE", "FINGERPRINTS", "FREEZING"] },
  { name: "jinni", evidence: ["SPIRIT_BOX", "GHOSTORB", "EMF_FIVE"] },
  { name: "mare", evidence: ["SPIRIT_BOX", "GHOSTORB", "FREEZING"] },
  { name: "revenant", evidence: ["EMF_FIVE", "FINGERPRINTS", "GHOSTWRITING"] },
  { name: "varjo", evidence: ["EMF_FIVE", "GHOSTWRITING", "GHOSTORB"] },
  { name: "demoni", evidence: ["SPIRIT_BOX", "GHOSTWRITING", "FREEZING"] },
  { name: "yurei", evidence: ["GHOSTORB", "GHOSTWRITING", "FREEZING"] },
  { name: "oni", evidence: ["EMF_FIVE", "SPIRIT_BOX", "GHOSTWRITING"] },
]

function flatten<T>(lists: T[][]): T[] { return ([] as T[]).concat(...lists) }
function unique<T>(xs: T[]): T[] { return Array.from(new Set(xs)) }
const ALL_EVIDENCE: Evidence[] = unique(flatten(ghosts.map(g => g.evidence)))

function App() {
  const [foundEvidence, setEvidence] = useState<Evidence[]>([])
  const isFound = (e: Evidence) => foundEvidence.includes(e)

  const toggleEvidence = (e: Evidence) => {
    const without = foundEvidence.filter(_ => _ != e)
    if (foundEvidence.includes(e)) {
      setEvidence(without)
    } else if (possibleRemainingClues.includes(e)) {
      setEvidence([e].concat(without))
    }
  }

  const possibleGhosts: Ghost[] = ghosts
    .filter((g: Ghost) => foundEvidence.every((e: Evidence) => g.evidence.includes(e)))
    .map((g: Ghost) => ({
      ...g,
      evidence: g.evidence.filter((e: Evidence) => !isFound(e)),
    }))

  const possibleRemainingClues: Evidence[] =
    unique(flatten(possibleGhosts.map((g: Ghost) => g.evidence)))
      .filter((e: Evidence) => !isFound(e))

  return (
    <div className="evidence-grid">
      {ALL_EVIDENCE.map(e => {
        const classNames = ["evidence-grid--evidence"]
        if (foundEvidence.includes(e)) {
          classNames.push("found")
        } else if (!possibleRemainingClues.includes(e)) {
          classNames.push("impossible")
        }
        return <div className={classNames.join(" ")} onClick={() => toggleEvidence(e)}>{e}</div>
      })}
    </div>
  )
}

render(<App />, document.getElementById("app"))
