using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Customer
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public bool IsSubscribedToNews { get; set; }

        //navaigation property
        public MembershipType MembershipType { get; set; }
        public int MembershipTypeId { get; set; }
    }
}
