import fetchUser from '../fetchUser'

const mockResponse = (status, response) => {
  return new window.Response(response, {
    status: status,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

describe("fetchUser", () => {
  const user = {
    id: 1,
    name: 'murajun1978'
  }

  it("returns request response", () => {
    window.fetch = jest.fn(() =>
      Promise.resolve(mockResponse(200, JSON.stringify(user))))

    return fetchUser(user.id)
      .then(json => {
        expect(json).toEqual(user)
      })
  })
})
