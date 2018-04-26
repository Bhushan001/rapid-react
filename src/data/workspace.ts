export class Workspace {
  constructor(
    private id: string,
    private workspaceName: string,
    private workspaceDesc: string,
    private projects: any[],
    private isSelected: boolean,
    private isActive: boolean,
    private Owner: string
  ) {}
  /**
   * Getter $id
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Getter $workspaceName
   * @return {string}
   */
  public getWorkspaceName(): string {
    return this.workspaceName;
  }

  /**
   * Getter $workspaceDesc
   * @return {string}
   */
  public getWorkspaceDesc(): string {
    return this.workspaceDesc;
  }

  /**
   * Getter $projects
   * @return {any[]}
   */
  public getProjects(): any[] {
    return this.projects;
  }

  /**
   * Getter $isSelected
   * @return {boolean}
   */
  public getIsSelected(): boolean {
    return this.isSelected;
  }

  /**
   * Getter $isActive
   * @return {boolean}
   */
  public getIsActive(): boolean {
    return this.isActive;
  }

  /**
   * Getter $Owner
   * @return {string}
   */
  public getOwner(): string {
    return this.Owner;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public setId(value: string) {
    this.id = value;
  }

  /**
   * Setter $workspaceName
   * @param {string} value
   */
  public setWorkspaceName(value: string) {
    this.workspaceName = value;
  }

  /**
   * Setter $workspaceDesc
   * @param {string} value
   */
  public setWorkspaceDesc(value: string) {
    this.workspaceDesc = value;
  }

  /**
   * Setter $projects
   * @param {any[]} value
   */
  public setProjects(value: any[]) {
    this.projects = value;
  }

  /**
   * Setter $isSelected
   * @param {boolean} value
   */
  public setIsSelected(value: boolean) {
    this.isSelected = value;
  }

  /**
   * Setter $isActive
   * @param {boolean} value
   */
  public setIsActive(value: boolean) {
    this.isActive = value;
  }

  /**
   * Setter $Owner
   * @param {string} value
   */
  public setOwner(value: string) {
    this.Owner = value;
  }
}
