namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class populateStudent : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Students");
            AlterColumn("dbo.Students", "StudentID", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Students", "StudentID");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Students");
            AlterColumn("dbo.Students", "StudentID", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Students", "StudentID");
        }
    }
}
