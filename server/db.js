import config from 'config'
import mysql from 'mysql'

const pool = mysql.createPool({
  host: config.get('hostname'),
  user: config.get('username'),
  password: config.get('password'),
  database: config.get('database')
})

export default pool
