describe("setData", () => {
  const setData = jest.fn(args => true)

  describe("check called function", () => {
    beforeEach(() => {
      setData('test1', true)
    })

    afterEach(() => {
      setData.mockClear()
    })

    test("check args", () => {
      expect(setData.mock.calls).toEqual([['test1', true]])
    })

    test("check number of calls", () => {
      expect(setData).toHaveBeenCalledTimes(1)
    })
  })
})
