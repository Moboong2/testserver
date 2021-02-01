const { EROFS } = require('constants');
const nodemailer = require('nodemailer');
const email = {
    "host":"",
    "port":"",
    "secure":false,
    'auth':{
        "user":"",
        "pass":""
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'luffy0318@gmail.com',
    to: 'luffy333@naver.com',
    subject: '테스트 이메일 입니다.',
    text: 'nodejs 한시간안에 끝내보자.'
}

send(email_data);