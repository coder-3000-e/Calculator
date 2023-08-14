FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/server/Ryzen/Ryzen.csproj", "src/server/Ryzen/"]
RUN dotnet restore "src/server/Ryzen/Ryzen.csproj"
COPY . .
RUN dotnet build "src/server/Ryzen/Ryzen.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "src/server/Ryzen/Ryzen.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ryzen.dll"]
