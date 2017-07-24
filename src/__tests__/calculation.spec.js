jest.mock('../Calculation')

import Calculation from '../Calculation'

describe("Calculation", () => {
  const mockFn = jest.fn((a, b) => 0)

  Calculation.mockImplementation(() => {
    return {
      add: mockFn
    }
  })

  test("add()", () => {
    const calculation = new Calculation()

    calculation.add(1,2)

    expect(mockFn.mock.calls).toEqual([[1,2]])
  })
})
