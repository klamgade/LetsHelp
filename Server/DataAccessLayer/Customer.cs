using System;
using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations;

namespace DataAccessLayer
{
    public class Customer
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required(ErrorMessage = "City required")]
        public string City { get; set; }

        [Required(ErrorMessage = "Contact person required")]
        [DisplayName("Contact person")]
        public string ContactPerson { get; set; }

        [Required(ErrorMessage = "Telephone required")]
        [DisplayName("Telephone")]
        [Phone]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Email required")]
        [RegularExpression(@ "\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*", ErrorMessage = "Wrong email format")]
        [EmailAddress]
        public string Email { get; set; }

        public string Notes { get; set; }
    }
}
