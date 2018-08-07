namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopulateStudentAndGrade : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT Students ON");
            Sql("INSERT INTO Students (StudentID, StudentName, DateOfBirth, Photo, Height, Weight) " +
                "VALUES('2', 'Kamal','1988-11-11', null, '174', '69'); ");
        }
        
        public override void Down()
        {
        }
    }
}


