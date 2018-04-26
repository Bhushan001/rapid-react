export class Workspace {

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $workspaceName
     * @return {string}
     */
	public get $workspaceName(): string {
		return this.workspaceName;
	}

    /**
     * Getter $workspaceDesc
     * @return {string}
     */
	public get $workspaceDesc(): string {
		return this.workspaceDesc;
	}

    /**
     * Getter $projects
     * @return {any[]}
     */
	public get $projects(): any[] {
		return this.projects;
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
     * Getter $Owner
     * @return {string}
     */
	public get $Owner(): string {
		return this.Owner;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $workspaceName
     * @param {string} value
     */
	public set $workspaceName(value: string) {
		this.workspaceName = value;
	}

    /**
     * Setter $workspaceDesc
     * @param {string} value
     */
	public set $workspaceDesc(value: string) {
		this.workspaceDesc = value;
	}

    /**
     * Setter $projects
     * @param {any[]} value
     */
	public set $projects(value: any[]) {
		this.projects = value;
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
     * Setter $Owner
     * @param {string} value
     */
	public set $Owner(value: string) {
		this.Owner = value;
  }


  constructor(private id: string,
    private workspaceName: string,
    private workspaceDesc: string,
    private projects: any[],
    private isSelected: boolean,
    private isActive: boolean,
    private Owner: string) {}
}
