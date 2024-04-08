import { Knex } from "knex";
import { KnexService } from "../../service/knex";

export class Produto{
  private db: Knex;

  constructor(knexService: KnexService){
    this.db = knexService.obterConexao();
  }

  getAll = async () => {
    return this.db('produtos').select();
  };

  store = async (params:any) => {
    return this.db('produtos').insert(params)
  };
}