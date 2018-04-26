import { Workspace } from "./workspace";
// import { Project } from "./project";
// import { Page } from "./page";
export class Exporter {
  public dataSource: any;
  constructor() {
    this.dataSource = {
      pages: [],
      projects: [],
      workspaces: []
    };
    this.initWorkspaces();
  }

  public initWorkspaces(): void {
    const workspaces = [];
    workspaces.push(
      new Workspace(
        "5ae1b312cfb525c3f023423e45f23",
        "ICICI Monthly Statements",
        "Inmensae subtilitatis, obscuris et malesuada fames. Nec dubitamus multa",
        [],
        false,
        true,
        "Bhushan Gadekar"
      ),
      new Workspace(
        "5ae1b312cfb525c3f0e42342345f2",
        "HDFC Statements",
        "Culpa qui sit dolor pariatur sint. Consectetur incididunt dolore minim labore dolore dolore",
        [],
        false,
        true,
        "Bhushan Gadekar"
      ),
      new Workspace(
        "5ae1b312cfb525c3f0e4324325f23",
        "Kotak Statements",
        "Ullamco qui ipsum nulla ut culpa proident. Veniam ut reprehenderit adipisicing voluptate irure minim aliqua",
        [],
        false,
        true,
        "Bhushan Gadekar"
      ),
      new Workspace(
        "5ae1b312cfb525c3f0e4532423f23",
        "IDBI Statements",
        "irure aliqua commodo ut esse incididunt ex. Officia minim nisi cupidatat",
        [],
        false,
        true,
        "Bhushan Gadekar"
      ),
      new Workspace(
        "5ae1b312cfb525c3f023432e45f23",
        "RBI Bank Statements",
        "Exercitation dolore irure dolore sint adipisicing ipsum eiusmod ut ea culpa dolore. Ullamco qui ipsu",
        [],
        false,
        true,
        "Bhushan Gadekar"
      ),
      new Workspace(
        "5ae1b312cfb525c3f0e45f23424",
        "Axis Bank Statements",
        "Exercitation dolore irure dolore sint adipisicing ipsum eiusmod ut ea culpa dolore. Ullamco qui ipsu",
        [],
        false,
        true,
        "Bhushan Gadekar"
      )
    );
    this.dataSource.workspaces=workspaces;
  }

  // public initProjects(): void {}

  // public initPages(): void {}

  public getDataSet(): any[] {
    return this.dataSource;
  }
}
