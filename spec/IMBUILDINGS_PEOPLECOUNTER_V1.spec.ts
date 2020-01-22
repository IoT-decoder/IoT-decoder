import { IMBUILDINGS_PEOPLECOUNTER_V1 } from './../src/decoders/IMBUILDINGS_PEOPLECOUNTER_V1';
import { Util } from './../src/helpers/util';
import {DecodeRequest} from '../src/DTO/decodeRequest.dto';
import {Container} from '../src/DTO/container.dto';
import {DecodingController} from '../src/decoding.controller';

describe('IMBUILDINGS_IMMotion_V1', () => {
    const sut: IMBUILDINGS_PEOPLECOUNTER_V1 = new IMBUILDINGS_PEOPLECOUNTER_V1();

    describe('port *', () => 
    {
        const result = sut.decode(new DecodeRequest('02060004a30b00e7f6e600011900000000820000000007', 1, null, 'IMBUILDINGS_IMMotion_V1', 'AAAAAAAAAAAAAAAA'));

    //    02 06 0004a30b00e7f6e6 00 0119 0000 0000 82 0000 0000 07
        const expected = [
            {
                containerName: sut.containerDefinition.payloadType.name,
                persist: true,
                postfix: '',
                value: '02',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.typeVariant.name,
                persist: true,
                postfix: '',
                value: '06',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.deviceId.name,
                persist: true,
                postfix: '',
                value: '0004a30b00e7f6e6',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.deviceStatus.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.batteryVoltage.name,
                persist: true,
                postfix: 'V',
                value: '2.81',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.counterA.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.counterB.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.sensorStatus.name,
                persist: true,
                postfix: '',
                value: '82',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.totalCounterA.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.totalCounterB.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.payloadCounter.name,
                persist: true,
                postfix: '',
                value: '7',
                valueType: 'real',
            }
            ];

        it('should contain 11 containers', () => {
            expect(result.containers.length).toBe(11);
        });

        it('result should contain all the expected containers', () => {
            expected.forEach(x => expect(result.containers).toContainEqual(x));
        });

       
        it('should be able to generate container definitions', () => {
            let containersJSON:String = Util.generateContainers(sut.containerDefinition);
            console.log("Json containers: \n\n" + containersJSON );
        });

    });
    describe('real payload from device', () => 
    {
        const result = sut.decode(new DecodeRequest('02060004a30b00eb868600015c00030001000014001606', 1, null, 'IMBUILDINGS_IMMotion_V1', 'AAAAAAAAAAAAAAAA'));

    //    02 06 0004a30b00eb8686 00 015c 0003 0001 00 0014 0016 06
        const expected = [
            {
                containerName: sut.containerDefinition.payloadType.name,
                persist: true,
                postfix: '',
                value: '02',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.typeVariant.name,
                persist: true,
                postfix: '',
                value: '06',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.deviceId.name,
                persist: true,
                postfix: '',
                value: '0004a30b00eb8686',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.deviceStatus.name,
                persist: true,
                postfix: '',
                value: '0',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.batteryVoltage.name,
                persist: true,
                postfix: 'V',
                value: '3.48',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.counterA.name,
                persist: true,
                postfix: '',
                value: '3',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.counterB.name,
                persist: true,
                postfix: '',
                value: '1',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.sensorStatus.name,
                persist: true,
                postfix: '',
                value: '00',
                valueType: 'string',
            },
            {
                containerName: sut.containerDefinition.totalCounterA.name,
                persist: true,
                postfix: '',
                value: '20',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.totalCounterB.name,
                persist: true,
                postfix: '',
                value: '22',
                valueType: 'real',
            },
            {
                containerName: sut.containerDefinition.payloadCounter.name,
                persist: true,
                postfix: '',
                value: '6',
                valueType: 'real',
            }
            ];

        it('should contain 11 containers', () => {
            expect(result.containers.length).toBe(11);
        });

        it('result should contain all the expected containers', () => {
            expected.forEach(x => expect(result.containers).toContainEqual(x));
        });

       
        it('should be able to generate container definitions', () => {
            let containersJSON:String = Util.generateContainers(sut.containerDefinition);
       //     console.log("Json containers: \n\n" + containersJSON );
        });

    });

});
// 