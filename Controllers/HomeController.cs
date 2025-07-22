using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using arindamengineering.Models;

namespace arindamengineering.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
     [Route("about")]
    public IActionResult about()
    {
        return View();
    }
    [Route("products")]
    public IActionResult products()
    {
        return View();
    }
    [Route("contact")]
    public IActionResult contact()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
