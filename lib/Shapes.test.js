
const Shapes = require("./Shapes")
describe("Shapes",()=>{
    describe("setColor",()=>{
        it("textColor",()=>{
            const shape = new Shapes()
            shape.setColor("purple")
            expect(shape.textColor).toEqual("purple")
        })
    })

    describe("setText",()=>{
        it("text",()=>{
            const shape = new Shapes()
            shape.setText("EKK")
            expect(shape.text).toEqual("EKK")
        })
    })

    describe("setShapeColor",()=>{
        it("shapeColor",()=>{
            const shape = new Shapes()
            shape.setShapeColor("blue")
            expect(shape.shapeColor).toEqual("blue")
        })
    })
   
})