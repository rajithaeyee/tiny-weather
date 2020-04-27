export default class ForecastItem{
    isTomorrow!: boolean;
    date!: string;
    dayName!: string;
    icon!: string;
    temperature!: string;
    summary!: string;
    location!: string;

    constructor(isTomorrow:boolean, date: string, icon: string, temperature: string, summary: string, location: string){
        this.isTomorrow = isTomorrow;
        this.date = date;
        this.icon = icon;
        this.temperature= temperature;
        this.summary= summary;  
        this.location = location
    }
}