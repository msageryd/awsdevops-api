'use strict';

const path = require('path');
const model = 'Widget';

module.exports = function migrateAccountModel(app, next) {
  const mysql = app.dataSources.mysqlDb;
  mysql.isActual(model, (err, actual) => {
    if (err) throw err;

    let syncStatus = actual ? 'in sync' : 'out of sync';
    console.log('');
    console.log(`${model} model are ${syncStatus}`);
    if (actual) return next();
    console.log(`Migrating ${model} model..`);
    mysql.autoupdate(model, (err, result) => {
      if (err) throw err;
      console.log(`${model} model migration successful!`);
      next();
    });
  });
};
