using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    class DataContext : Microsoft.AspNet.Identity.EntityFramework.IdentityDbContext
    {
        public DataContext(): base("DefaultConnection") {}  

        public System.Data.Entity.DbSet<Customer.Customer> Customer { get; set; }
    }
}
