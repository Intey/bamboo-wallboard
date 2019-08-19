
export function isSuccess(state) {
  if (state === "Successful")
    return 'success'
  else if ( state === "InProgress" )
    return 'building'
  else if ( state === "Unknown" )
    return 'unknown'
  else
    return 'fail'
}

