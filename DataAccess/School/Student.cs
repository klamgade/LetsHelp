using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.School
{
    public class Student
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int StudentID { get; set; }

        [Required]
        [StringLength(255)]
        public string StudentName { get; set; }

        public DateTime? DateOfBirth { get; set; }
        public byte[] Photo { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }

        public Grade Grade { get; set; }
    }
}
