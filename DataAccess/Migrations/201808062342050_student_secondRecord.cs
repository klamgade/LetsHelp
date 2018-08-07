namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class student_secondRecord : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT Students ON");
            Sql("INSERT INTO Students (StudentID, StudentName, DateOfBirth, Photo, Height, Weight, Grade_GradeId) " +
                "VALUES('2', 'Dals','1988-1-1', null, '170', '75', '1'); ");
        }
        
        public override void Down()
        {
        }
    }
}
