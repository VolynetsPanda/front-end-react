import ASN1 from '@lapo/asn1js';
import Hex from '@lapo/asn1js/hex';
const decodeHelper = (certData) => {
    console.log('testing certData => ', certData)
    const result = ASN1.decode(certData);
    console.log('testing result => ', result)
}
export {
    decodeHelper
}
