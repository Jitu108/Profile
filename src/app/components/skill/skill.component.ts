import { SkillSet } from '../../classes/skill-set';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  Header: string = "Skill Set";
  Details: string = "Over the last 12+ years, I have added wide range of toolkit to my skill-set.";

  showIndex: number = 0;

  skillSets: SkillSet[];
  constructor() { }

  ngOnInit() {
    this.GetSkillSet();
  }

  headerClicked(i: number){
    this.showIndex = i;
  }

  GetSkillSet() {
    this.skillSets = 
    [
      { 
        visible: true,
        key: "Concepts", 
        value: [
          {key: "Object Oriented Programming", visible: true, url: 'https://en.wikipedia.org/wiki/Object-oriented_programming'}, 
          {key: "SOLID Design Principles", visible: true, url: 'https://en.wikipedia.org/wiki/SOLID'},
          {key: "Design Patterns - Creational, Structural and Behavioral", visible: true, url: 'https://en.wikipedia.org/wiki/Design_Patterns'},
          {key: "Test-Driven Development", visible: true, url: 'https://en.wikipedia.org/wiki/Test-driven_development'},
          {key: "Domain-Driven Development", visible: true, url: 'https://en.wikipedia.org/wiki/Domain-driven_design'},
          {key: "Relational Database Management System", visible: true, url: 'https://en.wikipedia.org/wiki/Relational_database'},
          {key: "Object Relational Mapping", visible: true, url: 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping'},
         
        ]
      },
      {
        visible: true,
        key: "Microsoft Technologies",
        value: [
          {key: "C# 3..9", visible: true, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'},
          {key: "ASP.NET", visible: true, url: 'https://dotnet.microsoft.com/apps/aspnet'},
          {key: ".NET MVC", visible: true, url: 'https://dotnet.microsoft.com/apps/aspnet/mvc'},
          {key: "Entity Framework", visible: true, url: 'https://docs.microsoft.com/en-us/ef/'},
          {key: "Language INtegrated Query (LINQ)", visible: true, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/'},
          {key: ".NET Web API", visible: false, url: 'https://dotnet.microsoft.com/apps/aspnet/apis'},
          {key: "Model View ViewModel (MVVM)", visible: false, url: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel'}
        ]
      },
      {
        visible: true,
        key: "Database / Reporting Tools",
        value: [
          {key: "SQL Server 2005..16", visible: true, url: 'https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15'},
          {key: "HANA DB", visible: true, url: 'https://www.sap.com/india/products/hana.html'},
          {key: "Telerik Reporting", visible: false, url: 'https://docs.telerik.com/reporting/overview'},
          {key: "Crystal Report", visible: false, url: 'https://www.crystalreports.com/'}
        ]
      },
      {
        visible: true,
        key: "Front-End Technologies",
        value: [
          {key: "Angular 2..11", visible: true, url: 'https://angular.io/'},
          {key: "TypeScript", visible: true, url: 'https://www.typescriptlang.org/'},
          {key: "jQuery", visible: true, url: 'https://jquery.com/'},
          {key: "JavaScript", visible: true, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
          {key: "RxJS", visible: true, url: 'https://angular.io/guide/rx-library'},
          {key: "HTML5", visible: true, url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'}
        ]
      },
      {
        visible: true,
        key: "Styling",
        value: [
          {key: "CSS4", visible: true, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
          {key: "Bootstrap 4", visible: true, url: 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'},
          {key: "SASS", visible: true, url: 'https://sass-lang.com/'}
        ]
      },
      {
        visible: true,
        key: "Programming Environments",
        value: [
          {key: "Visual Studio", visible: true, url: 'https://visualstudio.microsoft.com/'},
          {key: "VS Code", visible: true, url: 'https://code.visualstudio.com/docs'},
          {key: "SQL Server Management Studio", visible: true, url: 'https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15'},
          {key: "HANA Studio", visible: true, url: ''}
        ]
      },
      {
        visible: true,
        key: "Code Management & Version Control",
        value: [
          {key: "SVN", visible: true, url: 'https://subversion.apache.org/'},
          {key: "TFS", visible: true, url: 'https://azure.microsoft.com/en-in/services/devops/server/'},
          {key: "Stash / Bitbucket", visible: true, url: 'https://bitbucket.org/product'},
          {key: "JIRA", visible: true, url: 'https://www.atlassian.com/software/jira'},
          {key: "GitHub", visible: true, url: 'http://github.com/'}
        ]
      },
      {
        visible: true,
        key: "Third Party Controls",
        value: [
          {key: "Kendo UI", visible: true, url: 'https://www.telerik.com/kendo-ui'},
          {key: "Telerik Conttrols for ASP.NET", visible: false, url: 'https://www.telerik.com/products/aspnet-ajax.aspx'}
        ]
      }
    ];

  }


}
