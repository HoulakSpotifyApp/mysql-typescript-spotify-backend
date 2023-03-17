export type Query = Record<string, any>;

export type Id = string | number;

//Patron Repository
export interface DatabaseRepository<T> {
    create(data: Partial<T>, query?: Query): Promise<T>;
    list(query?: Query): Promise<T[]>;
}