const rewire = require("rewire")
const script = rewire("../script")
const hoverEffectOver = script.__get__("hoverEffectOver")
// @ponicode
describe("hoverEffectOver", () => {
    test("0", () => {
        let result = hoverEffectOver()
        expect(result).toMatchSnapshot()
    })
})
