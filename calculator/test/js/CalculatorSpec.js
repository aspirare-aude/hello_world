describe ("My Calculator", function() {

 it("should clear all when C is clicked", function() {

 expect (Calculator.clearAll(input)).toBe('');

 })

 describe('JavaScript addition operator', function () {
    it('should add two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

 it("should be able to deal with strings", function() {

 expect (function() {Converter.convertFromImperialToMetric("hello")}

).toThrow(new Error("Not a number"));

 })

})