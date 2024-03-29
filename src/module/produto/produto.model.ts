import knex from '../../service/knex';
import { Produto, ProdutoCreate } from './produto';

export const getAll = async ():Promise<Produto[] | []> => {
  return knex('produtos').select();
};

export const store = async (params: ProdutoCreate) => {
  return knex('produtos').insert(params);
};

