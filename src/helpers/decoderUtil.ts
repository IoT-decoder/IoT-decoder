import {Container} from "../DTO/container.dto";
import {Util} from "./util";

export class DecoderUtil {

    static addContainer(containers: Container[], containerName: string, value: any, valueType: string, postfix: string, persist: boolean) {
        containers.push(new Container(containerName, persist, postfix, Util.customToString(value), valueType));
    }

}