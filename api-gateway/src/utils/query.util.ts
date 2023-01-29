import { Injectable } from "@nestjs/common";
import { isEmpty, merge } from "lodash";
import { IQuery } from "src/commons/commons.interface";

@Injectable()
export class QueryUtils {
  async queryBuilder(filterBy: Record<string, any>, orderBy: string, limit: number, offset: number): Promise<IQuery> {
    return merge({}, await this.getFilters(filterBy), await this.getOrder(orderBy), await this.getCursor(limit, offset))
  }

  async getFilters(filterBy: Record<string, any>): Promise<Record<string, any>> {
    const queryFilters = { where: {} }

    if (!isEmpty(filterBy)) Object.assign(queryFilters.where, filterBy)

    return queryFilters
  }

  async getOrder(orderBy: string): Promise<IQuery> {
    const queryOrder: IQuery = {}

    if (!isEmpty(orderBy)) {
      if (orderBy.trim().charAt(0) === '-') {
        Object.assign(queryOrder, { orderBy: [orderBy.trim().substr(1), 'DESC'] })
      } else {
        Object.assign(queryOrder, { orderBy: [orderBy.trim(), 'ASC'] })
      }
    }

    return queryOrder
  }

  async getCursor(limit: number, offset: number): Promise<IQuery> {
    const queryCursor: IQuery = {};

    if (!isEmpty(limit)) Object.assign(queryCursor, { limit })
    if (!isEmpty(offset)) Object.assign(queryCursor, { offset })

    return queryCursor;
  }
}