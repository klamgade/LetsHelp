namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Insert_Customer_Data : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT Customers ON");
            Sql("INSERT INTO Customers (Id, FirstName, IsSubscribedToNews, MembershipTypeId) VALUES('1', 'Kamal', '0', '1'); ");
            Sql("INSERT INTO Customers (Id, FirstName, IsSubscribedToNews, MembershipTypeId) VALUES('2', 'Dalli', '1', '2'); ");
            Sql("INSERT INTO Customers (Id, FirstName, IsSubscribedToNews, MembershipTypeId) VALUES('3', 'Nana', '0', '1'); ");

        }

        public override void Down()
        {
        }
    }
}
