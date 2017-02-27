import request from 'superagent/lib/client';

export default {

  // We want to get a list of all the contacts
  // from the API. This list contains reduced info
  // and will be be used in the sidebar
  getMails: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },

  getProviders: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },

  sendMail: (url, data) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },

  removeMail: (url, data) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },

  searchMail: (url, data) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },

  updateProvider: (url, data) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, response) => {
          if (err) reject(err);
          else
          resolve(JSON.parse(response.text));
        })
    });
  },
}
