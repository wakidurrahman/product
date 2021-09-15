/**
 * find
 * @param {*}
 */

 function find(model, option) {
    return new Promise((resolve, reject) => {
      model
        .find(option)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }