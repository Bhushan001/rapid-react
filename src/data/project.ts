export class Project {
  constructor(
    private id: string,
    private projectName: string,
    private projectDesc: string,
    private pages: any[],
    private isSelected: boolean,
    private isActive: boolean,
    private manager: string,
    private workspaceId: string
  ) {}
  /**
   * Getter $id
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Getter $projectName
   * @return {string}
   */
  public getProjectName(): string {
    return this.projectName;
  }

  /**
   * Getter $projectDesc
   * @return {string}
   */
  public getProjectDesc(): string {
    return this.projectDesc;
  }

  /**
   * Getter $pages
   * @return {any[]}
   */
  public getPages(): any[] {
    return this.pages;
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
   * Getter $manager
   * @return {string}
   */
  public getManager(): string {
    return this.manager;
  }

  /**
   * Getter $workspaceId
   * @return {string}
   */
  public getWorkspaceId(): string {
    return this.workspaceId;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public setId(value: string) {
    this.id = value;
  }

  /**
   * Setter $projectName
   * @param {string} value
   */
  public setProjectName(value: string) {
    this.projectName = value;
  }

  /**
   * Setter $projectDesc
   * @param {string} value
   */
  public setProjectDesc(value: string) {
    this.projectDesc = value;
  }

  /**
   * Setter $pages
   * @param {any[]} value
   */
  public setPages(value: any[]) {
    this.pages = value;
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
   * Setter $manager
   * @param {string} value
   */
  public setManager(value: string) {
    this.manager = value;
  }

  /**
   * Setter $workspaceId
   * @param {string} value
   */
  public setWorkspaceId(value: string) {
    this.workspaceId = value;
  }
}
