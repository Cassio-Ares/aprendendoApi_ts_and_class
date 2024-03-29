import knex, { Knex } from 'knex';
import knexConfig from '../config/knex'

let conn: Knex;

const conectar = () => {
    if (conn) {
      return conn;
    }
  
    conn = knex(knexConfig);
    return conn;
  }
  
  
  export default conectar()