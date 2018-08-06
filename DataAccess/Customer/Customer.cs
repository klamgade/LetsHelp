using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;


namespace DataAccess.Customer
{
    public class Customer
    {
        public Guid Id { get; set; }

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
        [EmailAddress]
        public string Email { get; set; }

        public string Notes { get; set; }

        public Boolean isSubscribedToNewsLetter { get; set; }

        public MembershipType membershipType { get; set; }

    }
}
