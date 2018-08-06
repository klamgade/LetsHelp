using Let_sHelp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Db_Connection
{
    public class DataContext: DbContext
    {
        public DataContext() : base("DefaultConnection") {}  

        public DbSet<Customer_PersonalDetail> Customer_PersonalDetail { get; set; }
    }
}
