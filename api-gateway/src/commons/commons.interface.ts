export interface IId {
    id: string
  }
  
  export interface IQuery {
    select?: string[]
    where?: any
    orderBy?: string[]
    limit?: number
    offset?: number
  }
  
  export interface ICount {
    count: number
  }