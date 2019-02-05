class Log {
    log : string = "";
    logId : string;l
    logElement : HTMLElement;

    constructor(newLogId ?: string){
        this.logId = (newLogId) ? newLogId : "log";       
    }
    
    add(msg: string): void { 
        this.log = this.log.concat(msg).concat("\n");
    }
    
    show(): void { 
        console.log(this.log);
        this.showLog();
    }

    clear() : void {
        console.clear();
        this.log = "";
        this.showLog();
    }

    private showLog() : void {
        this.setupLogElement();
        if (this.logElement){
            this.logElement.innerHTML = this.log.replace(/(?:\r\n|\r|\n)/g, '<br />');            
        }
    }

    private setupLogElement(){
        if (!this.logElement){
            this.logElement = document.getElementById(this.logId);
        }
    }

}