using Microsoft.AspNetCore.Mvc;
using Ryzen.Ryzen.API.Models.InputModels;
using Ryzen.Ryzen.API.Models.ResponseModels;

namespace Ryzen.Ryzen.API.Controllers.Calculator.V1
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CalculatorController : ControllerBase
    {
        private readonly ILogger<CalculatorController> _logger;

        public CalculatorController(ILogger<CalculatorController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [Route("calculate", Name = nameof(Calculate))]
        public ActionResult<CalculationResponseModel> Calculate([FromBody] Calculation formula)
        {
            if (formula.Value == null)
            {
                return new BadRequestResult();
            }

            try
            {
                var calculation = Dangl.Calculator.Calculator.Calculate(formula.Value);

                if (calculation.ErrorMessage != null)
                {
                    return BadRequest($"{calculation.ErrorMessage}");
                }
                var responseModel = new CalculationResponseModel(calculation.Result);
                return Ok(responseModel);
            }
            catch (Exception ex)
            {

                return BadRequest($"{ex.Message}");
            }
        }
    }
}