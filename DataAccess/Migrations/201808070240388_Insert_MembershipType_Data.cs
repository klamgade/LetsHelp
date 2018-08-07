namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Insert_MembershipType_Data : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT MembershipTypes ON");
            Sql("INSERT INTO MembershipTypes (Id, SignupFee, DurationInMonths, DiscountRate) VALUES(1, 200, 3, 10); ");
            Sql("INSERT INTO MembershipTypes (Id, SignupFee, DurationInMonths, DiscountRate) VALUES(2, 100, 3, 18); ");
            Sql("INSERT INTO MembershipTypes (Id, SignupFee, DurationInMonths, DiscountRate) VALUES(3, 290, 6, 13); ");
        }
        
        public override void Down()
        {
        }
    }
}
