using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    class DataContext : System.Data.Entity.DbContext
    {
        public DataContext(): base("DefaultConnection") {}  

        public System.Data.Entity.DbSet<Customer> Customer { get; set; }
    }
}
