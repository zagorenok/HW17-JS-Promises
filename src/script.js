'use strict'
// ............................#1
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello!'), ms),
    setTimeout(() => reject(new Error('error')), ms)
  })
}
delay(1000)
  .then(resultTrue => console.log(resultTrue))
  .catch(resultError => console.log(resultError));

// ............................#2
function getUserInfo() {
  return new Promise(function(resolve, reject) {
      setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
  });
}

function getUserAvatar(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
        setTimeout(() => resolve(userInfo), 1000);
    });
}

function getUserAdditionalInfo(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.interests = ['sport', 'books'];
        setTimeout(() => resolve(userInfo), 1000);
    });
}

getUserInfo()
  .then(userInfo => userInfo)
  .then(userInfo1 => getUserAvatar(userInfo1))
  .then(userInfo2 => getUserAdditionalInfo(userInfo2))
  .then(finallyResult => console.log(finallyResult))

// ...............................................#3
new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
})
  .then(userInfo => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('wrong data') ), 1000);
    });
  })
  .catch(error => console.warn(error))

  
