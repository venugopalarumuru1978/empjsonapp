export class Employee {
    id:number=0;
    ename:string = "";
    job:string = "";
    salary:number = 0.0;
    mailid:string = "";
    pswd:string = "";

    constructor(eno:number, ename:string, job:string, sal:number, mailid:string, pwd:string)
    {
        this.id = eno;
        this.ename = ename;
        this.job = job;
        this.salary = sal;
        this.mailid = mailid;
        this.pswd = pwd;
    }
}
