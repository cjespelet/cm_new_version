import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonConfiguration } from '@app/modules/table/models/table-column';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  dataSource : ButtonConfiguration;
  constructor(private translate: TranslateService, private router : Router) { }

  ngOnInit(): void {
  }

  @Input() set data(data: any) {
    this.dataSource = data;
  } 

  executeAction(data : ButtonConfiguration) : void {
    console.log(data.goTo)
      switch(data.action) {
        case "redirect":
          //send to other page
          this.router.navigate(['/' + data.goTo]);

          break;
        case "default":
          break;
      }
  }

}
