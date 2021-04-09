// export class Otp {
function get_token() {
    return Math.floor(Math.random() * Math.floor(1000000));
}

export {get_token};

// }