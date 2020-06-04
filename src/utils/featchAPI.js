function get(url){
    return fetch(url).then(response => response.json())
}

function post(url, postObject){
    return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: postObject
  })
}
export  { get, post}