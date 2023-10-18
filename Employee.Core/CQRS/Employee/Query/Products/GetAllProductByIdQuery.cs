using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Employee.Core.CQRS.Employee.Query.Products;


public record GetAllProductByIdQuery : IRequest<QueryResult<VMProduct>>
{
    [JsonConstructor]
    public GetAllProductByIdQuery(int id)
    {
        Id = id;
    }
    public int Id { get; set; }

    public class GetAllProductByIdQueryHandler : IRequestHandler<GetAllProductByIdQuery, QueryResult<VMProduct>>
    {
        private readonly IProductRepository _productRepository;


        public GetAllProductByIdQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<QueryResult<VMProduct>> Handle(GetAllProductByIdQuery request, CancellationToken cancellationToken)
        {

            var data = await _productRepository.GetByIdAsync(request.Id);
            return data switch
            {
                null => new QueryResult<VMProduct>(null, QueryResultTypeEnum.NotFound),
                _ => new QueryResult<VMProduct>(data, QueryResultTypeEnum.Success)
            };


        }
    }



}

