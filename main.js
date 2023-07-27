function expo(num, pow, callback) {
    if (pow === 0) {
      callback(null, 1);
    } else if (pow < 0) {
      callback(new Error('Exponent must be a positive integer'));
    } else {
      expo(num, pow - 1, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, num * result);
        }
      });
    }
  }

  expo(5, 3, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result); 
    }
  });
  async function deepCopy(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject(new Error('Argument must be an object'));
      } else {
        setTimeout(() => {
          const newObj = Array.isArray(obj) ? [] : {};
          for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              newObj[key] = deepCopy(obj[key]);
            } else {
              newObj[key] = obj[key];
            }
          }
          resolve(newObj);
        }, 0);
      }
    });
  }
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4, { e: 5 }],
    },
  };
  
  deepCopy(obj)
    .then((newObj) => {
      console.log(newObj); 
      console.log(newObj.b.d[2] === obj.b.d[2]); 
    })
    .catch((err) => {
      console.error(err);
    });