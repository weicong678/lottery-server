const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/mysql_config')

const pool = mysql.createConnection(MYSQL_CONFIG)