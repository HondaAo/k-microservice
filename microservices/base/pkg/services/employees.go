package services

import (
	"context"
	"net/http"

	"github.com/HondaAo/bff/microservices/base/pkg/db"
	"github.com/HondaAo/bff/microservices/base/pkg/models"

	pb "github.com/HondaAo/bff/microservices/base/pkg/grpc/proto"
)

type EmployeeServer struct {
	H db.Handler
	pb.UnimplementedEmployeesServiceServer
}

const layout = "2006-01-02"

func (s *EmployeeServer) FindById(ctx context.Context, req *pb.FindByIdRequest) (pb.FindByIdResponse, error) {
	var employee models.Employee

	if result := s.H.DB.First(&employee, "client_id = ? AND employee_id = ?", req.ClientId, req.EmployeeId); result.Error != nil {
		return pb.FindByIdResponse{
			Error:  result.Error.Error(),
			Status: http.StatusBadRequest,
		}, nil
	}

	return pb.FindByIdResponse{
		Employee: &pb.Employee{
			ClientId:       employee.ClientID.String(),
			EmployeeId:     employee.EmployeeID,
			EmployeeCode:   employee.EmployeeCode,
			JobCategoryId:  employee.JobCategoryID,
			DepartmentId:   employee.DepartmentID,
			StartDate:      employee.StartDate.Format(layout),
			RetirementDate: employee.RetirementDate.Format(layout),
		},
	}, nil
}

func (s *EmployeeServer) Find(ctx context.Context, req *pb.Query) (pb.FindEmployeesPayload, error) {
	return nil, nil
}
