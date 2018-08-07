using DataAccess.School;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(): base("DefaultConnection") {}  

        public DbSet<Customer.Customer> Customer { get; set; }
        public DbSet<Customer.MembershipType> MembershipType { get; set; }

        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }
    }
}
