import { Project } from './../../classes/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  Header: string = "Projects Undertaken";
  Details: string = "Projects I have worked on span multiple domain as well as technologies. The domains include Education, Medical, Enterprise Applications and Travel.";
  Projects: Project[];
  visibilityHolder: {[s: string]: boolean} = {};

  constructor() { }

  ngOnInit() {
    this.getSortedProjects();
  }
  projectSelected(i: number){
    var exist = this.visibilityHolder[i];
    if(exist === undefined || !exist) {
      this.visibilityHolder[i] = true;
    }
    else {
      this.visibilityHolder[i] = false;
    }
  }

  getSortedProjects() {
    this.Projects = this.getProjects().sort((n1, n2) => 
    {
      if(n1.Order > n2.Order) return 1;
      if(n1.Order < n2.Order) return -1;
      return 0;
    });
  }

  getProjects() {
    var projects: Project[] = [
      {
        Order: 1,
        Visible: true,
        Role: 'Database Developer',
        Title: 'NextGen VLM',
        Details: 'NextGen of VMS below. Developed with new technologies and refinement of business requirements. Developed in NodeJS, Angular and HanaDB.',
        Responsibilities: [
          {
            Value: 'Table and Procedure creation and modification',
            Visible: true
          },
          {
            Value: 'Data upload from various sources like excel, CSV etc.',
            Visible: true
          },
          {
            Value: 'Writing script for data validation, verification and upload',
            Visible: true
          },
          {
            Value: 'Writing script for report generation',
            Visible: true
          }
        ],
        Technologies: [
          {
            Value: 'HanaDB',
            Visible: true
          }
        ]
      },
      {
        Order: 2,
        Visible: true,
        Role: 'Software Developer',
        Title: 'SAP Value Management System',
        Details: 'VMS lets companies compare their different processes with their peer companies based on different parameters. It then tells companies how and how much they would fare among peers if they use SAP’s products. Provides tailor-made Move-The-Needle (MTN), Quick-Value-Assessment (QVA), Surveys, and Business Cases according to target company.',
        Responsibilities: [
          {
            Value: 'Business Logic Implementation',
            Visible: true
          },
          {
            Value: 'Code Review and Code Optimization',
            Visible: true
          },
          {
            Value: 'Query and Procedure finetuning - Conversion of iteration-based operations to set-based operations',
            Visible: true
          },
          {
            Value: 'Index Optimization',
            Visible: true
          },
          {
            Value: 'Reporting Query and Procedure Generation',
            Visible: true
          }
        ],
        Technologies: [
          {
            Value: '.Net (ASP.NET, SQL Server, AJAX)',
            Visible: true
          },
          {
            Value: 'Angular',
            Visible: true
          },
          {
            Value: 'OpenXML',
            Visible: true
          }
        ]
      },
      {
        Order: 3,
        Visible: true,
        Role: 'Software Developer',
        Title: 'reader.lightsailed.com',
        Details: 'Uses e-reader and associated tools to check students’ readability and comprehensibility using different types of questions, interaction of student with teacher using thoughts and dashboards etc. This is extensively being used in US and has now available in China also.',
        Responsibilities: [
          {
            Value: 'Functionality Development',
            Visible: true
          },
          {
            Value: 'Code-refactoring to create reusable components',
            Visible: true
          },
          {
            Value: 'Conversion from Promise to Observable to take advantage of RxJs',
            Visible: true
          },
          
        ],
        Technologies: [
          {
            Value: 'Angular, TypeScript, RxJS',
            Visible: true
          },
          {
            Value: 'CSS, Bootstrap',
            Visible: true
          },
          {
            Value: 'Stash/Bitbucket, JIRA Confluence',
            Visible: true
          }
        ],
      },
      {
        Order: 4,
        Visible: true,
        Role: 'Team Lead - Developer',
        Title: 'LightSailed Web Portal',
        Details: 'Counterpart of LightSailed. Used by schools and other entities/stakeholders to bulk-upload data with various validations, data-activation trigger and mail-based intimation to different stakeholders.',
        Responsibilities: [
          {
            Visible: true,
            Value: 'Architecture and Module Setup'
          },
          {
            Visible: true,
            Value: 'Consuming API'
          },
          {
            Visible: true,
            Value: 'Business Logic Implementation'
          }
        ],
        Technologies: [
          {
            Visible: true,
            Value: '.Net (C#, MVC, EF, LINQ)'
          },
          {
            Visible: true,
            Value: ' Kendo UI, JavaScript, Bootstrap'
          },
          {
            Visible: true,
            Value: 'JIRA, Confluence'
          }
        ]
      },
      {
        Order: 5,
        Role: 'Team Lead - Developer',
        Title: 'Success Charter Academy - School Information System',
        Details: " Success Charter is a group of schools in US. SIS is a complete automation portal for different level of users with different accesses. Users include Teacher, Administrator, Parents etc. This portal covers automation of all type of school level operation, e-commerce, SMS and Email broadcasting, reporting on students' academics, teacher development on real time.",
        Visible: true,
        Responsibilities: [
          {
            Value: 'Requirement Analysis and Module Planning', 
            Visible: true
          },
          {
            Value: 'Class/Interface Designing', 
            Visible: true
          },
          {
            Value: 'Business Logic Implementation, Unit Testing', 
            Visible: true
          },
          {
            Value: 'Designed Data structure for multi-level Heatmaps', 
            Visible: true
          },
          {
            Value: 'Code Optimization', 
            Visible: true
          }
        ],
        Technologies:[
          {
            Value: '.Net Technology - C#, MVC, MVVM, SQL Server', 
            Visible: true
          },
          {
            Value: 'JQuery, Kendo UI', 
            Visible: true
          },
          {
            Value: 'TFS, Stash, JIRA', 
            Visible: true
          }
        ]
      },
      {
        Order: 6,
        Visible: true,
        Role: 'Software Developer',
        Title: 'Novartis Oncology',
        Details: 'The application is to measure what drug to administer to a patient who have cancer for certain period of time. There were many routes to reach for a certain medication and this application was to calculate all the complex logic and give all the drug list and precautions.',
        Responsibilities: [
          {
            Value: 'My responsibility was to create a dynamic UI which can accommodate the dynamic nature of changes in medications. The application was created in ASP.net.',
            Visible: true
          }
        ],
        Technologies: [
          {
            Value: 'C#, ASP.Net, SQL Server',
            Visible: true
          }
        ]
      },
      {
        Order: 7,
        Visible: true,
        Role: 'Database Developer',
        Title: 'SAP Benchmarking',
        Details: 'The Admin Panel of VLM. Different users could have different authors rights to create questions, answers, surveys, business process templates.',
        Responsibilities: [
          {
            Value: 'Creation of database schema/tables, procedures, triggers',
            Visible: true
          },
          {
            Value: 'Performance tuning',
            Visible: true
          },
          {
            Value: 'Data transition from different sources (previous system and excel sheets) to new system with all the constraints',
            Visible: true
          }
        ],
        Technologies: [
          {
            Value: 'ASP.Net, SQL Server',
            Visible: true
          }
        ]
      },
      {
        Order: 8,
        Visible: true,
        Role: 'Software Developer',
        Title: 'LIMCO',
        Details: 'LIMCO is a company which provides telecom SIM services to foreign nationals in India. The project was a bill generation and manipulation system. The bill used to come in different format with lots of junk data and document parser was created to parse them to fetch relevant data.',
        Responsibilities: [
          {
            Value: 'File parser creation',
            Visible: true
          },
          {
            Value: 'Procedure creation for data manipulation',
            Visible: true
          },
          {
            Value: 'Data transition from old to new system with different schema',
            Visible: true
          }
        ],
        Technologies: [
          {
            Value: 'C#, ASP.Net, SQL Server',
            Visible: true
          }
        ]
      },
    ];

    return projects;
  }
}
