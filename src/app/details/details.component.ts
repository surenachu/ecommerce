import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "./service/data";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
list:any;
  constructor(private route:ActivatedRoute,private service:DataService) {
    const desc=this.route.snapshot.params["dynamic"];
    
    this.list=this.service.list.find(el=>el.title==desc);
    

  }

  ngOnInit() {
  }

}
