using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace DAL
{
    class DataContext : DbContext
    {
        public DataContext():base("DefaultConnection") {}  

        public DbSet<Customer> Customer_PersonalDetail { get; set; }
    }
}
