export class Page {
  constructor(
    private id: string,
    private pageName: string,
    private pageDesc: string,
    private rapidBlocks: any[],
    private isSelected: boolean,
    private isActive: boolean,
    private author: string,
    private projectId: string
  ) {}
  /**
   * Getter $id
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Getter $pageName
   * @return {string}
   */
  public getPageName(): string {
    return this.pageName;
  }

  /**
   * Getter $pageDesc
   * @return {string}
   */
  public getPageDesc(): string {
    return this.pageDesc;
  }

  /**
   * Getter $rapidBlocks
   * @return {any[]}
   */
  public getRapidBlocks(): any[] {
    return this.rapidBlocks;
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
   * Getter $author
   * @return {string}
   */
  public getAuthor(): string {
    return this.author;
  }

  /**
   * Getter $projectId
   * @return {string}
   */
  public getProjectId(): string {
    return this.projectId;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public setId(value: string) {
    this.id = value;
  }

  /**
   * Setter $pageName
   * @param {string} value
   */
  public setPageName(value: string) {
    this.pageName = value;
  }

  /**
   * Setter $pageDesc
   * @param {string} value
   */
  public setPageDesc(value: string) {
    this.pageDesc = value;
  }

  /**
   * Setter $rapidBlocks
   * @param {any[]} value
   */
  public setRapidBlocks(value: any[]) {
    this.rapidBlocks = value;
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
   * Setter $author
   * @param {string} value
   */
  public setAuthor(value: string) {
    this.author = value;
  }

  /**
   * Setter $projectId
   * @param {string} value
   */
  public setProjectId(value: string) {
    this.projectId = value;
  }
}
