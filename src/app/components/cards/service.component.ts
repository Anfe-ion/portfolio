import { Directive, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Directive() //Para que sirva la clase

export abstract class ServiceComponent implements OnInit {

    data: any
    ESdata: any
    PRdata: any

    ngOnInit(): void {
        this.getData()
        this.ESgetData()
        this.PTgetData()
    }

    constructor(protected dataService: DataService) { }

    getData() {
        this.dataService.getdata().subscribe((response) => {
            // Sort certifications if they exist in the response
            if (response?.certifications) {
                response.certifications.sort((a: any, b: any) => {
                    if (a.year !== b.year) {
                        return b.year - a.year; // Sort by year
                    } else if (a.month !== b.month) {
                        return b.month - a.month; // If the year is the same, sort by month
                    } else {
                        return b.day - a.day; // If both year and month are the same, sort by day
                    }
                });
            }
            this.data = response
            //console.log(this.data)
        })
    }

    ESgetData() {
        this.dataService.getESdata().subscribe((response) => {
            this.ESdata = response
            console.log(this.ESdata)
        })
    }

    PTgetData() {
        this.dataService.getPTdata().subscribe((response) => {
            this.PRdata = response
            console.log(this.PRdata)
        })
    }

    navigateTo(url: string): void {
        window.open(url, '_blank');
    }
}