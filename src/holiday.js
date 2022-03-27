export class Holiday {
    sayHello(order) {
        let today = this.getToday();
        if (today.getMonth() === 11 && today.getDate() === 25) {
            return 'Merry Christmas';
        }
        return 'Today is not Christmas';
    }

    getToday() {
        return new Date();
    }
}