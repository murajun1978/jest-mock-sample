import 'whatwg-fetch'

const host = 'http://example.com'

const fetchUser = (id) => {
  return fetch(host + `/user/${id}`)
    .then(res => res.json())
}

export default fetchUser
