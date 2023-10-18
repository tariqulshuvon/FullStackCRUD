using Employee.Core.CQRS.Employee.Command;
using Employee.Core.CQRS.Employee.Command.Products;
using Employee.Core.CQRS.Employee.Query;
using Employee.Core.CQRS.Employee.Query.Products;
using Employee.Service.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee.BackEnd.Controllers;


public class ProductController : APIControllerBase
{

    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    [ProducesResponseType(401)]
    [ProducesResponseType(403)]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<VMProduct>> GetById(int id)
    {
        return await HandleQueryAsync(new GetAllProductByIdQuery(id));
    }
    [HttpGet]
    public async Task<ActionResult<VMProduct>> GetAllProduct()
    {
        return await HandleQueryAsync(new GetAllProductQuery());
    }
    [HttpPost]
    public async Task<ActionResult<VMProduct>> CreateState([FromForm] VMProduct command)
    {
        return await HandleCommandAsync(new CreateProductCommand(command));
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<VMProduct>> UpdateProduct(int id, VMProduct product)
    {
        return await HandleCommandAsync(new UpdateProductCommand(id, product));
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<VMProduct>> DeleteProduct(int id)
    {
        return await HandleCommandAsync(new DeleteProductCommand(id));
    }
}
