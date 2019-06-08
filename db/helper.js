function getDatabaseNameForEnv (dbName) {
  const nodeEnv = process.env.NODE_ENV
  return nodeEnv === 'production' ? dbName : `${dbName}_${nodeEnv}`
}

module.exports = {
  getDatabaseNameForEnv,
}
