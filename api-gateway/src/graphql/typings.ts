
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

export interface SignupEmployeeInput {
    name: string;
    email: string;
    password: string;
}

export interface LoginEmployeeInput {
    email: string;
    password: string;
}

export interface Client {
    clientId: string;
    clientName: string;
    email: string;
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
