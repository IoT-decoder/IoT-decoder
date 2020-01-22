export class Container {

    constructor(containerName: String, persist: Boolean, postfix: String, value: String, valueType: String) {
        this.containerName = containerName;
        this.persist = persist;
        this.postfix = postfix;
        this.value = value;
        this.valueType = valueType;
    }

    containerName: String;
    persist: Boolean;
    postfix: String;
    value: String;
    valueType: String;


    public toString(): string {
        //return this.firstName + ' ' + this.lastName;
        return `Container (containerName: ${this.containerName}, value: ${this.value} )`;
    }


}
