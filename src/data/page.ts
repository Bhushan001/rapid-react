export class Page {
  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $pageName
   * @return {string}
   */
  public get $pageName(): string {
    return this.pageName;
  }

  /**
   * Getter $pageDesc
   * @return {string}
   */
  public get $pageDesc(): string {
    return this.pageDesc;
  }

  /**
   * Getter $rapidBlocks
   * @return {any[]}
   */
  public get $rapidBlocks(): any[] {
    return this.rapidBlocks;
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
   * Getter $author
   * @return {string}
   */
  public get $author(): string {
    return this.author;
  }

  /**
   * Getter $projectId
   * @return {string}
   */
  public get $projectId(): string {
    return this.projectId;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $pageName
   * @param {string} value
   */
  public set $pageName(value: string) {
    this.pageName = value;
  }

  /**
   * Setter $pageDesc
   * @param {string} value
   */
  public set $pageDesc(value: string) {
    this.pageDesc = value;
  }

  /**
   * Setter $rapidBlocks
   * @param {any[]} value
   */
  public set $rapidBlocks(value: any[]) {
    this.rapidBlocks = value;
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
   * Setter $author
   * @param {string} value
   */
  public set $author(value: string) {
    this.author = value;
  }

  /**
   * Setter $projectId
   * @param {string} value
   */
  public set $projectId(value: string) {
    this.projectId = value;
  }

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
}
