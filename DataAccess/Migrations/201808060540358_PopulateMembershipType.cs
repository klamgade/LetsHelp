namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class PopulateMembershipType : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths,DiscountRate) VALUES('f7798488-f6c6-43f9-892e-64402e22ea0d', 20, 2, 30);");
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths,DiscountRate) VALUES('b916efc4-990e-4c92-b9bb-868d261b40d6', 10, 3, 3);");
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths,DiscountRate) VALUES('7bffdab5-3635-4124-a422-38f9dde20843', 20, 4, 5);");
        }

        public override void Down()
        {
        }
    }
}
