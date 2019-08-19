
export dummy = () => {
  return {
    results: {
      result: [
        { projectName: "Test",
          planName: "Development",
          plan: {
            branches: {
              branch :
              [
                {
                  shortName: "ok-branch",
                  latestResult:{ buildState: getRnd() },
                },
                {
                  shortName: "ok-branch",
                  latestResult:{ buildState: getRnd() },
                },
                {
                  shortName: "ok-branch",
                  latestResult:{ buildState: getRnd() },
                },
                {
                  shortName: "ok-branch",
                  latestResult:{ buildState: getRnd() },
                },
                {
                  shortName: "bad-branch",
                  latestResult:{ buildState: getRnd() },
                }
              ]
            },
          },
        },
        { projectName: "Test",
          planName: "Release",
          state: getRnd(),
          plan: {
            branches: {
              branch :
              [
                {
                  shortName: "ok-branch",
                  latestResult:{ buildState: getRnd() },
                },
                {
                  shortName: "bad-branch",
                  latestResult:{ buildState: getRnd() },
                }
              ]
            },
          },
        },
      ]
    }
  }
}

function getRnd()
{
  const v = Math.random()
  if (v <= 0.2)
    return 'Successful'
  else if (v <= 0.5)
    return 'Failed'
  else
    return 'Building'
}

