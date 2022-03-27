import {Holiday} from "../src/holiday";

describe('holiday', function () {
    it('today is xmas', () => {
        let holiday = new Holiday();
        holiday.getToday = () => {
            return new Date(2000, 11, 25);
        }
        expect(holiday.sayHello()).toBe('Merry Christmas');
    });
});