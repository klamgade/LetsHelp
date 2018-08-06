using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace DataAccessLayer
{
    class DataContext: IdentityDbContext<Users>
    {
        public DataContext() : base("DefaultConnection") {}  

        public DbSet<Customer> Customer { get; set; }
    }
}
