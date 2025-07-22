using arindamengineering.Models;
using ContactFormApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContactFormApp.Controllers
{
    public class ContactController : Controller
    {
        private readonly EmailService _emailService;
        public ContactController(EmailService emailService) => _emailService = emailService;

        [HttpGet] public IActionResult Index() => View();


        [HttpPost]
        public async Task<IActionResult> SendEmail(ContactFormModel model)
        {
            if (!ModelState.IsValid)
                return View("Index", model);

            string toEmail = "kjpandya1995@gmail.com";
            string subject = model.Subject;
            string message = $@"
        <p><strong>Name:</strong> {model.Name}</p>
        <p><strong>Email:</strong> {model.Email}</p>
        <p><strong>Message:</strong>{model.Message}</p>";

            await _emailService.SendEmailAsync(toEmail, subject, message);

    TempData["Message"] = "Your message has been sent successfully.";
            return RedirectToAction("Index");
        }

    }
}
