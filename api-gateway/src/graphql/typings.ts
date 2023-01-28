
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SignupClientInput {
    name: string;
    email: string;
    password: string;
}

export interface LoginClientInput {
    email: string;
    password: string;
}

export interface CreateInputEmployee {
    email: string;
    employeeCode: string;
    jobCategoryId: number;
    departmentId: number;
    startDate: DateTime;
}

export interface SignupEmployeeInput {
    clientId: string;
    name: string;
    email: string;
    password: string;
}

export interface LoginEmployeeInput {
    clientId: string;
    email: string;
    password: string;
}

export interface IMutation {
    clientSignup(data: SignupClientInput): ClientPayload | Promise<ClientPayload>;
    clientLogin(data: LoginClientInput): ClientPayload | Promise<ClientPayload>;
    clientLogout(): boolean | Promise<boolean>;
    createEmployee(data: CreateInputEmployee): Employee | Promise<Employee>;
}

export interface IQuery {
    client(clientId: string): Client | Promise<Client>;
    me(): Client | Promise<Client>;
}

export interface Client {
    clientId: string;
    clientName: string;
    email: string;
    password: string;
    isUsed: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface ClientPayload {
    errors?: Nullable<Nullable<ErrorPayload>[]>;
    client?: Nullable<Client>;
}

export interface ErrorPayload {
    field?: Nullable<string>;
    message?: Nullable<Nullable<string>[]>;
}

export interface Employee {
    clientId: string;
    employeeId: string;
    email: string;
    employeeCode: string;
    jobCategoryId: number;
    departmentId: number;
    startDate: DateTime;
    retirementDate: DateTime;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface EmployeePayload {
    errors?: Nullable<Nullable<ErrorPayload>[]>;
    employee?: Nullable<Employee>;
}

export type DateTime = any;
export type EmailAddress = any;
export type UnsignedInt = any;
export type JSONObject = any;
type Nullable<T> = T | null;
