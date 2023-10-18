﻿using Employee.Shared;


namespace Employee.Service.Model;

public class VMState :IVM
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// State Name
    /// </summary>

    public string? StateName { get; set; }

    /// <summary>
    /// CountryId
    /// </summary>
    public int CountryId { get; set; }

    public string? CountryName { get; set; }
}
