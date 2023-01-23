export class EmployeeDTO {
  readonly clientId: string;
  readonly employeeId: number;
  readonly employeeName: string;
  readonly email: string;
  readonly password: string;
  // 従業員コード
  readonly employeeCode: string;
  // 職種ID
  readonly jobCategoryId: number;
  // 部署ID
  readonly departmentId: number;
  // 入社日
  readonly startDate: Date;
  // 退社日
  readonly retirementDate: Date;
  // 作成日
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
