// Score 64 (simple game):
const simpleFrames = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]

function scoreSimpleGame(frames) {
  let totalScore = 0

  frames.forEach((frame) => {
    totalScore += frame[0] + frame[1]
  })

  return totalScore
}

console.log(scoreSimpleGame(simpleFrames))

// Score 71 (with spares):
const spareFrames = [
  [6, 1],
  [4, 0],
  [6, 4],
  [2, 7],
  [3, 5],
  [5, 0],
  [5, 5],
  [0, 0],
  [1, 6],
  [7, 2],
]

function scoreSpareGame(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let firstFrameAfter = frames[i + 1]

    if (currentFrame[0] + currentFrame[1] == 10) {
      totalScore += 10 + firstFrameAfter[0]
    } else {
      totalScore += currentFrame[0] + currentFrame[1]
    }
  }
  return totalScore
}

console.log(scoreSpareGame(spareFrames))

// Score 104 (with spares and strikes):
const spareStrikeFrames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

function scoreSpareStrikeGame(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let firstFrameAfter = frames[i + 1]

    if (currentFrame[0] == 10) {
      totalScore += 10 + firstFrameAfter[0] + firstFrameAfter[1]
    } else if (currentFrame[0] + currentFrame[1] == 10) {
      totalScore += 10 + firstFrameAfter[0]
    } else {
      totalScore += currentFrame[0] + currentFrame[1]
    }
  }
  return totalScore
}

console.log(scoreSpareStrikeGame(spareStrikeFrames))

//
// Score 119 (with spares, strikes and a double strike):
const spareStrikeDblStrikeFrames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4],
]

function scoreDoubleStrikeGame(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let firstFrameAfter = frames[i + 1]
    let secondFrameAfter = frames[i + 2]

    if (currentFrame[0] == 10 && firstFrameAfter[0] == 10) {
      totalScore += 20 + secondFrameAfter[0]
    } else if (currentFrame[0] == 10) {
      totalScore += 10 + firstFrameAfter[0] + firstFrameAfter[1]
    } else if (currentFrame[0] + currentFrame[1] == 10) {
      totalScore += 10 + firstFrameAfter[0]
    } else {
      totalScore += currentFrame[0] + currentFrame[1]
    }
  }
  return totalScore
}

console.log(scoreDoubleStrikeGame(spareStrikeDblStrikeFrames))

// Score 141 (includes a strike on the last frame):
const strikeLastframes = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [10, 10, 10],
]

function scoreLastFrameStrike(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let firstFrameAfter = frames[i + 1]
    let secondFrameAfter = frames[i + 2]

    if (i == 9 && currentFrame[0] == 10) {
      totalScore += currentFrame[0] + currentFrame[1] + currentFrame[2]
    } else if (currentFrame[0] == 10 && firstFrameAfter[0] == 10) {
      totalScore += 20 + secondFrameAfter[0]
    } else if (currentFrame[0] == 10) {
      totalScore += 10 + firstFrameAfter[0] + firstFrameAfter[1]
    } else if (currentFrame[0] + currentFrame[1] == 10) {
      totalScore += 10 + firstFrameAfter[0]
    } else {
      totalScore += currentFrame[0] + currentFrame[1]
    }
  }
  return totalScore
}

console.log(scoreLastFrameStrike(strikeLastframes))

// Score 300 (perfect game):
