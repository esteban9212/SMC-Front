export class Method {

	ID_AS_METHOD:string;
	NAME:string;
	DESCRIPTION:string;
	DIRECT:string;
	COMPL_SRC_ID_COMPL_SRC:string;
	SHORT_DESCRIPTION:string;

	constructor(ID_AS_METHOD:string, NAME:string,DESCRIPTION:string,
		DIRECT:string,COMPL_SRC_ID_COMPL_SRC:string, SHORT_DESCRIPTION:string,
		created_at:string, updated_at:string) {
		this.ID_AS_METHOD=ID_AS_METHOD;
		this.NAME=NAME;
		this.DESCRIPTION=DESCRIPTION;
		this.DIRECT=DIRECT;
		this.COMPL_SRC_ID_COMPL_SRC=COMPL_SRC_ID_COMPL_SRC;
		this.SHORT_DESCRIPTION=SHORT_DESCRIPTION;
	}
}