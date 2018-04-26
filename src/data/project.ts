export class Project {
  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $projectName
   * @return {string}
   */
  public get $projectName(): string {
    return this.projectName;
  }

  /**
   * Getter $projectDesc
   * @return {string}
   */
  public get $projectDesc(): string {
    return this.projectDesc;
  }

  /**
   * Getter $pages
   * @return {any[]}
   */
  public get $pages(): any[] {
    return this.pages;
  }

  /**
   * Getter $isSelected
   * @return {boolean}
   */
  public get $isSelected(): boolean {
    return this.isSelected;
  }

  /**
   * Getter $isActive
   * @return {boolean}
   */
  public get $isActive(): boolean {
    return this.isActive;
  }

  /**
   * Getter $manager
   * @return {string}
   */
  public get $manager(): string {
    return this.manager;
  }

  /**
   * Getter $workspaceId
   * @return {string}
   */
  public get $workspaceId(): string {
    return this.workspaceId;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $projectName
   * @param {string} value
   */
  public set $projectName(value: string) {
    this.projectName = value;
  }

  /**
   * Setter $projectDesc
   * @param {string} value
   */
  public set $projectDesc(value: string) {
    this.projectDesc = value;
  }

  /**
   * Setter $pages
   * @param {any[]} value
   */
  public set $pages(value: any[]) {
    this.pages = value;
  }

  /**
   * Setter $isSelected
   * @param {boolean} value
   */
  public set $isSelected(value: boolean) {
    this.isSelected = value;
  }

  /**
   * Setter $isActive
   * @param {boolean} value
   */
  public set $isActive(value: boolean) {
    this.isActive = value;
  }

  /**
   * Setter $manager
   * @param {string} value
   */
  public set $manager(value: string) {
    this.manager = value;
  }

  /**
   * Setter $workspaceId
   * @param {string} value
   */
  public set $workspaceId(value: string) {
    this.workspaceId = value;
  }

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
}
