import {Util} from '../../src/helpers/util';

describe('Util', () => {
    describe('bin2Dec', () => {
        beforeEach(() => {

        });
        const result = Util.bin2Dec('00110001111110010101111011011101');

        it('should decode container1', () => {
            expect(result).toEqual(838426333);
        });

    });

    describe('bin2DecTwosComplement', () => {
        it('should decode 0111 to 7', () => {
            expect(Util.bin2DecTwosComplement('0111')).toBe(7);
        });

        it('should decode 1111 to -1', () => {
            expect(Util.bin2DecTwosComplement('1111')).toBe(-1);
        });

        it('should decode 1000 to -8', () => {
            expect(Util.bin2DecTwosComplement('1000')).toBe(-8);
        });

        it('should decode 1001 0001 to -111', () => {
            expect(Util.bin2DecTwosComplement('10010001')).toBe(-111);
        });

        it('should decode 1000 1101 0100 1101 to -29363', () => {
            expect(Util.bin2DecTwosComplement('1000110101001101')).toBe(-29363);
        });

        it('should decode 0111 1111 to 127', () => {
            expect(Util.bin2DecTwosComplement('01111111')).toBe(127);
        });

        it('should decode 0110 1101 1111 0001 to 28145', () => {
            expect(Util.bin2DecTwosComplement('0110110111110001')).toBe(28145);
        });
    });

    describe('Convert binary float to dec', () => {
        const result = Util.convertBinaryToFloat('00110001111110010101111011011101');

        it('should decode container1', () => {
            expect(result).toEqual(7.257638490187901e-9);
        });

    });

    describe('Convert hexToBin', () => {
        const result = Util.hexToBin('40dd5ef931a148e3d1792f');

        it('should decode container1', () => {
            expect(result).toEqual('0100000011011101010111101111100100110001101000010100100011100011110100010111100100101111');
        });

    });

    describe('hexToSinglePrecisionFloat', () => {
        // const hexString = '00111110001000000000000000000000';
        let hex = '3E200000';
        let expected = 0.15625;

        it('0x' + hex + ' should be ' + expected, () => {
            expect(Util.hexToSinglePrecisionFloat(hex)).toBe(expected);
        });
    });

    describe('padHexStringWithLeadingZeros', () => {
        let hex = 'abcd';
        let expected = hex;
        it('should leave ' + hex + ' as is', () => {
            expect(Util.padHexStringWithLeadingZeros(hex)).toEqual(expected);
        });

        hex = 'bcd';
        expected = '0bcd';
        it('should add one 0 to ' + hex, () => {
            expect(Util.padHexStringWithLeadingZeros(hex)).toEqual(expected);
        });

        hex = 'abcbcd';
        expected = hex;
        it('should leave ' + hex + ' as is', () => {
            expect(Util.padHexStringWithLeadingZeros(hex)).toEqual(expected);
        });
    });

    describe('padBinStringWithLeadingZeros', () => {
        let bin = '11110000';
        let expected = bin;
        it('should leave ' + bin + ' as is', () => {
            expect(Util.padBinStringWithLeadingZeros(bin)).toEqual(expected);
        });

        bin = '1110000';
        expected = '01110000';
        it('should change ' + bin + ' to ' + expected, () => {
            expect(Util.padBinStringWithLeadingZeros(bin)).toEqual(expected);
        });

        bin = '';
        expected = bin;
        it('should leave the emtpy string as is', () => {
            expect(Util.padBinStringWithLeadingZeros(bin)).toEqual(expected);
        });
    });

    describe('littleToBigEndian', () => {
        let hex = 'AB0135';
        let expected = '3501AB';

        it('should convert: ' + hex + ' to: ' + expected, () => {
           expect(Util.littleToBigEndian(hex)).toEqual(expected);
        });

        hex = 'B0135';
        expected = '35010B';
        it('should convert: ' + hex + ' to: ' + expected, () => {
            expect(Util.littleToBigEndian(hex)).toEqual(expected);
        });
    });

});
