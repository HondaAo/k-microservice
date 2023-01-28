// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: proto/employee.proto

package grpc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// EmployeesServiceClient is the client API for EmployeesService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EmployeesServiceClient interface {
	FindById(ctx context.Context, in *FindByIdRequest, opts ...grpc.CallOption) (*Employee, error)
	Find(ctx context.Context, in *Query, opts ...grpc.CallOption) (*FindEmployeesPayload, error)
	Create(ctx context.Context, in *CreateEmployeeInput, opts ...grpc.CallOption) (*Employee, error)
	Update(ctx context.Context, in *UpdateEmployeeInput, opts ...grpc.CallOption) (*Employee, error)
}

type employeesServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEmployeesServiceClient(cc grpc.ClientConnInterface) EmployeesServiceClient {
	return &employeesServiceClient{cc}
}

func (c *employeesServiceClient) FindById(ctx context.Context, in *FindByIdRequest, opts ...grpc.CallOption) (*Employee, error) {
	out := new(Employee)
	err := c.cc.Invoke(ctx, "/employee.EmployeesService/findById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *employeesServiceClient) Find(ctx context.Context, in *Query, opts ...grpc.CallOption) (*FindEmployeesPayload, error) {
	out := new(FindEmployeesPayload)
	err := c.cc.Invoke(ctx, "/employee.EmployeesService/find", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *employeesServiceClient) Create(ctx context.Context, in *CreateEmployeeInput, opts ...grpc.CallOption) (*Employee, error) {
	out := new(Employee)
	err := c.cc.Invoke(ctx, "/employee.EmployeesService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *employeesServiceClient) Update(ctx context.Context, in *UpdateEmployeeInput, opts ...grpc.CallOption) (*Employee, error) {
	out := new(Employee)
	err := c.cc.Invoke(ctx, "/employee.EmployeesService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EmployeesServiceServer is the server API for EmployeesService service.
// All implementations must embed UnimplementedEmployeesServiceServer
// for forward compatibility
type EmployeesServiceServer interface {
	FindById(context.Context, *FindByIdRequest) (*Employee, error)
	Find(context.Context, *Query) (*FindEmployeesPayload, error)
	Create(context.Context, *CreateEmployeeInput) (*Employee, error)
	Update(context.Context, *UpdateEmployeeInput) (*Employee, error)
	mustEmbedUnimplementedEmployeesServiceServer()
}

// UnimplementedEmployeesServiceServer must be embedded to have forward compatible implementations.
type UnimplementedEmployeesServiceServer struct {
}

func (UnimplementedEmployeesServiceServer) FindById(context.Context, *FindByIdRequest) (*Employee, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindById not implemented")
}
func (UnimplementedEmployeesServiceServer) Find(context.Context, *Query) (*FindEmployeesPayload, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Find not implemented")
}
func (UnimplementedEmployeesServiceServer) Create(context.Context, *CreateEmployeeInput) (*Employee, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedEmployeesServiceServer) Update(context.Context, *UpdateEmployeeInput) (*Employee, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedEmployeesServiceServer) mustEmbedUnimplementedEmployeesServiceServer() {}

// UnsafeEmployeesServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EmployeesServiceServer will
// result in compilation errors.
type UnsafeEmployeesServiceServer interface {
	mustEmbedUnimplementedEmployeesServiceServer()
}

func RegisterEmployeesServiceServer(s grpc.ServiceRegistrar, srv EmployeesServiceServer) {
	s.RegisterService(&EmployeesService_ServiceDesc, srv)
}

func _EmployeesService_FindById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmployeesServiceServer).FindById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/employee.EmployeesService/findById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmployeesServiceServer).FindById(ctx, req.(*FindByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmployeesService_Find_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Query)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmployeesServiceServer).Find(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/employee.EmployeesService/find",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmployeesServiceServer).Find(ctx, req.(*Query))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmployeesService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateEmployeeInput)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmployeesServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/employee.EmployeesService/create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmployeesServiceServer).Create(ctx, req.(*CreateEmployeeInput))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmployeesService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateEmployeeInput)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmployeesServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/employee.EmployeesService/update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmployeesServiceServer).Update(ctx, req.(*UpdateEmployeeInput))
	}
	return interceptor(ctx, in, info, handler)
}

// EmployeesService_ServiceDesc is the grpc.ServiceDesc for EmployeesService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EmployeesService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "employee.EmployeesService",
	HandlerType: (*EmployeesServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "findById",
			Handler:    _EmployeesService_FindById_Handler,
		},
		{
			MethodName: "find",
			Handler:    _EmployeesService_Find_Handler,
		},
		{
			MethodName: "create",
			Handler:    _EmployeesService_Create_Handler,
		},
		{
			MethodName: "update",
			Handler:    _EmployeesService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/employee.proto",
}
