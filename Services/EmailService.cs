using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System.Threading.Tasks;

namespace ContactFormApp.Services
{
    // public class SmtpSettings { public string Server; public int Port; public string SenderName; public string SenderEmail; public string Username; public string Password; }
public class SmtpSettings
{
    public string Server { get; set; }
    public int Port { get; set; }
    public string SenderName { get; set; }
    public string SenderEmail { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}

    public class EmailService
    {
        private readonly SmtpSettings _smtp;
        public EmailService(IOptions<SmtpSettings> smtpSettings) { _smtp = smtpSettings.Value; }

        public async Task SendEmailAsync(string toEmail, string subject, string message)
        {

        if (string.IsNullOrWhiteSpace(_smtp.SenderName) || string.IsNullOrWhiteSpace(_smtp.SenderEmail))
                throw new Exception("SenderName or SenderEmail is not configured in appsettings.json");

            var email = new MimeMessage();
            email.From.Add(new MailboxAddress(_smtp.SenderName, _smtp.SenderEmail));
            email.To.Add(MailboxAddress.Parse(toEmail));
            email.Subject = subject;

            email.Body = new BodyBuilder { HtmlBody = message }.ToMessageBody();

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(_smtp.Server, _smtp.Port, MailKit.Security.SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_smtp.Username, _smtp.Password);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true); 
        }
    }
}
