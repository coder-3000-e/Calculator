namespace Ryzen.Ryzen.API.Models.ResponseModels
{
    public class CalculationResponseModel
    {
        public double Result { get; }

        public CalculationResponseModel(double result)
        {
            Result = result;
        }
    }
}
