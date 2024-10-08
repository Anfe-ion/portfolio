import { Directive, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";


@Directive() //Para que sirva la clase

export abstract class ServiceComponent implements OnInit {

    data: any

    ngOnInit(): void {
        this.getData()
    }

    constructor(protected dataService: DataService) { }

    getData() {
        this.dataService.getdata().subscribe((response) => {
            this.data = response
            console.log(this.data)
        })
    }

    navigateTo(url: string): void {
        window.open(url, '_blank');
    }
}